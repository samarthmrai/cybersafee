// Emergency Help Guide Component
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.EmergencyGuide = function EmergencyGuide(props) {
  var lang = props.lang;
  var playAudio = props.playAudio;
  var stopAudio = props.stopAudio;
  var isSpeaking = props.isSpeaking;

  var [activePlaybook, setActivePlaybook] = React.useState("money");

  var playbooks = [
    {
      id: "money",
      icon: "💸",
      title: {
        en: "Stolen Money / Bank Fraud (Golden Hour)",
        kn: "ಹಣ ಕಳ್ಳತನ / ಬ್ಯಾಂಕ್ ವಂಚನೆ (ಗೋಲ್ಡನ್ ಅವರ್)",
        hi: "पैसे कट जाना / बैंक धोखाधड़ी (गोल्डन ऑवर)"
      },
      tag: "CRITICAL 2-HOUR WINDOW",
      steps: [
        {
          num: "1",
          title: {
            en: "Call National Helpline 1930 Immediately",
            kn: "ತಕ್ಷಣವೇ ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ",
            hi: "तुरंत राष्ट्रीय हेल्पलाइन 1930 पर कॉल करें"
          },
          desc: {
            en: "1930 connects directly to the Indian Financial Cyber Fraud Reporting System. Reporting within 1–2 hours allows the system to freeze fraudulent transactions before scammers withdraw funds at ATMs.",
            kn: "1930 ಭಾರತೀಯ ಆರ್ಥಿಕ ಸೈಬರ್ ವಂಚನೆ ವರದಿ ವ್ಯವಸ್ಥೆಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ. ಮೊದಲ 1-2 ಗಂಟೆಗಳಲ್ಲಿ ಕರೆ ಮಾಡಿದರೆ ವಂಚಕರು ಹಣ ಡ್ರಾ ಮಾಡದಂತೆ ಅವರ ಖಾತೆಯನ್ನು ತಕ್ಷಣವೇ ಸ್ಥಗಿತಗೊಳಿಸಬಹುದು.",
            hi: "1930 सीधे बैंकों और यूपीआई सिस्टम से जुड़ा है। पहले 1-2 घंटे में कॉल करने पर ठगों के खाते को तुरंत फ्रीज कराया जा सकता है।"
          }
        },
        {
          num: "2",
          title: {
            en: "Call Your Bank & Freeze Cards / NetBanking",
            kn: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ಗೆ ಕರೆ ಮಾಡಿ ಕಾರ್ಡ್ ಮತ್ತು ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಬ್ಲಾಕ್ ಮಾಡಿ",
            hi: "अपने बैंक को कॉल करके कार्ड और नेट बैंकिंग ब्लॉक कराएं"
          },
          desc: {
            en: "Immediately contact your bank's 24x7 customer care to freeze your debit card, credit card, and internet banking to prevent further unauthorized deductions.",
            kn: "ಹೆಚ್ಚಿನ ಹಣ ಕಡಿತವಾಗದಂತೆ ತಡೆಯಲು ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನ 24x7 ಗ್ರಾಹಕ ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ ಡೆಬಿಟ್/ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಮತ್ತು ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಅನ್ನು ತಕ್ಷಣ ಬ್ಲಾಕ್ ಮಾಡಿಸಿ.",
            hi: "आगे और पैसे कटने से रोकने के लिए तुरंत बैंक कस्टमर केयर पर कॉल करके अपने कार्ड और नेट बैंकिंग को ब्लॉक करवाएं।"
          }
        },
        {
          num: "3",
          title: {
            en: "File Formal Complaint on cybercrime.gov.in",
            kn: "cybercrime.gov.in ನಲ್ಲಿ ಅಧಿಕೃತ ಆನ್‌ಲೈನ್ ದೂರು ದಾಖಲಿಸಿ",
            hi: "cybercrime.gov.in पर आधिकारिक ऑनलाइन शिकायत दर्ज करें"
          },
          desc: {
            en: "Visit the official government portal https://cybercrime.gov.in/. Register your complaint with transaction details, UTR numbers, debit SMS, and bank statement screenshots.",
            kn: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್ https://cybercrime.gov.in/ ಗೆ ಭೇಟಿ ನೀಡಿ. ಹಣ ಕಡಿತವಾದ ಮೆಸೇಜ್, UTR ಸಂಖ್ಯೆ ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳೊಂದಿಗೆ ದೂರು ದಾಖಲಿಸಿ.",
            hi: "आधिकारिक सरकारी पोर्टल https://cybercrime.gov.in/ पर जाएं। ट्रांजैक्शन डिटेल, UTR नंबर और बैंक स्टेटमेंट के साथ शिकायत दर्ज करें।"
          }
        },
        {
          num: "4",
          title: {
            en: "Visit Local Police Station for Acknowledgment",
            kn: "ಸ್ವೀಕೃತಿಗಾಗಿ ಸ್ಥಳೀಯ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಭೇಟಿ ನೀಡಿ",
            hi: "पावती (Acknowledgment) के लिए स्थानीय पुलिस स्टेशन जाएं"
          },
          desc: {
            en: "Submit the online acknowledgment number to your nearest cyber police station or local station to obtain an official FIR/complaint acknowledgment for bank insurance claims.",
            kn: "ಆನ್‌ಲೈನ್ ದೂರಿನ ಸಂಖ್ಯೆಯನ್ನು ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ನೀಡಿ ಅಧಿಕೃತ ದೂರು ಸ್ವೀಕೃತಿ ಪ್ರತಿ ಪಡೆಯಿರಿ.",
            hi: "ऑनलाइन शिकायत पावती को लेकर नजदीकी पुलिस स्टेशन जाएं ताकि बैंक में रिफंड क्लेम के लिए जरूरी दस्तावेज मिल सकें।"
          }
        }
      ]
    },
    {
      id: "hacked",
      icon: "🔓",
      title: {
        en: "Hacked WhatsApp / Social Media Account",
        kn: "ಹ್ಯಾಕ್ ಆದ WhatsApp ಅಥವಾ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಖಾತೆ",
        hi: "हैक हुआ व्हाट्सएप / सोशल मीडिया अकाउंट"
      },
      tag: "IMPERSONATION RISK",
      steps: [
        {
          num: "1",
          title: {
            en: "Warn Friends & Family Immediately",
            kn: "ತಕ್ಷಣವೇ ನಿಮ್ಮ ಸ್ನೇಹಿತರು ಮತ್ತು ಕುಟುಂಬಕ್ಕೆ ಎಚ್ಚರಿಕೆ ನೀಡಿ",
            hi: "तुरंत परिवार और दोस्तों को कॉल करके सावधान करें"
          },
          desc: {
            en: "Scammers will message your contacts demanding urgent medical funds or sending phishing links. Alert them via regular voice call or SMS not to send money.",
            kn: "ವಂಚಕರು ನಿಮ್ಮ ಸ್ನೇಹಿತರಿಗೆ ತುರ್ತು ಹಣ ಕೇಳಿ ಮೆಸೇಜ್ ಕಳುಹಿಸುತ್ತಾರೆ. ಆದ್ದರಿಂದ ಯಾರಿಗೂ ಹಣ ನೀಡಬೇಡಿ ಎಂದು ಫೋನ್ ಕರೆ ಮಾಡಿ ತಕ್ಷಣ ಎಚ್ಚರಿಸಿ.",
            hi: "हैकर्स आपके दोस्तों को इमरजेंसी के नाम पर पैसे मांगने का मैसेज भेजेंगे। सीधे फोन करके बताएं कि कोई पैसा न भेजे।"
          }
        },
        {
          num: "2",
          title: {
            en: "Log Out All Linked Devices",
            kn: "ಎಲ್ಲಾ ಲಿಂಕ್ ಆದ ಡಿವೈಸ್‌ಗಳಿಂದ ಲಾಗ್‌ಔಟ್ ಮಾಡಿ",
            hi: "सभी लिंक्ड डिवाइस से तुरंत लॉगआउट करें"
          },
          desc: {
            en: "In WhatsApp: Tap 3 dots -> Linked Devices -> Log out of all sessions. In Google/Instagram: Go to Security Settings -> Active Devices -> Sign out all unrecognized sessions.",
            kn: "WhatsApp ನಲ್ಲಿ: 3 ಚುಕ್ಕೆಗಳು -> Linked Devices -> ಎಲ್ಲಾ ಸೆಷನ್‌ಗಳಿಂದ ಲಾಗ್‌ಔಟ್ ಮಾಡಿ. Google/Instagram ನಲ್ಲಿ: ಭದ್ರತಾ ಸೆಟ್ಟಿಂಗ್ಸ್ ತೆರೆದು ಅಪರಿಚಿತ ಡಿವೈಸ್‌ಗಳನ್ನು ತೆಗೆದುಹಾಕಿ.",
            hi: "WhatsApp में: Linked Devices में जाकर सभी सत्रों से लॉगआउट करें। गूगल/इंस्टाग्राम में Security सेटिंग्स में जाकर सभी अनजान डिवाइस हटाएं।"
          }
        },
        {
          num: "3",
          title: {
            en: "Enable Two-Step Verification (2FA)",
            kn: "Two-Step Verification (2FA) ಸಕ್ರಿಯಗೊಳಿಸಿ",
            hi: "Two-Step Verification (2FA) चालू करें"
          },
          desc: {
            en: "Set a 6-digit PIN on WhatsApp (Settings -> Account -> Two-Step Verification). This blocks anyone else from registering your phone number even if they have your SIM OTP.",
            kn: "WhatsApp ಸೆಟ್ಟಿಂಗ್ಸ್‌ನಲ್ಲಿ 6-ಅಂಕಿಯ Two-Step Verification PIN ಸೆಟ್ ಮಾಡಿ. ಇದರಿಂದ ಬೇರೆಯವರು ನಿಮ್ಮ ಖಾತೆ ಪ್ರವೇಶಿಸುವುದು ಅಸಾಧ್ಯವಾಗುತ್ತದೆ.",
            hi: "WhatsApp में 6 अंकों का Two-Step Verification पिन जरूर लगाएं। इससे कोई भी आपका खाता दोबारा नहीं चुरा पाएगा।"
          }
        }
      ]
    },
    {
      id: "suspicious_link",
      icon: "⚠️",
      title: {
        en: "Clicked Suspicious Link / Installed Unknown APK",
        kn: "ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿದ್ದರೆ / APK ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿದ್ದರೆ",
        hi: "संदिग्ध लिंक पर क्लिक कर दिया / अनजान ऐप इंस्टॉल हो गया"
      },
      tag: "MALWARE CONTAINMENT",
      steps: [
        {
          num: "1",
          title: {
            en: "Turn ON Airplane Mode Immediately!",
            kn: "ತಕ್ಷಣವೇ ಏರ್‌ಪ್ಲೇನ್ ಮೋಡ್ (Airplane Mode) ಆನ್ ಮಾಡಿ!",
            hi: "तुरंत एरोप्लेन मोड (Airplane Mode) चालू करें!"
          },
          desc: {
            en: "Disconnect Wi-Fi and mobile data instantly. This stops the malware from sending your OTPs, SMS, contacts, and passwords to the attacker's server.",
            kn: "ವೈ-ಫೈ ಮತ್ತು ಮೊಬೈಲ್ ಡೇಟಾವನ್ನು ತಕ್ಷಣ ಕಡಿತಗೊಳಿಸಿ. ಇದು ವೈರಸ್ ನಿಮ್ಮ OTP ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಕಳುಹಿಸುವುದನ್ನು ತಕ್ಷಣ ತಡೆಯುತ್ತದೆ.",
            hi: "वाई-फाई और इंटरनेट तुरंत बंद करें। इससे वायरस आपके फोन का डेटा और OTP ठगों के सर्वर पर नहीं भेज पाएगा।"
          }
        },
        {
          num: "2",
          title: {
            en: "Uninstall Unknown Apps & Check Device Admin",
            kn: "ಅಪರಿಚಿತ ಆಪ್‌ಗಳನ್ನು ಅನ್‌ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ",
            hi: "अनजान ऐप अनइंस्टॉल करें और डिवाइस एडमिन चेक करें"
          },
          desc: {
            en: "Go to Phone Settings -> Apps. Look for recently installed apps with generic names or icons. Also check Settings -> Security -> Device Admin Apps and deactivate any suspicious managers.",
            kn: "ಸೆಟ್ಟಿಂಗ್ಸ್ -> ಆಪ್ಸ್‌ಗೆ ಹೋಗಿ ಇತ್ತೀಚೆಗೆ ಬಂದ ಅಪರಿಚಿತ ಆಪ್‌ಗಳನ್ನು ಡಿಲೀಟ್ ಮಾಡಿ. Device Admin Apps ನಲ್ಲಿ ಅನುಮಾನಾಸ್ಪದ ಅನುಮತಿಗಳನ್ನು ರದ್ದುಗೊಳಿಸಿ.",
            hi: "फोन सेटिंग्स -> ऐप्स में जाएं और हाल ही में आए अनजान ऐप को हटाएं। डिवाइस एडमिन सेटिंग्स में जाकर संदिग्ध ऐप की परमिशन बंद करें।"
          }
        },
        {
          num: "3",
          title: {
            en: "Change Passwords from Another Clean Device",
            kn: "ಬೇರೊಂದು ಸುರಕ್ಷಿತ ಫೋನ್‌ನಿಂದ ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸಿ",
            hi: "किसी दूसरे सुरक्षित फोन से सभी पासवर्ड बदलें"
          },
          desc: {
            en: "Do NOT change passwords on the infected phone. Use a trusted family member's phone or laptop to immediately change your email, UPI, and netbanking credentials.",
            kn: "ವೈರಸ್ ತಗುಲಿದ ಫೋನ್‌ನಲ್ಲಿ ಪಾಸ್‌ವರ್ಡ್ ಬದಲಿಸಬೇಡಿ. ಕುಟುಂಬದವರ ಬೇರೊಂದು ಸುರಕ್ಷಿತ ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್ ಬಳಸಿ ಮುಖ್ಯ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ.",
            hi: "उस फोन से पासवर्ड न बदलें। परिवार के किसी अन्य सुरक्षित फोन का इस्तेमाल करके अपने बैंक और ईमेल पासवर्ड तुरंत बदलें।"
          }
        }
      ]
    },
    {
      id: "extortion",
      icon: "⚖️",
      title: {
        en: "Threatened with 'Digital Arrest' or Extortion",
        kn: "'ಡಿಜಿಟಲ್ ಬಂಧನ' ಅಥವಾ ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್ ಬೆದರಿಕೆ",
        hi: "'डिजिटल अरेस्ट' या ब्लैकमेल की धमकी"
      },
      tag: "FAKE LAW ENFORCEMENT",
      steps: [
        {
          num: "1",
          title: {
            en: "Hang Up Immediately — Indian Law Has No Digital Arrest",
            kn: "ತಕ್ಷಣ ಕರೆ ಕಟ್ ಮಾಡಿ — ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ ಡಿಜಿಟಲ್ ಬಂಧನವಿಲ್ಲ",
            hi: "तुरंत फोन काट दें — भारतीय कानून में डिजिटल अरेस्ट नहीं होता"
          },
          desc: {
            en: "Supreme Court and Police headquarters have clarified: NO government agency arrests citizens or demands money over video calls. Hang up and do not answer again.",
            kn: "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಮತ್ತು ಪೊಲೀಸರು ಸ್ಪಷ್ಟಪಡಿಸಿದ್ದಾರೆ: ಯಾವುದೇ ಇಲಾಖೆ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ಬಂಧಿಸುವುದಿಲ್ಲ. ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ.",
            hi: "सुप्रीम कोर्ट और पुलिस ने साफ किया है कि वीडियो कॉल पर कोई गिरफ्तारी नहीं होती। तुरंत फोन काटें।"
          }
        },
        {
          num: "2",
          title: {
            en: "NEVER Transfer 'Verification' Money",
            kn: "ಯಾವುದೇ ಕಾರಣಕ್ಕೂ 'ಪರಿಶೀಲನೆ' ಹಣ ವರ್ಗಾಯಿಸಬೇಡಿ",
            hi: "जांच के नाम पर एक भी रुपया ट्रांसफर न करें"
          },
          desc: {
            en: "Government agencies do not have 'escrow verification accounts'. Any account provided by them belongs to cyber criminals.",
            kn: "ಸರ್ಕಾರದಲ್ಲಿ ಯಾವುದೇ 'ಪರಿಶೀಲನಾ ಖಾತೆ' ಇರುವುದಿಲ್ಲ. ಅವರು ನೀಡುವ ಎಲ್ಲಾ ಖಾತೆಗಳು ವಂಚಕರದ್ದಾಗಿರುತ್ತವೆ.",
            hi: "सरकार में कोई भी 'आरबीआई जांच खाता' नहीं होता। उनके द्वारा दिया गया खाता ठगों का होता है।"
          }
        },
        {
          num: "3",
          title: {
            en: "Report Caller on Chakshu (Sanchar Saathi) and 1930",
            kn: "ಆ ಸಂಖ್ಯೆಯನ್ನು ಚಕ್ಷು ಪೋರ್ಟಲ್ ಮತ್ತು 1930 ಗೆ ವರದಿ ಮಾಡಿ",
            hi: "नंबर की शिकायत 'चक्षु' और 1930 पर करें"
          },
          desc: {
            en: "Dial 1930 to register the extortion attempt. Report the caller's mobile number on the Department of Telecom's Chakshu portal at https://sancharsaathi.gov.in/ to disconnect their SIM card.",
            kn: "1930 ಗೆ ಕರೆ ಮಾಡಿ ಬೆದರಿಕೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ. ದೂರಸಂಪರ್ಕ ಇಲಾಖೆಯ https://sancharsaathi.gov.in/ ಚಕ್ಷು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಆ ಸಂಖ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ ಅವರ ಸಿಮ್ ಬ್ಲಾಕ್ ಮಾಡಿಸಿ.",
            hi: "1930 पर शिकायत दर्ज कराएं और दूरसंचार विभाग के 'चक्षु' पोर्टल (sancharsaathi.gov.in) पर नंबर रिपोर्ट करके उनका सिम बंद करवाएं।"
          }
        }
      ]
    }
  ];

  var bankHelplines = [
    { bank: "State Bank of India (SBI)", tollFree: "1800 1234 / 1800 2100" },
    { bank: "HDFC Bank", tollFree: "1800 1600 / 1800 2600" },
    { bank: "ICICI Bank", tollFree: "1800 1080" },
    { bank: "Punjab National Bank (PNB)", tollFree: "1800 180 2222" },
    { bank: "Bank of Baroda (BoB)", tollFree: "1800 5700" },
    { bank: "Canara Bank", tollFree: "1800 425 0018" },
    { bank: "Axis Bank", tollFree: "1860 419 5555" },
    { bank: "Union Bank of India", tollFree: "1800 22 2244" }
  ];

  var currentPlaybook = playbooks.find(function(p) { return p.id === activePlaybook; }) || playbooks[0];

  return React.createElement(
    "div",
    { className: "space-y-8 pb-12" },
    
    // Top Emergency Hero
    React.createElement(
      "div",
      { className: "bg-red-700 text-white rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-red-800" },
      React.createElement(
        "div",
        { className: "max-w-3xl" },
        React.createElement("span", { className: "text-4xl block mb-2" }, "🚨"),
        React.createElement(
          "h1",
          { className: "text-2xl sm:text-4xl font-black tracking-tight" },
          lang === "kn" ? "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ತುರ್ತು ಸಹಾಯ ಮಾರ್ಗದರ್ಶಿ" : (lang === "hi" ? "राष्ट्रीय साइबर आपातकालीन सहायता मार्गदर्शिका" : "National Cyber Emergency Help Guide")
        ),
        React.createElement(
          "p",
          { className: "text-red-100 text-sm sm:text-base mt-2 mb-6 leading-relaxed" },
          lang === "kn"
            ? "ಆರ್ಥಿಕ ವಂಚನೆಯಾದಾಗ ಮೊದಲ 1 ರಿಂದ 2 ಗಂಟೆಗಳು ಅತ್ಯಂತ ನಿರ್ಣಾಯಕ. ಕೆಳಗಿನ ತುರ್ತು ಕ್ರಮಗಳನ್ನು ತಕ್ಷಣವೇ ಪಾಲಿಸಿ."
            : (lang === "hi"
                ? "वित्तीय धोखाधड़ी होने पर पहले 1 से 2 घंटे सबसे महत्वपूर्ण होते हैं। नीचे दिए गए आपातकालीन कदमों का तुरंत पालन करें।"
                : "The first 1 to 2 hours following a financial fraud are the 'Golden Hour'. Act swiftly using the official government channels below.")
        ),

        // Prominent Helpline Box
        React.createElement(
          "div",
          { className: "bg-white text-slate-900 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4" },
          React.createElement(
            "div",
            { className: "flex items-center space-x-3 text-center sm:text-left" },
            React.createElement("span", { className: "text-4xl" }, "📞"),
            React.createElement(
              "div",
              null,
              React.createElement("p", { className: "text-xs font-black uppercase text-red-600 tracking-wider" }, "India's National Cyber Helpline (24x7)"),
              React.createElement("p", { className: "text-3xl sm:text-4xl font-black text-slate-900 tracking-tight" }, "1930"),
              React.createElement("p", { className: "text-xs text-slate-500 font-semibold" }, "Toll-Free • Ministry of Home Affairs (I4C)")
            )
          ),
          React.createElement(
            "div",
            { className: "flex flex-wrap gap-2 justify-center" },
            React.createElement(
              "a",
              {
                href: "tel:1930",
                className: "bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl shadow text-base transition-all flex items-center space-x-2"
              },
              React.createElement("span", null, "📞"),
              React.createElement("span", null, lang === "kn" ? "ಈಗಲೇ 1930 ಗೆ ಕರೆ ಮಾಡಿ" : (lang === "hi" ? "अभी 1930 डायल करें" : "Call 1930 Now"))
            ),
            React.createElement(
              "a",
              {
                href: "https://cybercrime.gov.in/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl shadow text-base transition-all flex items-center space-x-2"
              },
              React.createElement("span", null, "🌐"),
              React.createElement("span", null, "cybercrime.gov.in")
            )
          )
        )
      )
    ),

    // Playbook Tabs
    React.createElement(
      "div",
      { className: "flex flex-wrap items-center justify-center gap-2" },
      playbooks.map(function(pb) {
        var isCurrent = activePlaybook === pb.id;
        return React.createElement(
          "button",
          {
            key: pb.id,
            onClick: function() { setActivePlaybook(pb.id); },
            className: "px-4 py-2.5 rounded-2xl text-sm font-bold transition-all flex items-center space-x-2 " +
              (isCurrent ? "bg-slate-900 text-white shadow-md" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100")
          },
          React.createElement("span", { className: "text-lg" }, pb.icon),
          React.createElement("span", null, pb.title[lang] ? pb.title[lang].split("(")[0] : pb.title.en.split("(")[0])
        );
      })
    ),

    // Active Playbook Steps Card
    React.createElement(
      "div",
      { className: "bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between border-b border-slate-100 pb-4 mb-6" },
        React.createElement(
          "div",
          { className: "flex items-center space-x-3" },
          React.createElement("span", { className: "text-3xl" }, currentPlaybook.icon),
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-[11px] font-black uppercase text-red-600 tracking-wider bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200" }, currentPlaybook.tag),
            React.createElement("h2", { className: "text-xl sm:text-2xl font-black text-slate-900 mt-1" }, currentPlaybook.title[lang] || currentPlaybook.title.en)
          )
        )
      ),

      // Steps List
      React.createElement(
        "div",
        { className: "space-y-4" },
        currentPlaybook.steps.map(function(step) {
          return React.createElement(
            "div",
            { key: step.num, className: "flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200" },
            React.createElement(
              "div",
              { className: "w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0 shadow" },
              step.num
            ),
            React.createElement(
              "div",
              null,
              React.createElement("h3", { className: "font-black text-slate-900 text-base sm:text-lg mb-1" }, step.title[lang] || step.title.en),
              React.createElement("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed" }, step.desc[lang] || step.desc.en)
            )
          );
        })
      )
    ),

    // Bank Helplines Quick Directory
    React.createElement(
      "div",
      { className: "bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm" },
      React.createElement(
        "div",
        { className: "flex items-center space-x-2.5 mb-4" },
        React.createElement("span", { className: "text-2xl" }, "🏦"),
        React.createElement("h2", { className: "text-lg sm:text-xl font-black text-slate-900" }, lang === "kn" ? "ಪ್ರಮುಖ ಭಾರತೀಯ ಬ್ಯಾಂಕ್‌ಗಳ ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು" : (lang === "hi" ? "प्रमुख भारतीय बैंकों के आपातकालीन हेल्पलाइन नंबर" : "Major Indian Banks Emergency Helplines"))
      ),
      React.createElement(
        "p",
        { className: "text-xs sm:text-sm text-slate-500 mb-4" },
        lang === "kn" ? "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾದ ತಕ್ಷಣ ನಿಮ್ಮ ಕಾರ್ಡ್ ಮತ್ತು ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಅನ್ನು ಬ್ಲಾಕ್ ಮಾಡಲು ಈ ನಂಬರ್‌ಗಳಿಗೆ ಕರೆ ಮಾಡಿ:" : (lang === "hi" ? "पैसे कटने पर कार्ड और नेट बैंकिंग तुरंत ब्लॉक कराने के लिए इन नंबरों पर संपर्क करें:" : "Call your respective bank immediately to freeze your cards and NetBanking:")
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" },
        bankHelplines.map(function(b, i) {
          return React.createElement(
            "div",
            { key: i, className: "bg-slate-50 border border-slate-200 rounded-xl p-3.5" },
            React.createElement("p", { className: "font-black text-slate-900 text-sm" }, b.bank),
            React.createElement("p", { className: "text-xs font-mono font-bold text-blue-700 mt-1" }, b.tollFree)
          );
        })
      )
    )
  );
};
