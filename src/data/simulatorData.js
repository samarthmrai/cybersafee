// Interactive Scam Simulator Data: Scenarios, Choices, Points, and Explanations
window.CYBER_SIMULATOR_DATA = [
  {
    id: "sim_electricity",
    category: "Phishing SMS",
    title: {
      en: "Scenario 1: Urgent Electricity Disconnection SMS",
      kn: "ಸನ್ನಿವೇಶ ೧: ತುರ್ತು ವಿದ್ಯುತ್ ಕಡಿತದ SMS",
      hi: "परिदृश्य 1: बिजली कटने का आपातकालीन SMS"
    },
    sender: "+91-98450-12345 (Unknown Mobile)",
    simulatedMessage: {
      en: "⚡ URGENT: Dear Consumer, your electricity power will be disconnected TONIGHT at 09:30 PM because your previous month bill was not updated. Please immediately contact our Electricity Officer at 9845012345 or pay ₹10 bill update fee here: http://bit.ly/bescom-bill-update",
      kn: "⚡ ತುರ್ತು: ಗ್ರಾಹಕರೇ, ನಿಮ್ಮ ಹಿಂದಿನ ತಿಂಗಳ ಬಿಲ್ ಅಪ್‌ಡೇಟ್ ಆಗದ ಕಾರಣ ಇಂದು ರಾತ್ರಿ 09:30 ಕ್ಕೆ ವಿದ್ಯುತ್ ಕಡಿತಗೊಳ್ಳಲಿದೆ. ದಯವಿಟ್ಟು ತಕ್ಷಣ ವಿದ್ಯುತ್ ಅಧಿಕಾರಿಗೆ 9845012345 ಕರೆ ಮಾಡಿ ಅಥವಾ ₹10 ಪಾವತಿಸಿ: http://bit.ly/bescom-bill-update",
      hi: "⚡ तत्काल सूचना: प्रिय उपभोक्ता, आपका पिछला बिजली बिल अपडेट न होने के कारण आज रात 9:30 बजे बिजली काट दी जाएगी। तुरंत बिजली अधिकारी 9845012345 से संपर्क करें या ₹10 अपडेट शुल्क भरें: http://bit.ly/bescom-bill-update"
    },
    choices: [
      {
        id: "c1",
        text: {
          en: "Click the bit.ly link immediately and pay ₹10 so power isn't cut off",
          kn: "ಕರೆಂಟ್ ಹೋಗಬಾರದು ಎಂದು ತಕ್ಷಣವೇ ಬಿಟ್.ಲಿ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ ₹10 ಪಾವತಿಸುತ್ತೇನೆ",
          hi: "तुरंत लिंक पर क्लिक करके ₹10 जमा करूँगा ताकि बिजली न कटे"
        },
        points: -10,
        isSafe: false,
        feedback: {
          en: "DANGEROUS! The link opens a phishing page or downloads a malicious APK. Once you enter your banking details or UPI PIN to pay ₹10, scammers drain your entire account!",
          kn: "ಅಪಾಯಕಾರಿ! ಈ ಲಿಂಕ್ ನಕಲಿ ಪೇಜ್ ತೆರೆಯುತ್ತದೆ ಅಥವಾ ವೈರಸ್ ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡುತ್ತದೆ. ₹10 ಪಾವತಿಸಲು ನೀವು PIN ನಮೂದಿಸಿದ ತಕ್ಷಣ ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಹಣ ಕಳ್ಳತನವಾಗುತ್ತದೆ!",
          hi: "खतरनाक! यह लिंक एक फर्जी पेज खोलता है या वायरस ऐप डाउनलोड कराता है। ₹10 भरने के लिए पिन डालते ही आपका बैंक खाता खाली हो जाएगा!"
        }
      },
      {
        id: "c2",
        text: {
          en: "Call the mobile number 9845012345 given in the message to ask why it's not updated",
          kn: "ಏಕೆ ಅಪ್‌ಡೇಟ್ ಆಗಿಲ್ಲ ಎಂದು ತಿಳಿಯಲು ಮೆಸೇಜ್‌ನಲ್ಲಿರುವ 9845012345 ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡುತ್ತೇನೆ",
          hi: "मैसेज में दिए गए नंबर पर कॉल करके पूछूंगा कि बिल क्यों नहीं जुड़ा"
        },
        points: -5,
        isSafe: false,
        feedback: {
          en: "RISKY! The person answering is the scammer posing as an officer. They will speak authoritatively, create panic, and trick you into installing screen-sharing software like AnyDesk.",
          kn: "ಅಪಾಯಕಾರಿ! ಕರೆಯನ್ನು ಸ್ವೀಕರಿಸುವ ವ್ಯಕ್ತಿಯೇ ವಂಚಕ. ಆತ ಅಧಿಕಾರಿಯಂತೆ ನಟಿಸಿ ಹೆದರಿಸಿ AnyDesk ಮುಂತಾದ ಆಪ್ ಹಾಕಿಸಿಕೊಂಡು ಖಾತೆ ಖಾಲಿ ಮಾಡುತ್ತಾನೆ.",
          hi: "जोखिम भरा! फोन उठाने वाला व्यक्ति ही ठग है। वह आपको डराकर स्क्रीन शेयरिंग ऐप (AnyDesk) डाउनलोड करवा लेगा।"
        }
      },
      {
        id: "c3",
        text: {
          en: "Do not click any link or call the number. Open official electricity app or call official customer care",
          kn: "ಯಾವುದೇ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡದೆ, ಅಧಿಕೃತ ವಿದ್ಯುತ್ ನಿಗಮದ ಆಪ್ ಅಥವಾ ಅಧಿಕೃತ ಕಚೇರಿಗೆ ತೆರಳಿ ಪರಿಶೀಲಿಸುತ್ತೇನೆ",
          hi: "किसी लिंक पर क्लिक नहीं करूंगा, सीधे बिजली विभाग के आधिकारिक ऐप या हेल्पलाइन पर जांच करूंगा"
        },
        points: 10,
        isSafe: true,
        feedback: {
          en: "EXCELLENT & SAFE CHOICE! Official power companies never send disconnection SMS from 10-digit mobile numbers or shortened bit.ly links. Always verify on official apps.",
          kn: "ಅತ್ಯುತ್ತಮ ಮತ್ತು ಸುರಕ್ಷಿತ ನಿರ್ಧಾರ! ಅಧಿಕೃತ ವಿದ್ಯುತ್ ನಿಗಮಗಳು ಸಾಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳಿಂದ ಅಥವಾ ಬಿಟ್.ಲಿ ಲಿಂಕ್ ಮೂಲಕ ಮೆಸೇಜ್ ಕಳಿಸುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಆಪ್‌ನಲ್ಲಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸುವುದು ಸರಿ.",
          hi: "शानदार और सुरक्षित फैसला! सरकारी विभाग कभी भी साधारण मोबाइल नंबर या bit.ly लिंक से नोटिस नहीं भेजते। हमेशा असली ऐप पर ही जांचें।"
        }
      }
    ]
  },
  {
    id: "sim_digital_arrest",
    category: "Digital Arrest",
    title: {
      en: "Scenario 2: Skype Video Call from 'Police / CBI Officer'",
      kn: "ಸನ್ನಿವೇಶ ೨: ನಕಲಿ 'ಪೊಲೀಸ್ / CBI ಅಧಿಕಾರಿ'ಯಿಂದ ಸ್ಕೈಪ್ ವಿಡಿಯೋ ಕಾಲ್",
      hi: "परिदृश्य 2: 'पुलिस / CBI अफसर' का स्काइप वीडियो कॉल"
    },
    sender: "Skype: @CBI_CrimeBranch_HQ",
    simulatedMessage: {
      en: "Caller in police uniform showing fake badges on video: 'A consignment with 15 passports and illegal narcotics was seized in Mumbai registered in your name. A non-bailable arrest warrant has been issued by Supreme Court. You are under Digital Arrest. Do not disconnect this call or tell anyone. You must transfer ₹2,00,000 for verification to the RBI security escrow account right now.'",
      kn: "ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರದಲ್ಲಿರುವ ವ್ಯಕ್ತಿ: 'ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ 15 ಪಾಸ್‌ಪೋರ್ಟ್ ಮತ್ತು ಮಾದಕ ದ್ರವ್ಯಗಳುಳ್ಳ ಪಾರ್ಸೆಲ್ ಸಿಕ್ಕಿದೆ. ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಅರೆಸ್ಟ್ ವಾರೆಂಟ್ ಹೊರಡಿಸಿದೆ. ನೀವು ಡಿಜಿಟಲ್ ಬಂಧನದಲ್ಲಿದ್ದೀರಿ. ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಬೇಡಿ, ಯಾರಿಗೂ ಹೇಳಬೇಡಿ. ನಿಮ್ಮ ಖಾತೆಯ ₹2,00,000 ಹಣವನ್ನು ಪರಿಶೀಲನೆಗಾಗಿ RBI ಸುರಕ್ಷಿತ ಖಾತೆಗೆ ವರ್ಗಾಯಿಸಿ.'",
      hi: "वर्दी पहना नकली अफसर: 'आपके नाम पर 15 पासपोर्ट और नशीले पदार्थों का पार्सल पकड़ा गया है। सुप्रीम कोर्ट ने वारंट जारी किया है। आप डिजिटल अरेस्ट में हैं। कॉल न काटें। जांच के लिए अपने ₹2,00,000 तुरंत आरबीआई के सुरक्षित खाते में ट्रांसफर करें।'"
    },
    choices: [
      {
        id: "c1",
        text: {
          en: "Panic and immediately transfer the ₹2,00,000 to prove innocence to the 'officer'",
          kn: "ಹೆದರಿ ನನ್ನ ನಿರಪರಾಧಿತ್ವ ಸಾಬೀತುಪಡಿಸಲು ಆತ ಹೇಳಿದ ಖಾತೆಗೆ ₹2,00,000 ವರ್ಗಾಯಿಸುತ್ತೇನೆ",
          hi: "घबराकर अपनी बेगुनाही साबित करने के लिए तुरंत ₹2,00,000 ट्रांसफर कर दूंगा"
        },
        points: -10,
        isSafe: false,
        feedback: {
          en: "DISASTROUS! That account belongs to an international crime syndicate. Once transferred, the money is layered and withdrawn instantly. The government has NO 'RBI verification accounts'!",
          kn: "ಘೋರ ತಪ್ಪು! ಆ ಖಾತೆ ಅಂತರರಾಷ್ಟ್ರೀಯ ವಂಚಕರದ್ದು. ಹಣ ವರ್ಗಾವಣೆಯಾದ ತಕ್ಷಣ ಡ್ರಾ ಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ. ಸರ್ಕಾರದಲ್ಲಿ ಯಾವುದೇ 'RBI ವೆರಿಫಿಕೇಶನ್ ಖಾತೆ' ಇರುವುದಿಲ್ಲ!",
          hi: "बड़ी भूल! वह खाता साइबर ठगों का है। पैसे जाते ही वे निकाल लेंगे। सरकार में कोई भी 'आरबीआई जांच खाता' नहीं होता!"
        }
      },
      {
        id: "c2",
        text: {
          en: "Hang up immediately! There is NO such thing as 'Digital Arrest' in Indian law. Call 1930 and inform family",
          kn: "ತಕ್ಷಣ ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸುತ್ತೇನೆ! ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಬಂಧನ' ಎಂಬುದೇ ಇಲ್ಲ. ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸುತ್ತೇನೆ",
          hi: "तुरंत कॉल काट दूंगा! भारतीय कानून में 'डिजिटल अरेस्ट' जैसा कुछ नहीं होता। 1930 पर शिकायत करूंगा और परिवार को बताऊंगा"
        },
        points: 10,
        isSafe: true,
        feedback: {
          en: "SPOT ON! The Indian Supreme Court, CBI, and Police have confirmed: NO law enforcement agency arrests citizens or demands money on video call. Hanging up and calling 1930 is the 100% correct action.",
          kn: "ನಿಖರ ನಿರ್ಧಾರ! ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಮತ್ತು ಪೊಲೀಸ್ ಇಲಾಖೆ ಸ್ಪಷ್ಟಪಡಿಸಿದೆ: ಯಾವುದೇ ಅಧಿಕೃತ ಸಂಸ್ಥೆ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ಬಂಧಿಸುವುದಿಲ್ಲ ಅಥವಾ ಹಣ ಕೇಳುವುದಿಲ್ಲ. ಕರೆ ಕಡಿತಗೊಳಿಸಿ 1930 ಗೆ ದೂರು ನೀಡುವುದೇ ಸರಿ.",
          hi: "बिल्कुल सही! सुप्रीम कोर्ट और पुलिस ने साफ कहा है कि वीडियो कॉल पर गिरफ्तारी का कोई नियम नहीं है। फोन काटना और 1930 पर रिपोर्ट करना ही सही कदम है।"
        }
      },
      {
        id: "c3",
        text: {
          en: "Stay on the call alone in your room and negotiate with him to reduce the amount to ₹50,000",
          kn: "ಕೋಣೆಯಲ್ಲಿ ಒಬ್ಬನೇ ಕುಳಿತು ಆತನೊಂದಿಗೆ ಚೌಕಾಸಿ ಮಾಡಿ ಮೊತ್ತವನ್ನು ₹50,000 ಗೆ ಇಳಿಸಲು ಯತ್ನಿಸುತ್ತೇನೆ",
          hi: "कमरे में अकेले रहकर उस फर्जी अफसर से सौदा करूंगा कि ₹50,000 में मामला रफा-दफा कर दे"
        },
        points: -10,
        isSafe: false,
        feedback: {
          en: "WRONG! By staying on call and isolating yourself, scammers psychologically break your confidence and extract every penny. Never negotiate with extortionists; disconnect immediately!",
          kn: "ತಪ್ಪು! ಏಕಾಂಗಿಯಾಗಿ ಉಳಿದು ಮಾತನಾಡಿದರೆ ವಂಚಕರು ನಿಮ್ಮನ್ನು ಇನ್ನಷ್ಟು ಹೆದರಿಸಿ ಲೂಟಿ ಮಾಡುತ್ತಾರೆ. ಇವರೊಂದಿಗೆ ಚೌಕಾಸಿ ಮಾಡದೆ ತಕ್ಷಣ ಕರೆ ಕಟ್ ಮಾಡಿ!",
          hi: "गलत! अकेले बात करने से ठग आपको और डराएंगे। कभी भी ऐसे ठगों से बात न बढ़ाएं, तुरंत कॉल काटें!"
        }
      }
    ]
  },
  {
    id: "sim_qr_olx",
    category: "QR Code Scam",
    title: {
      en: "Scenario 3: Selling an Old Fridge on OLX",
      kn: "ಸನ್ನಿವೇಶ ೩: OLX ನಲ್ಲಿ ಹಳೆಯ ಫ್ರಿಜ್ ಮಾರಾಟ",
      hi: "परिदृश्य 3: OLX पर पुराना फ्रिज बेचना"
    },
    sender: "Buyer on WhatsApp: 'Col. Rajesh Sharma (Army)'",
    simulatedMessage: {
      en: "Buyer: 'I want to buy your fridge for ₹6,000 right now for my army mess. I am sending a QR code on WhatsApp. Please open Google Pay, scan this QR code, and enter your UPI PIN. The ₹6,000 will be credited directly into your account.'",
      kn: "ಖರೀದಿದಾರ: 'ನಾನು ನಿಮ್ಮ ಫ್ರಿಜ್ ಅನ್ನು ₹6,000 ಕ್ಕೆ ಖರೀದಿಸುತ್ತಿದ್ದೇನೆ. ನಾನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಒಂದು QR ಕೋಡ್ ಕಳುಹಿಸುತ್ತಿದ್ದೇನೆ. ನಿಮ್ಮ ಗೂಗಲ್ ಪೇ ತೆರೆದು ಈ QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ನಿಮ್ಮ UPI PIN ಹಾಕಿ. ₹6,000 ನಿಮ್ಮ ಖಾತೆಗೆ ಜಮೆಯಾಗುತ್ತದೆ.'",
      hi: "खरीदार: 'मैं आपका फ्रिज ₹6,000 में खरीद रहा हूँ। मैंने व्हाट्सएप पर एक QR कोड भेजा है। गूगल पे खोलें, इसे स्कैन करें और अपना UPI PIN डालें। ₹6,000 आपके खाते में आ जाएंगे।'"
    },
    choices: [
      {
        id: "c1",
        text: {
          en: "Scan the QR code and enter UPI PIN since buyer said money will be credited",
          kn: "ಹಣ ಬರುತ್ತದೆ ಎಂದು ಖರೀದಿದಾರ ಹೇಳಿದ್ದರಿಂದ QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ UPI PIN ನಮೂದಿಸುತ್ತೇನೆ",
          hi: "पैसे आने की उम्मीद में QR कोड स्कैन करके अपना UPI PIN डाल दूंगा"
        },
        points: -10,
        isSafe: false,
        feedback: {
          en: "TRAPPED! Entering your UPI PIN ALWAYS transfers money OUT of your bank account. ₹6,000 will be deducted instantly from you, not credited!",
          kn: "ಮೋಸ ಹೋದಿರಿ! UPI PIN ನಮೂದಿಸುವುದರಿಂದ ಹಣ ಖಾತೆಯಿಂದ ಕಡಿತಗೊಳ್ಳುತ್ತದೆಯೇ ಹೊರತು ಹಣ ಬರುವುದಿಲ್ಲ. ನಿಮ್ಮ ಖಾತೆಯಿಂದ ₹6,000 ತಕ್ಷಣ ಕಡಿತವಾಗುತ್ತದೆ!",
          hi: "धोखा हो गया! UPI PIN डालते ही पैसे कटते हैं, आते नहीं। आपके खाते से तुरंत ₹6,000 कट जाएंगे!"
        }
      },
      {
        id: "c2",
        text: {
          en: "Refuse to scan QR. Tell him: 'You don't need PIN or QR to receive money. Send directly to my UPI ID or pay cash on pickup.'",
          kn: "QR ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ನಿರಾಕರಿಸಿ: 'ಹಣ ಪಡೆಯಲು QR ಅಥವಾ PIN ಬೇಡ. ಕೇವಲ ನನ್ನ UPI ID ಗೆ ಕಳುಹಿಸಿ ಅಥವಾ ಖುದ್ದಾಗಿ ಬಂದು ನಗದು ನೀಡಿ' ಎನ್ನುತ್ತೇನೆ",
          hi: "स्कैन करने से मना करूँगा और कहूँगा: 'पैसे पाने के लिए QR या पिन की जरूरत नहीं। सीधे मेरी UPI ID पर भेजो या सामान लेते समय कैश दो।'"
        },
        points: 10,
        isSafe: true,
        feedback: {
          en: "PERFECT! You remembered the fundamental rule of UPI: You NEVER scan QR codes or enter your PIN to receive money.",
          kn: "ಅದ್ಭುತ! ನೀವು UPI ಯ ಮೂಲಭೂತ ನಿಯಮವನ್ನು ಪಾಲಿಸಿದ್ದೀರಿ: ಹಣ ಸ್ವೀಕರಿಸಲು QR ಸ್ಕ್ಯಾನ್ ಮಾಡುವ ಅಥವಾ PIN ಹಾಕುವ ಅಗತ್ಯವೇ ಇರುವುದಿಲ್ಲ.",
          hi: "एकदम सही! आपने UPI का बुनियादी नियम याद रखा: पैसे पाने के लिए कभी QR कोड स्कैन या पिन नहीं डाला जाता।"
        }
      }
    ]
  },
  {
    id: "sim_part_time_job",
    category: "Fake Job Scam",
    title: {
      en: "Scenario 4: 'Earn ₹3,000/day by Liking YouTube Videos'",
      kn: "ಸನ್ನಿವೇಶ ೪: 'ಯೂಟ್ಯೂಬ್ ಲೈಕ್ ಮಾಡಿ ದಿನಕ್ಕೆ ₹3,000 ಗಳಿಸಿ'",
      hi: "परिदृश्य 4: 'यूट्यूब वीडियो लाइक करके रोज ₹3,000 कमाएं'"
    },
    sender: "WhatsApp: Global HR Recruitment",
    simulatedMessage: {
      en: "Message: 'Greetings! Work from home part-time. Just like 3 YouTube video links and subscribe. Send screenshots to earn ₹150 instantly on your GPay. Higher VIP tasks earn up to ₹8,000 daily! Join our Telegram VIP channel now.'",
      kn: "ಮೆಸೇಜ್: 'ಶುಭಾಶಯಗಳು! ಮನೆಯಲ್ಲೇ ಪಾರ್ಟ್ ಟೈಮ್ ಕೆಲಸ. ಕೇವಲ 3 ಯೂಟ್ಯೂಬ್ ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿದರೆ ₹150 ಜಮೆ ಮಾಡುತ್ತೇವೆ. ವಿಐಪಿ ಟಾಸ್ಕ್‌ಗಳಿಗೆ ದಿನಕ್ಕೆ ₹8,000 ಗಳಿಸಬಹುದು! ನಮ್ಮ ಟೆಲಿಗ್ರಾಂ ಚಾನೆಲ್ ಸೇರಿ.'",
      hi: "मैसेज: 'घर बैठे पार्ट-टाइम काम। सिर्फ 3 यूट्यूब वीडियो लाइक करके स्क्रीनशॉट भेजें और ₹150 पाएं। VIP टास्क से रोज ₹8,000 तक कमाएं! अभी टेलीग्राम चैनल से जुड़ें।'"
    },
    choices: [
      {
        id: "c1",
        text: {
          en: "Accept the ₹150 reward, then invest ₹2,000 in the Telegram VIP task to earn ₹5,000 as promised",
          kn: "ಮೊದಲ ₹150 ಪಡೆದುಕೊಂಡು, ನಂತರ ₹5,000 ಲಾಭಕ್ಕಾಗಿ ಟೆಲಿಗ್ರಾಂ ಟಾಸ್ಕ್‌ನಲ್ಲಿ ₹2,000 ಹೂಡಿಕೆ ಮಾಡುತ್ತೇನೆ",
          hi: "पहले ₹150 ले लूँगा, फिर ₹5,000 कमाने के लिए टेलीग्राम VIP टास्क में ₹2,000 जमा कर दूंगा"
        },
        points: -10,
        isSafe: false,
        feedback: {
          en: "TRAPPED IN TASK FRAUD! The initial ₹150 is psychological bait. Once you deposit ₹2,000, they will freeze it and demand ₹10,000, then ₹50,000 to unlock your 'profit' until you lose everything.",
          kn: "ಟಾಸ್ಕ್ ವಂಚನೆಯ ಬಲೆಗೆ ಬಿದ್ದಿರಿ! ಮೊದಲ ₹150 ಕೇವಲ ನಂಬಿಕೆ ಹುಟ್ಟಿಸಲು ನೀಡುವ ಆಮಿಷ. ಒಮ್ಮೆ ನೀವು ₹2,000 ಡೆಪಾಸಿಟ್ ಮಾಡಿದರೆ, ಅದನ್ನು ವಾಪಸ್ ಪಡೆಯಲು ಮತ್ತಷ್ಟು ಹಣ ಕೇಳಿ ನಿಮ್ಮನ್ನು ಲೂಟಿ ಮಾಡುತ್ತಾರೆ.",
          hi: "आप जाल में फंस गए! शुरुआती ₹150 सिर्फ लालच था। ₹2,000 जमा करते ही वे और पैसे मांगेंगे और सब हड़प लेंगे।"
        }
      },
      {
        id: "c2",
        text: {
          en: "Ignore, block, and report the message on WhatsApp. Real companies never hire or pay via unsolicited chats",
          kn: "ಮೆಸೇಜ್ ಅನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ, ಬ್ಲಾಕ್ ಮಾಡಿ ರಿಪೋರ್ಟ್ ಮಾಡುತ್ತೇನೆ. ನೈಜ ಕಂಪನಿಗಳು ವಾಟ್ಸಾಪ್ ಮೆಸೇಜ್ ಮೂಲಕ ಹೀಗೆ ನೇಮಕಾತಿ ಮಾಡುವುದಿಲ್ಲ",
          hi: "मैसेज को इग्नोर करके तुरंत ब्लॉक और रिपोर्ट करूँगा। असली कंपनियां व्हाट्सएप पर ऐसे भर्ती नहीं करतीं"
        },
        points: 10,
        isSafe: true,
        feedback: {
          en: "SMART ACTION! Task scams have robbed Indians of thousands of crores. Never engage with unsolicited work-from-home offers on messaging apps.",
          kn: "ಬುದ್ಧಿವಂತ ನಿರ್ಧಾರ! ಇಂತಹ ಟಾಸ್ಕ್ ವಂಚನೆಗಳು ಸಾವಿರಾರು ಕೋಟಿ ರೂಪಾಯಿ ವಂಚಿಸಿವೆ. ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬರುವ ಇಂತಹ ಸಂದೇಶಗಳನ್ನು ತಕ್ಷಣ ಬ್ಲಾಕ್ ಮಾಡುವುದೇ ಸರಿ.",
          hi: "होशियार फैसला! ऐसे फर्जी टास्क से लोगों के करोड़ों रुपये डूबे हैं। अनजान नंबरों से आए ऐसे मैसेज को तुरंत ब्लॉक करें।"
        }
      }
    ]
  },
  {
    id: "sim_friend_help",
    category: "Social Media Impersonation",
    title: {
      en: "Scenario 5: Emergency Money Request from Friend's Instagram",
      kn: "ಸನ್ನಿವೇಶ ೫: ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ಸ್ನೇಹಿತನ ಹೆಸರಿನಿಂದ ತುರ್ತು ಹಣದ ಬೇಡಿಕೆ",
      hi: "परिदृश्य 5: इंस्टाग्राम पर दोस्त के नाम से अचानक इमरजेंसी में पैसे मांगना"
    },
    sender: "Instagram DM: @rahul_sharma_99",
    simulatedMessage: {
      en: "DM: 'Bro, huge emergency! My mother met with an accident and hospital counter is refusing to admit without ₹15,000 deposit. My UPI daily limit is reached. Can you please immediately Google Pay ₹15,000 to this hospital doctor number 9789xxxxxx? I will return it by tomorrow 10 AM without fail!'",
      kn: "ಮೆಸೇಜ್: 'ಗೆಳೆಯಾ, ದೊಡ್ಡ ಎಮರ್ಜೆನ್ಸಿ! ಅಮ್ಮನಿಗೆ ಅಪಘಾತವಾಗಿದೆ, ₹15,000 ಡೆಪಾಸಿಟ್ ಇಲ್ಲದೆ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ದಾಖಲಿಸಿಕೊಳ್ಳುತ್ತಿಲ್ಲ. ನನ್ನ UPI ಲಿಮಿಟ್ ಮುಗಿದಿದೆ. ದಯವಿಟ್ಟು ಈ ನಂಬರ್‌ಗೆ ₹15,000 ಗೂಗಲ್ ಪೇ ಮಾಡು, ನಾಳೆ ಬೆಳಗ್ಗೆ 10 ಕ್ಕೆ ಖಚಿತವಾಗಿ ವಾಪಸ್ ಕೊಡುತ್ತೇನೆ!'",
      hi: "मैसेज: 'भाई, बहुत बड़ी इमरजेंसी है! मां का एक्सीडेंट हो गया है और अस्पताल ₹15,000 मांग रहा है। मेरी UPI लिमिट खत्म हो गई है। कृपया तुरंत इस नंबर पर ₹15,000 ट्रांसफर कर दे, मैं कल सुबह 10 बजे लौटा दूंगा!'"
    },
    choices: [
      {
        id: "c1",
        text: {
          en: "Immediately send ₹15,000 to the unknown number because it's a friend's mother",
          kn: "ಸ್ನೇಹಿತನ ತಾಯಿಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಎಂದು ತಕ್ಷಣವೇ ಆ ಅಪರಿಚಿತ ನಂಬರ್‌ಗೆ ₹15,000 ಕಳುಹಿಸುತ್ತೇನೆ",
          hi: "दोस्त की मां का मामला सोचकर बिना सोचे तुरंत उस नंबर पर ₹15,000 भेज दूंगा"
        },
        points: -10,
        isSafe: false,
        feedback: {
          en: "DISASTER! Your friend's Instagram profile was hacked or cloned. Always pick up the regular phone and voice-call your friend to verify before sending any money!",
          kn: "ಮೋಸ ಹೋದಿರಿ! ನಿಮ್ಮ ಸ್ನೇಹಿತನ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಖಾತೆ ಹ್ಯಾಕ್ ಆಗಿದೆ. ಹಣ ಕಳುಹಿಸುವ ಮುನ್ನ ಸ್ನೇಹಿತನ ನೈಜ ಫೋನ್ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ಮಾತನಾಡದೆ ಹಣ ಕಳುಹಿಸಬಾರದು!",
          hi: "धोखा हो गया! आपके दोस्त का अकाउंट हैक हो चुका था। कभी भी सोशल मीडिया चैट देखकर पैसे न भेजें, पहले सीधे फोन लगाकर बात करें!"
        }
      },
      {
        id: "c2",
        text: {
          en: "Do not send money via DM. Call Rahul directly on his verified mobile phone to confirm",
          kn: "ಮೆಸೇಜ್ ನೋಡಿ ಹಣ ಕಳುಹಿಸದೆ, ರಾಹುಲ್‌ನ ನಿಜವಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ ವಿಚಾರಿಸುತ್ತೇನೆ",
          hi: "चैट पर पैसे नहीं भेजूंगा, सीधे राहुल के असली मोबाइल नंबर पर फोन करके पुष्टि करूंगा"
        },
        points: 10,
        isSafe: true,
        feedback: {
          en: "100% CORRECT! When you call him on voice call, you will find out his account was hijacked and his mother is safe at home. You just saved ₹15,000!",
          kn: "ಶೇ.100 ರಷ್ಟು ಸರಿ! ಫೋನ್ ಕರೆ ಮಾಡಿದಾಗ ಆತನ ಖಾತೆ ಹ್ಯಾಕ್ ಆಗಿರುವುದು ಮತ್ತು ತಾಯಿ ಮನೆಯಲ್ಲೇ ಆರಾಮಾಗಿರುವುದು ತಿಳಿಯುತ್ತದೆ. ನಿಮ್ಮ ₹15,000 ಉಳಿಯಿತು!",
          hi: "बिल्कुल सही! फोन करने पर पता चलेगा कि दोस्त का अकाउंट हैक हुआ है और मां बिल्कुल ठीक हैं। आपने अपने ₹15,000 बचा लिए!"
        }
      }
    ]
  }
];
