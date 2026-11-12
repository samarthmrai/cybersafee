
"""
CyberSafe Secure AI Backend Server
Serves the CyberSafe frontend, CyberMitra chatbot,
and Firestore-powered scam number detection.
"""

import os
import re
import json
import urllib3
import requests
import firebase_admin

from pathlib import Path
from typing import Optional, List, Dict, Any

from firebase_admin import credentials, firestore
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel


# Disable insecure request warnings for existing Gemini configuration.
urllib3.disable_warnings()


# --------------------------------------------------
# ENVIRONMENT CONFIGURATION
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent

ENV_PATH = BASE_DIR / ".env"

if ENV_PATH.exists():
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())


GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-3.5-flash")
PORT = int(os.getenv("PORT", "8080"))

FIREBASE_KEY_PATH = os.getenv(
    "GOOGLE_APPLICATION_CREDENTIALS",
    "/etc/secrets/firebase-service-account.json"
)


# --------------------------------------------------
# FIREBASE INITIALIZATION
# --------------------------------------------------

db = None
firebase_error = None

try:
    if os.path.isfile(FIREBASE_KEY_PATH):

        if not firebase_admin._apps:
            firebase_credential = credentials.Certificate(
                FIREBASE_KEY_PATH
            )

            firebase_admin.initialize_app(firebase_credential)

        db = firestore.client()

        print("[Firebase] Firestore connected successfully.")

    else:
        firebase_error = "Firebase service account file not found."
        print("[Firebase] Service account file not found.")

except Exception as e:
    firebase_error = str(e)
    print(f"[Firebase Error] {e}")


# --------------------------------------------------
# FASTAPI APPLICATION
# --------------------------------------------------

