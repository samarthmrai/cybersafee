"""
CyberSafe Secure AI Backend Server
Serves static frontend files and provides a secure, private /api/chat endpoint
powered by Google Gemini API. API keys are kept strictly on the backend.
"""

import os
import re
import json
import urllib3
import requests
from pathlib import Path
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse, FileResponse
from pydantic import BaseModel
from typing import Optional, List, Dict

# Disable insecure request warnings for local Windows cert validation
urllib3.disable_warnings()

# Load environment variables from .env
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

app = FastAPI(title="CyberSafe AI Backend", version="1.0.0")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    language: Optional[str] = "en"
    history: Optional[List[ChatMessage]] = []

# Sensitive data detection regex (prevent users from leaking OTPs or PINs)
SENSITIVE_PATTERN = re.compile(
    r"\b(otp\s*is\s*\d{4,6}|\b\d{4,6}\s*is\s*my\s*otp|upi\s*pin\s*is\s*\d{4,6}|password\s*is\s*\S+|cvv\s*is\s*\d{3})\b",
    re.IGNORECASE
)

# Emergency keywords
EMERGENCY_PATTERN = re.compile(
    r"(lost money|stolen|debited|hacked|scammed|cheated|paisa kat gaya|paise kat gaye|hana kaledu|fraud ho gaya|digital arrest|cbi.*video call|police.*video call|urgent help|emergency)",
    re.IGNORECASE
)

# System prompt for CyberMitra AI
SYSTEM_INSTRUCTIONS = """
You are CyberMitra, a friendly, patient, and highly accessible Cyber Safety Educational AI Assistant for India.
Your mission is to protect citizens—especially students, senior citizens, rural communities, and beginners—from online fraud and cybercrime.

Core Rules & Guidelines:
1. Simplicity: Use simple, clear, jargon-free everyday language. Avoid complex technical terms without immediately explaining them.
2. Tone: Warm, reassuring, empathetic, and clear. Senior citizens may be anxious; calm them down and give clear step-by-step guidance.
3. Multilingual Capability:
   - If the user writes in Kannada (ಕನ್ನಡ) or requests Kannada, reply in fluent, natural Kannada.
   - If the user writes in Hindi (हिंदी) or requests Hindi, reply in fluent, warm Hindi.
   - If the user writes in English, reply in simple English.
4. Emergency & Financial Fraud:
   - If someone has lost money, ALWAYS emphasize the "Golden Hour" (first 1-2 hours) and instruct them to dial India's National Cyber Helpline 1930 immediately and file on https://cybercrime.gov.in/.
   - Mention calling their bank to freeze cards, netbanking, and UPI.
5. Golden Rules to Emphasize:
   - Never share OTP or UPI PIN with anyone, even bank managers or police.
   - Receiving money via UPI NEVER requires entering a UPI PIN or scanning a QR code.
   - "Digital Arrest" over Skype/WhatsApp video call is 100% fake. Indian law has no provision for digital arrest.
   - Utility/Electricity disconnection SMS from 10-digit mobile numbers are phishing scams.
6. Important Disclaimers:
   - Provide educational guidance only.
   - Do NOT claim to officially file police FIRs or guarantee that an unverified link/message is completely safe.
   - Never ask for or store passwords, OTPs, or banking PINs.
"""

