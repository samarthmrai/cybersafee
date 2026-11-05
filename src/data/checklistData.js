// Interactive Cyber Safety Checklist with 10 Essential Digital Habits
window.CYBER_CHECKLIST_DATA = [
  {
    id: "chk_otp",
    title: {
      en: "I NEVER share OTP or UPI PIN with anyone, even bank staff or police",
      kn: "ಬ್ಯಾಂಕ್ ಅಥವಾ ಪೊಲೀಸ್ ಯಾರೇ ಕೇಳಿದರೂ ನಾನು ನನ್ನ OTP ಅಥವಾ UPI PIN ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ",
      hi: "बैंक या पुलिस कोई भी पूछे, मैं कभी अपना OTP या UPI PIN साझा नहीं करता/करती"
    },
    category: "Payment Security",
    weight: 10
  },
  {
    id: "chk_2fa",
    title: {
      en: "I have turned ON Two-Step Verification (2FA) on WhatsApp and primary email",
      kn: "ನನ್ನ WhatsApp ಮತ್ತು ಮುಖ್ಯ ಇಮೇಲ್‌ನಲ್ಲಿ Two-Step Verification (2FA) ಸಕ್ರಿಯಗೊಳಿಸಿದ್ದೇನೆ",
      hi: "मैंने अपने WhatsApp और मुख्य ईमेल पर Two-Step Verification (2FA) चालू कर रखा है"
    },
    category: "Account Protection",
    weight: 10
  },
  {
    id: "chk_remote",
    title: {
      en: "I NEVER install AnyDesk, TeamViewer, or QuickSupport on a caller's request",
      kn: "ಕರೆಯಲ್ಲಿ ಅಪರಿಚಿತರು ಹೇಳಿದಾಗ AnyDesk ಅಥವಾ TeamViewer ನಂತಹ ಆಪ್‌ಗಳನ್ನು ನಾನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದಿಲ್ಲ",
      hi: "अनजान कॉलर के कहने पर मैं कभी AnyDesk या TeamViewer जैसा ऐप इंस्टॉल नहीं करता/करती"
    },
    category: "Device Safety",
    weight: 10
  },
  {
    id: "chk_qr",
    title: {
      en: "I know that scanning a QR code or entering a PIN NEVER credits money to my account",
      kn: "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದರಿಂದ ಅಥವಾ PIN ಹಾಕುವುದರಿಂದ ಹಣ ಬರುವುದಿಲ್ಲ, ಕಡಿತಗೊಳ್ಳುತ್ತದೆ ಎಂಬುದು ನನಗೆ ತಿಳಿದಿದೆ",
      hi: "मुझे पता है कि QR कोड स्कैन करने या पिन डालने से पैसे मिलते नहीं, बल्कि कटते हैं"
    },
    category: "UPI Rules",
    weight: 10
  },
  {
    id: "chk_digital_arrest",
    title: {
      en: "I know that 'Digital Arrest' on video call does NOT exist in Indian law",
      kn: "ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ ವಿಡಿಯೋ ಕರೆ ಮೂಲಕ 'ಡಿಜಿಟಲ್ ಬಂಧನ' ಎಂಬ ಯಾವುದೇ ನಿಯಮವಿಲ್ಲ ಎಂಬುದು ನನಗೆ ತಿಳಿದಿದೆ",
      hi: "मुझे पता है कि भारतीय कानून में वीडियो कॉल पर 'डिजिटल अरेस्ट' का कोई अस्तित्व नहीं है"
    },
    category: "Legal Awareness",
    weight: 10
  },
  {
    id: "chk_sim_pin",
    title: {
      en: "I have enabled SIM Lock (SIM PIN) to protect my phone number if phone is stolen",
      kn: "ಫೋನ್ ಕಳೆದುಹೋದರೆ OTP ದುರುಪಯೋಗವಾಗದಂತೆ ನನ್ನ ಸಿಮ್ ಕಾರ್ಡ್‌ಗೆ SIM PIN ಸೆಟ್ ಮಾಡಿದ್ದೇನೆ",
      hi: "फोन चोरी होने पर OTP सुरक्षित रखने के लिए मैंने अपने सिम कार्ड पर SIM PIN लगा रखा है"
    },
    category: "Mobile Security",
    weight: 10
  },
  {
    id: "chk_passwords",
    title: {
      en: "I use strong, distinct passwords for my bank accounts, not simple birthdates",
      kn: "ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜನ್ಮದಿನಾಂಕದ ಬದಲು ಬಲವಾದ ಮತ್ತು ವಿಭಿನ್ನ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸುತ್ತಿದ್ದೇನೆ",
      hi: "मैं अपने बैंकिंग खातों के लिए जन्मतिथि के बजाय मजबूत और अलग पासवर्ड रखता/रखती हूँ"
    },
    category: "Password Hygiene",
    weight: 10
  },
  {
    id: "chk_apk",
    title: {
      en: "I install apps ONLY from Google Play Store or Apple App Store, never from APK links in SMS",
      kn: "ಆಪ್‌ಗಳನ್ನು ಕೇವಲ ಅಧಿಕೃತ ಪ್ಲೇ ಸ್ಟೋರ್‌ನಿಂದ ಮಾತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡುತ್ತೇನೆ, SMS ಲಿಂಕ್‌ಗಳಿಂದಲ್ಲ",
      hi: "मैं ऐप्स केवल Google Play Store या App Store से ही डाउनलोड करता/करती हूँ, किसी SMS लिंक से नहीं"
    },
    category: "App Safety",
    weight: 10
  },
  {
    id: "chk_wifi",
    title: {
      en: "I avoid doing net banking or UPI payments on open, free public Wi-Fi networks",
      kn: "ತೆರೆದ ಸಾರ್ವಜನಿಕ ಉಚಿತ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್‌ಗಳಲ್ಲಿ ಬ್ಯಾಂಕಿಂಗ್ ಅಥವಾ UPI ಪಾವತಿ ಮಾಡುವುದಿಲ್ಲ",
      hi: "मैं खुले सार्वजनिक मुफ्त वाई-फाई पर नेट बैंकिंग या UPI पेमेंट करने से बचता/बचती हूँ"
    },
    category: "Network Safety",
    weight: 10
  },
  {
    id: "chk_helpline",
    title: {
      en: "I have saved National Cyber Helpline 1930 and cybercrime.gov.in in my phone",
      kn: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸಹಾಯವಾಣಿ 1930 ಮತ್ತು cybercrime.gov.in ಅನ್ನು ನನ್ನ ಫೋನ್‌ನಲ್ಲಿ ಸೇವ್ ಮಾಡಿಕೊಂಡಿದ್ದೇನೆ",
      hi: "मैंने राष्ट्रीय साइबर हेल्पलाइन 1930 और cybercrime.gov.in को अपने फोन में सुरक्षित कर रखा है"
    },
    category: "Emergency Readiness",
    weight: 10
  }
];