app = FastAPI(
    title="CyberSafe AI Backend",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# REQUEST MODELS
# --------------------------------------------------

class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    language: Optional[str] = "en"
    history: Optional[List[ChatMessage]] = []


class PhoneCheckRequest(BaseModel):
    phone_number: str


# --------------------------------------------------
# SECURITY PATTERNS
# --------------------------------------------------

SENSITIVE_PATTERN = re.compile(
    r"\b(otp\s+is\s+\d{4,6}|"
    r"\d{4,6}\s+is\s+my\s+otp|"
    r"upi\s+pin\s+is\s+\d{4,6}|"
    r"password\s+is\s+\S+|"
    r"cvv\s+is\s+\d{3})\b",
    re.IGNORECASE
)

EMERGENCY_PATTERN = re.compile(
    r"(lost money|stolen|debited|hacked|scammed|cheated|"
    r"paisa kat gaya|paise kat gaye|hana kaledu|fraud ho gaya|"
    r"digital arrest|cbi.*video call|police.*video call|"
    r"urgent help|emergency)",
    re.IGNORECASE
)


# --------------------------------------------------
# CYBERMITRA SYSTEM INSTRUCTIONS
# --------------------------------------------------

SYSTEM_INSTRUCTIONS = """
You are CyberMitra, a friendly, patient, and highly accessible
Cyber Safety Educational AI Assistant for India.

Your mission is to protect citizens, especially students,
senior citizens, rural communities, and beginners.

Core Rules:

1. Use simple, clear, everyday language.
2. Be warm, reassuring, empathetic, and patient.
3. Reply in natural Kannada if the user requests Kannada.
4. Reply in natural Hindi if the user requests Hindi.
5. Reply in simple English if the user uses English.

Emergency and Financial Fraud:

If someone has lost money:
- Tell them to call India's National Cyber Helpline 1930 immediately.
- Tell them to report at https://cybercrime.gov.in/.
- Advise contacting their bank to freeze cards, UPI, and netbanking.

Golden Rules:

- Never share OTP or UPI PIN with anyone.
- Receiving money through UPI never requires entering a UPI PIN.
- Digital Arrest through WhatsApp or Skype is fake.
- Be careful of suspicious electricity and KYC messages.

Important:

- Provide educational guidance only.
- Never claim to officially file police complaints.
- Never ask users to share passwords, OTPs, or banking PINs.
"""


# --------------------------------------------------
# OFFLINE CHATBOT
# --------------------------------------------------

def generate_offline_fallback(
    user_text: str,
    language: str
) -> Dict[str, Any]:

    lower = user_text.lower()
    is_emergency = bool(EMERGENCY_PATTERN.search(lower))

    if is_emergency:

        if language == "kn":
            reply = (
                "🚨 ತುರ್ತು ಕ್ರಮ:\n\n"
                "1. ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ.\n"
                "2. ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ UPI ಮತ್ತು ಕಾರ್ಡ್ ಬ್ಲಾಕ್ ಮಾಡಿ.\n"
                "3. cybercrime.gov.in ನಲ್ಲಿ ದೂರು ಸಲ್ಲಿಸಿ.\n"
                "4. ಎಲ್ಲಾ ಸಾಕ್ಷ್ಯಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಿ."
            )

        elif language == "hi":
            reply = (
                "🚨 तुरंत कार्रवाई करें:\n\n"
                "1. तुरंत 1930 पर कॉल करें।\n"
                "2. अपने बैंक से संपर्क करके UPI और कार्ड ब्लॉक करवाएं।\n"
                "3. cybercrime.gov.in पर शिकायत दर्ज करें।\n"
                "4. सभी सबूत सुरक्षित रखें।"
            )

        else:
            reply = (
                "🚨 ACT IMMEDIATELY:\n\n"
                "1. Call India's Cyber Helpline 1930 immediately.\n"
                "2. Contact your bank and freeze your cards and UPI.\n"
                "3. File a complaint at https://cybercrime.gov.in/.\n"
                "4. Preserve SMS messages and transaction evidence."
            )

    elif "qr" in lower:
        reply = (
            "📷 QR CODE SAFETY RULE:\n\n"
            "Scanning a QR code or entering your UPI PIN "
            "to receive money is not necessary.\n"
            "Never enter your UPI PIN to receive payment."
        )

    elif (
        "digital arrest" in lower
        or "cbi" in lower
        or "police" in lower
    ):
        reply = (
            "⚖️ Digital Arrest is a scam.\n\n"
            "Police and government agencies do not conduct "
            "digital arrests through WhatsApp or Skype video calls.\n"
            "Disconnect and contact 1930 if you are being threatened."
        )

    elif (
        "job" in lower
        or "telegram" in lower
        or "task" in lower
    ):
        reply = (
            "💼 Be careful of fake part-time job offers.\n\n"
            "Scammers may ask you to deposit money to unlock "
            "tasks or receive payments. Never pay money to get a job."
        )

    elif language == "kn":
        reply = (
            "ನಮಸ್ಕಾರ! ನಾನು CyberMitra.\n\n"
            "ನಿಮ್ಮ OTP ಅಥವಾ UPI PIN ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ. "
            "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ."
        )

    elif language == "hi":
        reply = (
            "नमस्ते! मैं CyberMitra हूं।\n\n"
            "अपना OTP या UPI PIN किसी के साथ साझा न करें। "
            "धोखाधड़ी होने पर 1930 पर कॉल करें।"
        )

    else:
        reply = (
            "Hello! I am CyberMitra, your cyber safety guide.\n\n"
            "Never share your OTP or UPI PIN. "
            "Receiving money never requires entering your PIN.\n"
            "For cyber fraud emergencies, call 1930."
        )

    return {
        "reply": reply,
        "is_emergency": is_emergency,
        "provider": "knowledge_engine"
    }


# --------------------------------------------------
# PHONE NUMBER NORMALIZATION
# --------------------------------------------------

def normalize_phone_number(phone_number: str) -> str:

    digits = re.sub(r"\D", "", phone_number)

    # Handle Indian country code.
    if len(digits) == 12 and digits.startswith("91"):
        digits = digits[2:]

    # Only accept a 10-digit Indian mobile number.
    if len(digits) != 10:
        raise HTTPException(
            status_code=400,
            detail="Please enter a valid 10-digit Indian phone number."
        )

    return digits


# --------------------------------------------------
# HEALTH CHECK
# --------------------------------------------------

@app.get("/api/health")
def health_check():

    return {
        "status": "online",
        "app": "CyberSafe",
        "ai_enabled": bool(GEMINI_API_KEY),
        "model": GEMINI_MODEL,
        "firebase_enabled": db is not None
    }


# --------------------------------------------------
# SCAM PHONE NUMBER CHECKER
# --------------------------------------------------

@app.post("/api/check-number")
def check_phone_number(request: PhoneCheckRequest):

    if db is None:
        raise HTTPException(
            status_code=503,
            detail="Scam number database is temporarily unavailable."
        )

    phone_number = normalize_phone_number(
        request.phone_number
    )

    try:

        collection = db.collection("scam_numbers")

        # Find an exact matching phone number.
        results = (
            collection
            .where("phone_number", "==", phone_number)
            .limit(1)
            .stream()
        )

        document = next(results, None)

        if document:

            data = document.to_dict() or {}

            status = str(
                data.get("status", "suspicious")
            ).lower()

            report_count = int(
                data.get("report_count", 1)
            )

            return {
                "phone_number": phone_number,
                "match": True,
                "status": status,
                "report_count": report_count,
                "message": "This number has a suspicious report in the database."
            }

        return {
            "phone_number": phone_number,
            "match": False,
            "status": "unknown",
            "report_count": 0,
            "message": (
                "No report was found for this number. "
                "This does not guarantee that the number is safe."
            )
        }

    except HTTPException:
        raise

    except Exception as e:
        print(f"[Firestore Error] {e}")

        raise HTTPException(
            status_code=503,
            detail="Unable to check the scam database right now."
        )


# --------------------------------------------------
# CYBERMITRA CHAT ENDPOINT
# --------------------------------------------------

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):

    user_msg = request.message.strip()

    if not user_msg:
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty"
        )

    lang = request.language or "en"

    is_emergency = bool(
        EMERGENCY_PATTERN.search(user_msg)
    )

    # Protect sensitive credentials.
    if SENSITIVE_PATTERN.search(user_msg):

        warning = (
            "⚠️ CRITICAL SECURITY ALERT:\n\n"
            "It looks like you may have shared sensitive information "
            "such as an OTP, PIN, or password.\n\n"
            "Never share your OTP, UPI PIN, or bank password "
            "with anyone."
        )

        return {
            "reply": warning,
            "is_emergency": True,
            "provider": "security_guardrail"
        }

    # Gemini AI integration.
    if GEMINI_API_KEY:

        try:

            url = (
                "https://generativelanguage.googleapis.com/"
                f"v1beta/models/{GEMINI_MODEL}:generateContent"
                f"?key={GEMINI_API_KEY}"
            )

            lang_prompt = (
                f"The user has selected language: {lang}. "
                f"Respond in {lang}."
            )

            full_prompt = (
                f"{SYSTEM_INSTRUCTIONS}\n\n"
                f"{lang_prompt}\n\n"
                f"User Question: {user_msg}"
            )

            payload = {
                "contents": [
                    {
                        "parts": [
                            {"text": full_prompt}
                        ]
                    }
                ],
                "generationConfig": {
                    "temperature": 0.4,
                    "maxOutputTokens": 800
                }
            }

            response = requests.post(
                url,
                json=payload,
                timeout=20
            )

            if response.status_code == 200:

                data = response.json()

                reply_text = (
                    data["candidates"][0]
                    ["content"]["parts"][0]["text"]
                    .strip()
                )

                return {
                    "reply": reply_text,
                    "is_emergency": is_emergency,
                    "provider": "gemini_ai"
                }

            print(
                f"[Gemini Error] HTTP {response.status_code}"
            )

        except Exception as e:

            print(
                f"[AI Backend Error] {e}. "
                "Using offline fallback."
            )

    return generate_offline_fallback(
        user_msg,
        lang
    )


# --------------------------------------------------
# FRONTEND STATIC FILES
# --------------------------------------------------

app.mount(
    "/src",
    StaticFiles(directory=str(BASE_DIR / "src")),
    name="src"
)


@app.get("/")
async def serve_index():

    return FileResponse(
        str(BASE_DIR / "index.html")
    )


@app.get("/{full_path:path}")
async def serve_static(full_path: str):

    file_path = BASE_DIR / full_path

    if file_path.is_file():
        return FileResponse(str(file_path))

    return FileResponse(
        str(BASE_DIR / "index.html")
    )


# --------------------------------------------------
# LOCAL SERVER
# --------------------------------------------------

if __name__ == "__main__":

    import uvicorn

    print(
        f"Starting CyberSafe AI Server on port {PORT}..."
    )

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=PORT
    )