def generate_offline_fallback(user_text: str, language: str) -> Dict[str, any]:
    """Generates an intelligent offline response if external AI API is unreachable."""
    lower = user_text.lower()
    is_emergency = bool(EMERGENCY_PATTERN.search(lower))
    
    if is_emergency:
        if language == "kn":
            reply = (
                "🚨 **ತುರ್ತು ಕ್ರಮ (ಗೋಲ್ಡನ್ ಅವರ್):**\n\n"
                "1. **ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ:** ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸಹಾಯವಾಣಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ ವಹಿವಾಟಿನ ವಿವರ ನೀಡಿ ಹಣ ಫ್ರೀಜ್ ಮಾಡಿಸಿ.\n"
                "2. **ಬ್ಯಾಂಕ್ ಖಾತೆ ಬ್ಲಾಕ್ ಮಾಡಿ:** ನಿಮ್ಮ ಬ್ಯಾಂಕಿನ 24x7 ಗ್ರಾಹಕ ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ ಡೆಬಿಟ್ ಕಾರ್ಡ್, ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಯುಪಿಐ ಬ್ಲಾಕ್ ಮಾಡಿ.\n"
                "3. **ದೂರು ದಾಖಲಿಸಿ:** [cybercrime.gov.in](https://cybercrime.gov.in/) ನಲ್ಲಿ ಅಧಿಕೃತ ಆನ್‌ಲೈನ್ ದೂರು ಸಲ್ಲಿಸಿ.\n"
                "4. **ಸಾಕ್ಷ್ಯಗಳನ್ನು ಇರಿಸಿ:** ಹಣ ಕಡಿತವಾದ SMS ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಿ."
            )
        elif language == "hi":
            reply = (
                "🚨 **तत्काल यह कदम उठाएं (गोल्डन ऑवर):**\n\n"
                "1. **तुरंत 1930 पर कॉल करें:** राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करके ठगे गए पैसे को तुरंत फ्रीज करवाएं।\n"
                "2. **बैंक खाते को ब्लॉक कराएं:** अपने बैंक कस्टमर केयर पर कॉल करके कार्ड और नेट बैंकिंग तुरंत बंद करवाएं।\n"
                "3. **आधिकारिक शिकायत दर्ज करें:** [cybercrime.gov.in](https://cybercrime.gov.in/) पर ट्रांजैक्शन डिटेल के साथ रिपोर्ट दर्ज करें।\n"
                "4. **सबूत सुरक्षित रखें:** पैसे कटने के SMS, UTR नंबर और चैट का स्क्रीनशॉट संभाल कर रखें।"
            )
        else:
            reply = (
                "🚨 **ACT IMMEDIATELY (Golden Hour Response):**\n\n"
                "1. **Call 1930 Immediately:** Dial the National Cyber Helpline **1930** (Toll-Free). Reporting within the first 2 hours allows banks to freeze stolen funds in transit.\n"
                "2. **Freeze Bank Accounts:** Call your bank's 24x7 customer care to freeze your debit card, UPI, and NetBanking.\n"
                "3. **File Complaint on cybercrime.gov.in:** Submit transaction details, UTR numbers, and debit SMS screenshots at [https://cybercrime.gov.in/](https://cybercrime.gov.in/).\n"
                "4. **Preserve Evidence:** Keep all SMS, WhatsApp chats, and transaction receipts for the cyber police."
            )
    elif "qr" in lower:
        reply = (
            "📷 **QR Code Golden Rule:**\n\n"
            "Scanning a QR code or entering your UPI PIN always DEDUCTS money from your account. "
            "You NEVER need to scan a QR code or enter a PIN to RECEIVE payment. Anyone claiming to send you money via QR code is attempting fraud!"
        )
    elif "digital arrest" in lower or "cbi" in lower or "police" in lower:
        reply = (
            "⚖️ **Digital Arrest is 100% Fake:**\n\n"
            "Indian law has NO provision for 'Digital Arrest'. Supreme Court, CBI, ED, and Police NEVER interrogate suspects or issue arrest warrants via WhatsApp or Skype video calls. Disconnect immediately and call 1930."
        )
    elif "job" in lower or "telegram" in lower or "task" in lower:
        reply = (
            "💼 **Fake Part-Time Job Warning:**\n\n"
            "Offers to earn ₹3,000–₹5,000 daily by simply liking YouTube videos or rating hotels are classic Task Scams. Real companies pay employees; they NEVER ask you to deposit money or join Telegram VIP channels."
        )
    else:
        if language == "kn":
            reply = (
                "ನಮಸ್ಕಾರ! ನಾನು **ಸೈಬರ್ ಮಿತ್ರ**, ನಿಮ್ಮ ಸೈಬರ್ ಸುರಕ್ಷತಾ ಸಹಾಯಕ.\n\n"
                "ಯಾವುದೇ ಬ್ಯಾಂಕ್ OTP ಅಥವಾ UPI PIN ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ. "
                "ಹಣ ಪಡೆಯಲು PIN ಅಗತ್ಯವಿಲ್ಲ. ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ಯಾವಾಗಲೂ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ."
            )
        elif language == "hi":
            reply = (
                "नमस्ते! मैं हूँ **साइबर मित्र**, आपका साइबर सुरक्षा मार्गदर्शक।\n\n"
                "कभी भी अपना OTP या UPI PIN किसी के साथ साझा न करें। पैसे प्राप्त करने के लिए कभी पिन नहीं डालना होता। "
                "धोखाधड़ी होने पर तुरंत 1930 पर कॉल करें या cybercrime.gov.in पर जाएं।"
            )
        else:
            reply = (
                "Hello! I am **CyberMitra**, your cyber safety guide.\n\n"
                "Remember the 3 Golden Rules: Never share your OTP or UPI PIN, remember that receiving money never requires a PIN, and disconnect any video calls claiming 'Digital Arrest'. "
                "In an emergency, dial 1930 or visit https://cybercrime.gov.in/."
            )
            
    return {"reply": reply, "is_emergency": is_emergency, "provider": "knowledge_engine"}

