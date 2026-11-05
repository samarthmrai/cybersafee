// Cyber Safety Chatbot Knowledge Base & Logic (CyberMitra)
window.CyberBotEngine = {
  disclaimer: {
    en: "⚠️ Educational Bot Disclaimer: CyberMitra provides cyber safety awareness. In an active emergency or if money was just stolen, call 1930 immediately or visit cybercrime.gov.in.",
    kn: "⚠️ ಶೈಕ್ಷಣಿಕ ಬಾಟ್ ಹಕ್ಕುತ್ಯಾಗ: ಸೈಬರ್ ಮಿತ್ರ ಸಾರ್ವಜನಿಕ ಜಾಗೃತಿಗಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಹಣ ಕಳ್ಳತನವಾದರೆ ತಕ್ಷಣವೇ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ.",
    hi: "⚠️ शैक्षिक बॉट अस्वीकरण: साइबर मित्र जन जागरूकता के लिए है। यदि अभी आपके साथ धोखाधड़ी हुई है, तो तुरंत 1930 डायल करें या cybercrime.gov.in पर जाएं।"
  },

  suggestedQuestions: [
    {
      id: "q_money_stolen",
      text: {
        en: "🚨 My money was stolen online! What to do right now?",
        kn: "🚨 ನನ್ನ ಖಾತೆಯಿಂದ ಹಣ ಕಳ್ಳತನವಾಗಿದೆ! ತಕ್ಷಣವೇ ಏನು ಮಾಡಬೇಕು?",
        hi: "🚨 मेरे खाते से पैसे कट गए! तुरंत क्या करूँ?"
      }
    },
    {
      id: "q_digital_arrest",
      text: {
        en: "⚖️ Can police or CBI arrest me over video call?",
        kn: "⚖️ ಪೊಲೀಸ್ ಅಥವಾ CBI ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ಬಂಧಿಸಬಹುದೇ?",
        hi: "⚖️ क्या पुलिस वीडियो कॉल पर अरेस्ट कर सकती है?"
      }
    },
    {
      id: "q_qr_code",
      text: {
        en: "📷 Is scanning a QR code safe to receive payment?",
        kn: "📷 ಹಣ ಪಡೆಯಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು ಸುರಕ್ಷಿತವೇ?",
        hi: "📷 क्या पैसे पाने के लिए QR कोड स्कैन करना सुरक्षित है?"
      }
    },
    {
      id: "q_fake_job",
      text: {
        en: "💼 How to spot fake YouTube like / part-time jobs?",
        kn: "💼 ಯೂಟ್ಯೂಬ್ ಲೈಕ್ / ನಕಲಿ ಉದ್ಯೋಗ ವಂಚನೆಗಳನ್ನು ಗುರುತಿಸುವುದು ಹೇಗೆ?",
        hi: "💼 यूट्यूब लाइक / पार्ट-टाइम जॉब फ्रॉड को कैसे पहचानें?"
      }
    },
    {
      id: "q_helpline_1930",
      text: {
        en: "📞 What is the 1930 helpline and how does it help?",
        kn: "📞 1930 ಸಹಾಯವಾಣಿ ಎಂದರೇನು ಮತ್ತು ಅದು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ?",
        hi: "📞 1930 हेल्पलाइन क्या है और यह कैसे मदद करती है?"
      }
    },
    {
      id: "q_hacked_account",
      text: {
        en: "🔒 My WhatsApp or social media account was hacked",
        kn: "🔒 ನನ್ನ WhatsApp ಅಥವಾ ಸಾಮಾಜಿಕ ಜಾಲತಾಣ ಹ್ಯಾಕ್ ಆಗಿದೆ",
        hi: "🔒 मेरा WhatsApp या सोशल मीडिया अकाउंट हैक हो गया"
      }
    }
  ],

  // Knowledge base intent responses
  responses: {
    emergency_money: {
      isEmergency: true,
      text: {
        en: `🚨 **ACT IMMEDIATELY (Golden Hour Response):**

1. **CALL 1930 NOW:** Dial the National Cyber Helpline **1930** (Toll-Free). They will record the transaction ID and alert the receiving banks to freeze the stolen funds.
2. **FREEZE BANK ACCOUNTS:** Call your bank's 24x7 customer care number immediately and request an emergency freeze on your NetBanking, UPI, and debit cards.
3. **FILE ON CYBERCRIME.GOV.IN:** Submit the formal complaint with screenshots, SMS alerts, and transaction UTR numbers on [cybercrime.gov.in](https://cybercrime.gov.in/).
4. **DON'T DELETE MESSAGES:** Keep all SMS, WhatsApp chats, call logs, and transaction IDs as legal evidence for the cyber police.`,
        kn: `🚨 **ತಕ್ಷಣವೇ ಈ ಕ್ರಮಗಳನ್ನು ಕೈಗೊಳ್ಳಿ (ಗೋಲ್ಡನ್ ಅವರ್):**

1. **ಈಗಲೇ 1930 ಗೆ ಕರೆ ಮಾಡಿ:** ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸಹಾಯವಾಣಿ **1930** ಗೆ ಕರೆ ಮಾಡಿ. ಅವರು ವಂಚಕರ ಖಾತೆಗೆ ಹಣ ತಲುಪದಂತೆ ಆ ಖಾತೆಯನ್ನು ಫ್ರೀಜ್ ಮಾಡಲು ಬ್ಯಾಂಕುಗಳಿಗೆ ಸೂಚಿಸುತ್ತಾರೆ.
2. **ಬ್ಯಾಂಕ್ ಖಾತೆ ಬ್ಲಾಕ್ ಮಾಡಿ:** ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನ ಗ್ರಾಹಕ ಸೇವಾ ಕೇಂದ್ರಕ್ಕೆ ಕರೆ ಮಾಡಿ ನಿಮ್ಮ ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್, UPI ಮತ್ತು ಡೆಬಿಟ್ ಕಾರ್ಡ್‌ಗಳನ್ನು ತಕ್ಷಣವೇ ಬ್ಲಾಕ್ ಮಾಡಿಸಿ.
3. **ದೂರು ದಾಖಲಿಸಿ:** [cybercrime.gov.in](https://cybercrime.gov.in/) ನಲ್ಲಿ ಅಧಿಕೃತ ದೂರು ದಾಖಲಿಸಿ ಮತ್ತು ವಹಿವಾಟಿನ UTR ಸಂಖ್ಯೆಯನ್ನು ಒದಗಿಸಿ.
4. **ಸಾಕ್ಷ್ಯಗಳನ್ನು ಅಳಿಸಬೇಡಿ:** SMS, WhatsApp ಸಂದೇಶಗಳು ಮತ್ತು ಕರೆ ದಾಖಲೆಗಳನ್ನು ಪೊಲೀಸರ ತನಿಖೆಗಾಗಿ ಸುರಕ್ಷಿತವಾಗಿ ಇರಿಸಿ.`,
        hi: `🚨 **तत्काल यह कदम उठाएं (गोल्डन ऑवर):**

1. **तुरंत 1930 डायल करें:** राष्ट्रीय साइबर हेल्पलाइन **1930** पर तुरंत कॉल करें। वे रिसीविंग बैंक को अलर्ट भेजकर ठगे गए पैसे को फ्रीज करवाएंगे।
2. **बैंक खाते को फ्रीज कराएं:** अपने बैंक के 24x7 कस्टमर केयर पर कॉल करके अपने डेबिट कार्ड, यूपीआई और नेट बैंकिंग को तुरंत ब्लॉक करवाएं।
3. **पोर्टल पर रिपोर्ट करें:** [cybercrime.gov.in](https://cybercrime.gov.in/) पर जाकर ट्रांजैक्शन UTR नंबर और स्क्रीनशॉट के साथ लिखित शिकायत दर्ज करें।
4. **सबूत न मिटाएं:** आए हुए मैसेज, चैट और कॉल डिटेल्स को पुलिस जांच के लिए संभाल कर रखें।`
      }
    },

    digital_arrest: {
      isEmergency: false,
      text: {
        en: `⚖️ **THE TRUTH ABOUT 'DIGITAL ARREST':**

• **NO SUCH LAW EXISTS:** Indian law has **NO provision** for 'Digital Arrest'. Supreme Court, CBI, ED, Police, or Customs NEVER interrogate citizens or issue arrest warrants via Skype, WhatsApp, or Zoom video calls!
• **POLICE NEVER ASK FOR MONEY:** Legitimate police never ask you to transfer money to 'RBI safe accounts' or 'clearance accounts' to verify your assets.
• **WHAT YOU MUST DO:** Hang up the video call immediately! Do not be intimidated by fake uniforms or backdrop stamps. Call **1930** and report the caller's phone number on the Sanchar Saathi Chakshu portal.`,
        kn: `⚖️ **'ಡಿಜಿಟಲ್ ಬಂಧನ'ದ ಸತ್ಯಾಂಶ:**

• **ಅಂತಹ ಯಾವುದೇ ಕಾನೂನಿಲ್ಲ:** ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಬಂಧನ' ಎಂಬ ಯಾವುದೇ ನಿಯಮವಿಲ್ಲ. ಸುಪ್ರೀಂ ಕೋರ್ಟ್, ಸಿಬಿಐ, ಇಡಿ ಅಥವಾ ಪೊಲೀಸರು ಸ್ಕೈಪ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ವಿಚಾರಣೆ ಅಥವಾ ಬಂಧನ ಮಾಡುವುದಿಲ್ಲ!
• **ಪೊಲೀಸರು ಹಣ ಕೇಳುವುದಿಲ್ಲ:** ನೈಜ ಪೊಲೀಸರು ಎಂದಿಗೂ 'RBI ಸುರಕ್ಷಿತ ಖಾತೆ'ಗೆ ಹಣ ವರ್ಗಾಯಿಸಲು ಹೇಳುವುದಿಲ್ಲ.
• **ನೀವೇನು ಮಾಡಬೇಕು:** ತಕ್ಷಣ ವಿಡಿಯೋ ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ! ನಕಲಿ ಸಮವಸ್ತ್ರಕ್ಕೆ ಹೆದರಬೇಡಿ. ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಆ ನಂಬರ್ ಅನ್ನು ವರದಿ ಮಾಡಿ.`,
        hi: `⚖️ **'डिजिटल अरेस्ट' का पूरा सच:**

• **ऐसा कोई कानून नहीं है:** भारतीय कानून में 'डिजिटल अरेस्ट' नाम का कोई प्रावधान नहीं है। सुप्रीम कोर्ट, CBI, ED या पुलिस कभी भी वीडियो कॉल पर पूछताछ या गिरफ्तारी नहीं करती!
• **पुलिस कभी पैसे नहीं मांगती:** असली पुलिस कभी भी 'जांच' या 'सुरक्षित सरकारी खाते' के नाम पर पैसे ट्रांसफर करने को नहीं कहती।
• **आपको क्या करना है:** तुरंत वीडियो कॉल काट दें! नकली वर्दी देखकर डरें नहीं। तुरंत **1930** पर कॉल करें और नंबर की शिकायत करें।`
      }
    },

    qr_code: {
      isEmergency: false,
      text: {
        en: `📷 **QR CODE SAFETY GOLDEN RULE:**

• **QR CODES ARE FOR PAYING ONLY:** You scan a QR code ONLY to make an outgoing payment from your bank. Scanning a QR code or typing your UPI PIN **NEVER** deposits money into your account!
• **TO RECEIVE MONEY:** You only need to share your Phone Number or UPI ID (e.g. name@upi). You never need to scan anything or enter any PIN to receive money.
• **SCAM TACTIC:** Online buyers on OLX or Quikr who send QR codes to 'pay advance' are 100% scammers. Never scan their codes!`,
        kn: `📷 **QR ಕೋಡ್ ಸುರಕ್ಷತೆಯ ಸುವರ್ಣ ನಿಯಮ:**

• **QR ಕೋಡ್ ಕೇವಲ ಹಣ ಪಾವತಿಸಲು ಮಾತ್ರ:** ನೀವು ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತೀರಿ. QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದರಿಂದ ಅಥವಾ PIN ಹಾಕುವುದರಿಂದ ಎಂದಿಗೂ ನಿಮ್ಮ ಖಾತೆಗೆ ಹಣ ಬರುವುದಿಲ್ಲ!
• **ಹಣ ಪಡೆಯಲು:** ಕೇವಲ ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಥವಾ UPI ID ನೀಡಿದರೆ ಸಾಕು. ಯಾವುದೇ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವ ಅಥವಾ PIN ಹಾಕುವ ಅಗತ್ಯವೇ ಇಲ್ಲ.
• **ವಂಚಕರ ತಂತ್ರ:** OLX ಮುಂತಾದ ತಾಣಗಳಲ್ಲಿ ಹಣ ಕಳುಹಿಸಲು QR ಕಳುಹಿಸುವವರೆಲ್ಲರೂ ಶೇ.100 ರಷ್ಟು ವಂಚಕರು. ಯಾವುದೇ ಕಾರಣಕ್ಕೂ ಅವರ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ!`,
        hi: `📷 **QR कोड सुरक्षा का बुनियादी नियम:**

• **QR कोड सिर्फ पैसे भेजने के लिए है:** आप अपने खाते से पैसे काटने के लिए ही QR कोड स्कैन करते हैं। कोड स्कैन करने या PIN डालने से कभी पैसे प्राप्त नहीं होते!
• **पैसे लेने के लिए:** केवल अपना मोबाइल नंबर या UPI ID देना काफी है। पैसे पाने के लिए कभी कोई कोड स्कैन या पिन नहीं डालना पड़ता।
• **सावधानी:** OLX पर सामान खरीदने के बहाने QR कोड भेजने वाले 100% ठग होते हैं। उनके कोड को कभी स्कैन न करें!`
      }
    },

    fake_job: {
      isEmergency: false,
      text: {
        en: `💼 **HOW TO SPOT FAKE JOB & TASK SCAMS:**

• **THE LURE:** "Earn ₹3,000 to ₹5,000/day by liking YouTube videos, rating Google Maps hotels, or typing captchas."
• **THE BAIT:** To build trust, scammers initially transfer ₹150–₹200 to your UPI.
• **THE TRAP:** They add you to a Telegram group and demand ₹2,000, ₹10,000, then ₹50,000 as a 'prepaid task investment' to withdraw profits. Once paid, your money is stolen!
• **RULE:** Genuine companies NEVER ask job seekers to deposit money. If a job asks for a fee, it is fraud!`,
        kn: `💼 **ನಕಲಿ ಉದ್ಯೋಗ ಮತ್ತು ಟಾಸ್ಕ್ ವಂಚನೆಗಳನ್ನು ಗುರುತಿಸುವುದು:**

• **ಆಮಿಷ:** "ಯೂಟ್ಯೂಬ್ ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಿ, ಹೋಟೆಲ್ ರೇಟಿಂಗ್ ನೀಡಿ ದಿನಕ್ಕೆ ₹3,000-₹5,000 ಗಳಿಸಿ."
• **ನಂಬಿಕೆಯ ಬಲೆ:** ಆರಂಭದಲ್ಲಿ ನಂಬಿಕೆ ಹುಟ್ಟಿಸಲು ₹150-₹200 ಅನ್ನು ನಿಮ್ಮ ಖಾತೆಗೆ ಜಮೆ ಮಾಡುತ್ತಾರೆ.
• **ದೊಡ್ಡ ವಂಚನೆ:** ನಂತರ ಟೆಲಿಗ್ರಾಂ ಗ್ರೂಪ್‌ಗೆ ಸೇರಿಸಿ, ಹಣ ಹಿಂಪಡೆಯಲು ನೀವೇ ₹2,000, ₹10,000 ಡೆಪಾಸಿಟ್ ಕಟ್ಟಬೇಕೆಂದು ಹೇಳಿ ಲೂಟಿ ಮಾಡುತ್ತಾರೆ!
• **ನಿಯಮ:** ನೈಜ ಕಂಪನಿಗಳು ಎಂದಿಗೂ ಉದ್ಯೋಗಿಗಳಿಂದ ಮುಂಗಡ ಹಣ ಕೇಳುವುದಿಲ್ಲ. ಹಣ ಕೇಳಿದರೆ ಅದು ನಿಸ್ಸಂದೇಹವಾಗಿ ವಂಚನೆ!`,
        hi: `💼 **फर्जी नौकरी और यूट्यूब टास्क फ्रॉड की पहचान:**

• **लालच:** "सिर्फ यूट्यूब वीडियो लाइक करें, होटल रिव्यू दें और रोज ₹3,000 से ₹5,000 कमाएं।"
• **फंसाने का तरीका:** विश्वास जीतने के लिए शुरुआत में ₹150-₹200 आपके खाते में भेजते हैं।
• **असली जाल:** फिर टेलीग्राम ग्रुप में जोड़कर बड़ा मुनाफा निकालने के लिए ₹2,000 से ₹50,000 तक 'टास्क डिपॉजिट' मांगते हैं और भाग जाते हैं!
• **नियम:** असली नौकरी में काम के बदले पैसे मिलते हैं, कभी काम शुरू करने के लिए पैसे नहीं मांगे जाते!`
      }
    },

    helpline_1930: {
      isEmergency: false,
      text: {
        en: `📞 **ABOUT NATIONAL CYBER HELPLINE 1930:**

• **WHAT IT IS:** 1930 is India's dedicated Citizen Financial Cyber Fraud Reporting helpline operated by the Ministry of Home Affairs (MHA/I4C).
• **HOW IT HELPS:** It connects to 250+ banks, payment wallets, and UPI intermediaries in real-time. If you report within the first 2 hours, they can freeze the fraudster's bank account before money is withdrawn at an ATM.
• **COST & AVAILABILITY:** 100% Toll-Free, available 24 hours a day, 7 days a week across all Indian telecom networks.`,
        kn: `📞 **ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸಹಾಯವಾಣಿ 1930 ರ ಮಾಹಿತಿ:**

• **ಇದು ಏನು:** 1930 ಎಂಬುದು ಕೇಂದ್ರ ಗೃಹ ಸಚಿವಾಲಯದ (I4C) ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ರಾಷ್ಟ್ರೀಯ ಹಣಕಾಸು ಸೈಬರ್ ವಂಚನೆ ಸಹಾಯವಾಣಿ.
• **ಇದು ಹೇಗೆ ನೆರವಾಗುತ್ತದೆ:** ಇದು ಭಾರತದ 250 ಕ್ಕೂ ಹೆಚ್ಚು ಬ್ಯಾಂಕುಗಳು ಮತ್ತು UPI ವ್ಯವಸ್ಥೆಗೆ ನೈಜ ಸಮಯದಲ್ಲಿ ಸಂಪರ್ಕ ಹೊಂದಿದೆ. ಮೊದಲ 2 ಗಂಟೆಗಳಲ್ಲಿ ವರದಿ ಮಾಡಿದರೆ ವಂಚಕರ ಖಾತೆಯನ್ನು ಫ್ರೀಜ್ ಮಾಡಿ ಹಣ ಉಳಿಸಬಹುದು.
• **ಶುಲ್ಕ ಮತ್ತು ಲಭ್ಯತೆ:** ಇದು ಸಂಪೂರ್ಣ ಉಚಿತ (ಟೋಲ್-ಫ್ರೀ), ದಿನದ 24 ಗಂಟೆಯೂ ವಾರದ 7 ದಿನವೂ ಲಭ್ಯವಿದೆ.`,
        hi: `📞 **राष्ट्रीय साइबर हेल्पलाइन 1930 के बारे में:**

• **यह क्या है:** 1930 भारत सरकार के गृह मंत्रालय (I4C) द्वारा संचालित वित्तीय साइबर अपराध हेल्पलाइन है।
• **यह कैसे काम करती है:** यह देश के 250 से अधिक बैंकों और पेमेंट गेटवे से सीधे जुड़ी है। पहले 2 घंटे में कॉल करने पर ठग के बैंक खाते को तुरंत फ्रीज कर दिया जाता है।
• **उपलब्धता:** यह पूरी तरह टोल-फ्री है और चौबीसों घंटे (24x7) सेवा में रहती है।`
      }
    },

    hacked_account: {
      isEmergency: false,
      text: {
        en: `🔒 **STEPS FOR A HACKED SOCIAL MEDIA / WHATSAPP ACCOUNT:**

1. **WARN FAMILY & FRIENDS:** Immediately alert your contacts via phone call or SMS: "My account is hacked, do NOT send money or click any links sent from my profile!"
2. **LOG OUT ALL DEVICES:** Go to Settings -> Linked Devices (in WhatsApp) or Security -> Logged In Devices (Instagram/Google) and click 'Log out of all sessions'.
3. **TURN ON 2-STEP VERIFICATION (2FA):** Set up a secret 6-digit PIN on WhatsApp and authenticator app on Google/Instagram.
4. **RECOVER THROUGH OFFICIAL CHANNELS:** Use official account recovery pages (e.g. instagram.com/hacked, whatsapp support).`,
        kn: `🔒 **ಖಾತೆ ಹ್ಯಾಕ್ ಆದಾಗ ಮಾಡಬೇಕಾದ ಕ್ರಮಗಳು:**

1. **ಸ್ನೇಹಿತರು ಮತ್ತು ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಿ:** ತಕ್ಷಣವೇ ಫೋನ್ ಮಾಡಿ ಹೇಳಿ: "ನನ್ನ ಖಾತೆ ಹ್ಯಾಕ್ ಆಗಿದೆ, ನನ್ನ ಹೆಸರಿನಲ್ಲಿ ಹಣ ಕೇಳಿದರೆ ಅಥವಾ ಲಿಂಕ್ ಬಂದರೆ ನಂಬಬೇಡಿ!"
2. **ಎಲ್ಲಾ ಡಿವೈಸ್‌ಗಳಿಂದ ಲಾಗ್‌ಔಟ್ ಮಾಡಿ:** ವಾಟ್ಸಾಪ್‌ನ Linked Devices ಅಥವಾ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನ Security ಸೆಟ್ಟಿಂಗ್ಸ್‌ಗೆ ಹೋಗಿ 'Log out from all devices' ಕೊಡಿ.
3. **2-Step Verification (2FA) ಸಕ್ರಿಯಗೊಳಿಸಿ:** ನಿಮ್ಮ ಖಾತೆಗೆ 6-ಅಂಕಿಯ ರಹಸ್ಯ PIN ಸೆಟ್ ಮಾಡಿ.
4. **ಅಧಿಕೃತ ಬೆಂಬಲ ಪಡೆಯಿರಿ:** ಅಧಿಕೃತ ರಿಕವರಿ ಪೇಜ್‌ಗಳ (instagram.com/hacked) ಮೂಲಕ ಖಾತೆಯನ್ನು ಮರಳಿ ಪಡೆಯಿರಿ.`,
        hi: `🔒 **खाता हैक होने पर तुरंत क्या करें:**

1. **परिवार और दोस्तों को सावधान करें:** तुरंत फोन करके बताएं: "मेरा अकाउंट हैक हो गया है, मेरे नाम से पैसे मांगे जाएं या कोई लिंक आए तो बिल्कुल न मानें!"
2. **सभी डिवाइस से लॉगआउट करें:** सेटिंग्स में जाकर 'Linked Devices' या 'Security -> Log out of all sessions' पर क्लिक करें।
3. **Two-Step Verification (2FA) चालू करें:** अपने व्हाट्सएप और इंस्टाग्राम पर 6 अंकों का गुप्त पिन अवश्य लगाएं।
4. **आधिकारिक रिकवरी का प्रयोग करें:** आधिकारिक पेज (जैसे instagram.com/hacked) के जरिए अपना अकाउंट वापस पाएं।`
      }
    },

    general_default: {
      isEmergency: false,
      text: {
        en: `👋 Hello! I am **CyberMitra**, your cyber safety guide.

Here are 3 core cyber safety rules every citizen should follow:
1. **NEVER share OTP or UPI PIN** with anyone, even bank staff.
2. **NEVER scan a QR code** to receive money. QR codes only deduct funds.
3. **Indian law has NO provision for 'Digital Arrest'** over video call. Disconnect immediately.

In case of financial fraud, dial **1930** or report on **cybercrime.gov.in**. Feel free to ask me any question about online safety!`,
        kn: `👋 ನಮಸ್ಕಾರ! ನಾನು **ಸೈಬರ್ ಮಿತ್ರ**, ನಿಮ್ಮ ಸೈಬರ್ ಸುರಕ್ಷತಾ ಸಹಾಯಕ.

ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕರು ಪಾಲಿಸಬೇಕಾದ 3 ಮುಖ್ಯ ನಿಯಮಗಳು:
1. ಬ್ಯಾಂಕ್ ಸಿಬ್ಬಂದಿ ಕೇಳಿದರೂ **OTP ಅಥವಾ UPI PIN ಹಂಚಿಕೊಳ್ಳಬೇಡಿ**.
2. ಹಣ ಪಡೆಯಲು **QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ**. ಇದರಿಂದ ಹಣ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ.
3. ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ **'ಡಿಜಿಟಲ್ ಬಂಧನ' ಮಾಡುವ ಯಾವುದೇ ನಿಯಮ ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ ಇಲ್ಲ**. ತಕ್ಷಣ ಕರೆ ಕಟ್ ಮಾಡಿ.

ಹಣಕಾಸಿನ ವಂಚನೆಯಾದರೆ **1930** ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ **cybercrime.gov.in** ಗೆ ಭೇಟಿ ನೀಡಿ. ಸೈಬರ್ ಸುರಕ್ಷತೆಯ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ!`,
        hi: `👋 नमस्ते! मैं हूँ **साइबर मित्र**, आपका साइबर सुरक्षा मार्गदर्शक।

हर नागरिक को याद रखने चाहिए ये 3 बुनियादी नियम:
1. बैंक अधिकारी भी पूछे तो कभी **OTP या UPI PIN न बताएं**।
2. पैसे पाने के लिए कभी **QR कोड स्कैन न करें**, इससे सिर्फ पैसे कटते हैं।
3. वीडियो कॉल पर **'डिजिटल अरेस्ट' का कोई कानून नहीं है**। ऐसा कॉल आते ही तुरंत काट दें।

वित्तीय ठगी की स्थिति में तुरंत **1930** पर कॉल करें या **cybercrime.gov.in** पर शिकायत दर्ज करें। आप मुझसे कोई भी सवाल पूछ सकते हैं!`
      }
    }
  },

  // Match user input
  processQuery: function(input) {
    if (!input || input.trim().length === 0) {
      return this.responses.general_default;
    }

    var lower = input.toLowerCase();

    // Check emergency first
    if (/lost money|money stolen|debited|hacked|scammed|cheated|paisa kat gaya|paise kat gaye|pana kaledu|hana kaleduhogide|fraud ho gaya|urgent help|emergency/i.test(lower)) {
      return this.responses.emergency_money;
    }

    // Digital arrest
    if (/digital arrest|police video call|cbi|ed|skype|parcel|drugs|customs|court warrant|warrant|fake police/i.test(lower)) {
      return this.responses.digital_arrest;
    }

    // QR code
    if (/qr code|qr|scan|receive money|scanner/i.test(lower)) {
      return this.responses.qr_code;
    }

    // Fake job / task
    if (/job|part time|telegram|youtube like|task|work from home|earn money|salary/i.test(lower)) {
      return this.responses.fake_job;
    }

    // 1930 helpline
    if (/1930|helpline|complaint|cybercrime\.gov|portal|how to report|police station/i.test(lower)) {
      return this.responses.helpline_1930;
    }

    // Hacked social media
    if (/instagram|whatsapp|facebook|hacked|password|otp|2fa|two step/i.test(lower)) {
      return this.responses.hacked_account;
    }

    return this.responses.general_default;
  }
};