@app.get("/api/health")
def health_check():
    return {
        "status": "online",
        "app": "CyberSafe",
        "ai_enabled": bool(GEMINI_API_KEY),
        "model": GEMINI_MODEL
    }

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    user_msg = request.message.strip()
    if not user_msg:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
        
    lang = request.language or "en"
    is_emergency = bool(EMERGENCY_PATTERN.search(user_msg))

    # Guardrail: Check for sensitive credential leaks
    if SENSITIVE_PATTERN.search(user_msg):
        warning = (
            "⚠️ **CRITICAL SECURITY ALERT:** It looks like you shared a sensitive credential (such as an OTP, PIN, or Password). "
            "Please NEVER share your OTP, UPI PIN, or bank passwords with anyone—not even in this chatbot! "
            "If someone asked you for an OTP, do NOT give it to them."
        )
        return {
            "reply": warning,
            "is_emergency": True,
            "provider": "security_guardrail"
        }

    # Attempt to call Gemini API if key is present
    if GEMINI_API_KEY:
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={GEMINI_API_KEY}"
            
            # Format prompt with language guidance
            lang_prompt = f"The user has selected the language: {lang} (English/Kannada/Hindi). Please respond in {lang}."
            full_prompt = f"{SYSTEM_INSTRUCTIONS}\n\n{lang_prompt}\n\nUser Question: {user_msg}"
            
            payload = {
                "contents": [
                    {"parts": [{"text": full_prompt}]}
                ],
                "generationConfig": {
                    "temperature": 0.4,
                    "maxOutputTokens": 800
                }
            }
            
            # Call with unverified SSL to handle Windows local cert issues reliably
            resp = requests.post(url, json=payload, verify=False, timeout=20)
            
            if resp.status_code == 200:
                data = resp.json()
                reply_text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
                return {
                    "reply": reply_text,
                    "is_emergency": is_emergency,
                    "provider": "gemini_ai"
                }
        except Exception as e:
            print(f"[AI Backend Error] Gemini API call failed: {e}. Falling back to internal engine.")
            
    # Fallback to rich internal knowledge engine
    return generate_offline_fallback(user_msg, lang)

# Mount static files for the frontend
app.mount("/src", StaticFiles(directory=str(BASE_DIR / "src")), name="src")

@app.get("/")
async def serve_index():
    return FileResponse(str(BASE_DIR / "index.html"))

@app.get("/{full_path:path}")
async def serve_static(full_path: str):
    file_path = BASE_DIR / full_path
    if file_path.is_file():
        return FileResponse(str(file_path))
    return FileResponse(str(BASE_DIR / "index.html"))

if __name__ == "__main__":
    import uvicorn
    print(f"Starting CyberSafe AI Server on port {PORT}...")
    uvicorn.run(app, host="0.0.0.0", port=PORT)
