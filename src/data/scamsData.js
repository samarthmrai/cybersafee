// Scams Data for Learn Section: Phishing, UPI/OTP, Fake Jobs, Digital Arrest, QR Scams, Social Media
window.CYBER_SCAMS_DATA = [
  {
    id: "phishing",
    icon: "🎣",
    title: {
      en: "Phishing Scams (Fake Messages & Links)",
      kn: "ಫಿಶಿಂಗ್ ವಂಚನೆಗಳು (ನಕಲಿ ಸಂದೇಶಗಳು ಮತ್ತು ಲಿಂಕ್‌ಗಳು)",
      hi: "फ़िशिंग घोटाले (नकली संदेश और लिंक)"
    },
    shortDesc: {
      en: "Deceptive SMS, emails, or WhatsApp messages claiming your electricity will be cut or bank account is blocked.",
      kn: "ವಿದ್ಯುತ್ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ ಅಥವಾ ಬ್ಯಾಂಕ್ ಖಾತೆ ಬ್ಲಾಕ್ ಆಗಿದೆ ಎಂದು ಹೆದರಿಸಿ ಕಳುಹಿಸುವ ನಕಲಿ ಮೆಸೇಜ್‌ಗಳು.",
      hi: "धोखेबाज SMS या व्हाट्सएप संदेश जिनमें बिजली कटने या बैंक खाता बंद होने का डर दिखाया जाता है।"
    },
    realScenario: {
      en: "A senior citizen receives an SMS: 'Dear consumer, your electricity will be disconnected tonight at 9:30 PM due to unpaid bill. Call officer at 98xxxxxx immediately or download bill update app.' The caller asks them to install a quick-support app and pay ₹10. Within minutes, ₹1,50,000 is wiped out from their bank account.",
      kn: "ಒಬ್ಬ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ SMS ಬರುತ್ತದೆ: 'ಗ್ರಾಹಕರೇ, ನಿಮ್ಮ ಹಿಂದಿನ ತಿಂಗಳ ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಯಾಗದ ಕಾರಣ ಇಂದು ರಾತ್ರಿ 9:30 ಕ್ಕೆ ವಿದ್ಯುತ್ ಕಡಿತಗೊಳಿಸಲಾಗುವುದು. ತಕ್ಷಣವೇ ಈ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ.' ಆ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿದಾಗ ಒಂದು ಲಿಂಕ್ ಕಳುಹಿಸಿ ₹10 ಪಾವತಿಸಲು ಹೇಳಲಾಗುತ್ತದೆ. ಕೆಲವೇ ನಿಮಿಷಗಳಲ್ಲಿ ಅವರ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ₹1,50,000 ಹಣ ಮಾಯವಾಗುತ್ತದೆ.",
      hi: "एक नागरिक को SMS आता है: 'प्रिय ग्राहक, बिजली बिल जमा न होने के कारण आज रात 9:30 बजे आपकी बिजली काट दी जाएगी। तुरंत अधिकारी से 98xxxxxx पर संपर्क करें।' कॉल करने पर उन्हें ₹10 का रीचार्ज करने को कहा जाता है और लिंक भेजकर स्क्रीन शेयर कराते ही बैंक से ₹1.5 लाख कट जाते हैं।"
    },
    redFlags: {
      en: [
        "Urgent deadlines ('disconnected in 2 hours', 'account suspended immediately')",
        "Sent from random mobile numbers (+91-9xxxxxx) instead of official sender IDs (like BESCOM, SBIINB, VZ-HDFCBK)",
        "Contains unofficial shortened links (bit.ly, tinyurl, or suspicious .apk downloads)",
        "Asks you to pay a tiny test amount (₹5 or ₹10) using a provided link"
      ],
      kn: [
        "ತುರ್ತು ಗಡುವು ('2 ಗಂಟೆಗಳಲ್ಲಿ ವಿದ್ಯುತ್ ಕಡಿತ', 'ಖಾತೆ ತಕ್ಷಣ ಬ್ಲಾಕ್')",
        "ಅಧಿಕೃತ ಸಂಸ್ಥೆಯ ಬದಲಿಗೆ ಸಾಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳಿಂದ ಬರುವ ಸಂದೇಶಗಳು",
        "ಅಪರಿಚಿತ ಲಿಂಕ್‌ಗಳು ಅಥವಾ .apk ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಹೇಳುವುದು",
        "₹5 ಅಥವಾ ₹10 ರ ಸಣ್ಣ ಮೊತ್ತ ಪಾವತಿಸಲು ಹೊಸ ಲಿಂಕ್ ಕಳುಹಿಸುವುದು"
      ],
      hi: [
        "अत्यधिक जल्दबाजी ('2 घंटे में बिजली कटेगी', 'खाता तुरंत सस्पेंड होगा')",
        "आधिकारिक ID के बजाय सामान्य 10 अंकों वाले मोबाइल नंबर से मैसेज आना",
        "अपरिचित छोटे लिंक (bit.ly, tinyurl) या .apk फाइल डाउनलोड करने को कहना",
        "सत्यापन के नाम पर ₹5 या ₹10 का छोटा भुगतान करने के लिए कहना"
      ]
    },
    dosAndDonts: {
      dos: {
        en: [
          "Check unpaid bills only through official apps (Electricity board app, Bank app, PhonePe/GPay)",
          "Directly call the company's official toll-free number from their official website",
          "Report suspicious SMS to 1909 (TRAI DND) and cybercrime.gov.in"
        ],
        kn: [
          "ಬಾಕಿ ಬಿಲ್‌ಗಳನ್ನು ಕೇವಲ ಅಧಿಕೃತ ಆಪ್‌ಗಳು ಅಥವಾ ಕಚೇರಿಯಲ್ಲಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸಿ",
          "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿರುವ ಅಧಿಕೃತ ಟೋಲ್-ಫ್ರೀ ಸಂಖ್ಯೆಗೆ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ",
          "ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶಗಳನ್ನು 1909 ಅಥವಾ cybercrime.gov.in ನಲ್ಲಿ ವರದಿ ಮಾಡಿ"
        ],
        hi: [
          "बिजली या अन्य बिल केवल आधिकारिक ऐप या बिजली विभाग की वेबसाइट पर ही चेक करें",
          "किसी भी समस्या के लिए कंपनी के असली कस्टमर केयर नंबर पर ही बात करें",
          "संदिग्ध संदेशों की शिकायत 1909 और cybercrime.gov.in पर करें"
        ]
      },
      donts: {
        en: [
          "Never click links sent in SMS or WhatsApp claiming bill default or account deactivation",
          "Never install apps like AnyDesk, TeamViewer, or QuickSupport on a caller's instruction",
          "Never share debit/credit card numbers or CVV on any web link sent via message"
        ],
        kn: [
          "SMS ಅಥವಾ WhatsApp ನಲ್ಲಿ ಬರುವ ಯಾವುದೇ ಲಿಂಕ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ",
          "ಕರೆಯಲ್ಲಿ ಯಾರೇ ಹೇಳಿದರೂ AnyDesk, TeamViewer ಮುಂತಾದ ಆಪ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ",
          "ನಿಮ್ಮ ಡೆಬಿಟ್/ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ನಂಬರ್ ಅಥವಾ CVV ಅನ್ನು ಯಾವುದೇ ಲಿಂಕ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಡಿ"
        ],
        hi: [
          "SMS या व्हाट्सएप में आए किसी भी लिंक पर कभी क्लिक न करें",
          "अज्ञात कॉलर के कहने पर कभी भी AnyDesk या TeamViewer जैसा ऐप इंस्टॉल न करें",
          "मैसेज में आए किसी भी फॉर्म में अपना कार्ड नंबर, पिन या CVV न भरें"
        ]
      }
    }
  },
  {
    id: "upi_otp",
    icon: "📱",
    title: {
      en: "UPI & OTP Fraud (Screen Share & Reverse Payment)",
      kn: "UPI ಮತ್ತು OTP ವಂಚನೆಗಳು (ಸ್ಕ್ರೀನ್ ಶೇರ್ ಮತ್ತು ರಿವರ್ಸ್ ಪೇಮೆಂಟ್)",
      hi: "UPI और OTP फ्रॉड (स्क्रीन शेयर और पिन स्कैम)"
    },
    shortDesc: {
      en: "Tricking you into entering your UPI PIN to 'receive' money, or sharing an OTP that drains your funds.",
      kn: "ಹಣ 'ಪಡೆಯಲು' UPI PIN ಹಾಕಿ ಎಂದು ಮೋಸ ಮಾಡುವುದು ಅಥವಾ ನಿಮ್ಮ OTP ಪಡೆದು ಹಣ ಕದಿಯುವುದು.",
      hi: "पैसे 'पाने' के बहाने आपसे UPI PIN डलवाना या OTP पूछकर खाता खाली कर देना।"
    },
    realScenario: {
      en: "You put up a sofa for sale on OLX for ₹8,000. An 'army officer' buyer calls, immediately agrees without bargaining, and says: 'I will pay you on Google Pay right now. I sent a collect request, just enter your UPI PIN to accept ₹8,000.' As soon as you enter your UPI PIN, ₹8,000 is DEDUCTED from your account instead!",
      kn: "ನೀವು OLX ನಲ್ಲಿ ಹಳೆಯ ಸೋಫಾವನ್ನು ₹8,000 ಕ್ಕೆ ಮಾರಾಟಕ್ಕಿಡುತ್ತೀರಿ. ಒಬ್ಬ 'ಸೇನಾ ಅಧಿಕಾರಿ' ಕರೆ ಮಾಡಿ, ಚೌಕಾಸಿ ಮಾಡದೆ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾನೆ: 'ನಾನು ಗೂಗಲ್ ಪೇ ಮೂಲಕ ಹಣ ಕಳುಹಿಸುತ್ತಿದ್ದೇನೆ, ನೀವು ಕೇವಲ UPI PIN ನಮೂದಿಸಿ ₹8,000 ಸ್ವೀಕರಿಸಿ.' ನೀವು UPI PIN ಹಾಕಿದ ತಕ್ಷಣ, ನಿಮ್ಮ ಖಾತೆಯಿಂದಲೇ ₹8,000 ಹಣ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ!",
      hi: "आपने OLX पर ₹8,000 का सामान बेचने के लिए डाला। एक खरीदार ने कहा: 'मैं आर्मी में हूँ, तुरंत पैसे भेज रहा हूँ। मैंने रिक्वेस्ट भेजी है, बस अपना UPI PIN डालकर ₹8,000 स्वीकार कर लें।' जैसे ही आपने पिन डाला, पैसे आने के बजाय आपके खाते से कट गए!"
    },
    redFlags: {
      en: [
        "Buyer claims to be an Army/CISF officer with a fake ID card photo on WhatsApp",
        "Buyer sends a 'Payment Collect Request' on PhonePe/GooglePay instead of sending money",
        "Caller insists: 'Enter PIN to receive money in your account'",
        "Caller asks for OTP claiming it is needed for 'KYC verification' or 'refund release'"
      ],
      kn: [
        "ಖರೀದಿದಾರನು ಸೇನಾ ಅಧಿಕಾರಿಯ ನಕಲಿ ಗುರುತಿನ ಚೀಟಿ ತೋರಿಸಿ ನಂಬಿಸಲು ಯತ್ನಿಸುವುದು",
        "ಹಣ ಕಳುಹಿಸುವ ಬದಲು 'Collect Request' ಕಳುಹಿಸಿ PIN ಹಾಕಲು ಹೇಳುವುದು",
        "'ಖಾತೆಗೆ ಹಣ ಬರಬೇಕಾದರೆ ನೀವು PIN ಹಾಕಲೇಬೇಕು' ಎಂದು ಒತ್ತಾಯಿಸುವುದು",
        "'KYC ಪರಿಶೀಲನೆ' ಅಥವಾ 'ಹಣ ಮರುಪಾವತಿ' ಹೆಸರಿನಲ್ಲಿ OTP ಕೇಳುವುದು"
      ],
      hi: [
        "खरीदार का सेना/सुरक्षा बल का फर्जी पहचान पत्र व्हाट्सएप पर दिखाना",
        "पैसे भेजने के बजाय PhonePe/GPay पर 'Pay/Collect Request' भेजना",
        "कॉलर का जोर देना: 'खाते में पैसे पाने के लिए आपको पिन डालना ही पड़ेगा'",
        "'KYC सत्यापन' या 'रिफंड' के नाम पर बैंक से आया OTP मांगना"
      ]
    },
    dosAndDonts: {
      dos: {
        en: [
          "Remember the absolute golden rule: UPI PIN is ONLY entered to SEND money, NEVER to receive money!",
          "Check your bank balance directly in your UPI app without clicking any notification links",
          "Immediately block and report numbers sending fraudulent collect requests"
        ],
        kn: [
          "ಸುವರ್ಣ ನಿಯಮವನ್ನು ನೆನಪಿಡಿ: UPI PIN ಅನ್ನು ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ ನಮೂದಿಸಲಾಗುತ್ತದೆ, ಹಣ ಸ್ವೀಕರಿಸಲು ಎಂದಿಗೂ ಅಲ್ಲ!",
          "ನಿಮ್ಮ ಖಾತೆಯ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು ಅಧಿಕೃತ ಬ್ಯಾಂಕಿಂಗ್ ಆಪ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿ",
          "ಅನುಮಾನಾಸ್ಪದ ನಂಬರ್‌ಗಳನ್ನು ತಕ್ಷಣವೇ ಬ್ಲಾಕ್ ಮಾಡಿ ಮತ್ತು ವರದಿ ಮಾಡಿ"
        ],
        hi: [
          "यह सुनहरा नियम याद रखें: UPI PIN हमेशा पैसे भेजने के लिए डाला जाता है, पाने के लिए कभी नहीं!",
          "पैसे आए या नहीं, यह सीधे अपने ऐप में जाकर बैलेंस चेक करके देखें",
          "धोखाधड़ी वाले रिक्वेस्ट भेजने वाले नंबर को तुरंत ब्लॉक करें"
        ]
      },
      donts: {
        en: [
          "NEVER enter your UPI PIN to claim prizes, cashback, refunds, or customer payments",
          "NEVER share your OTP with anyone, including bank managers, police, or delivery agents",
          "NEVER accept incoming screen sharing calls while opening your banking or UPI app"
        ],
        kn: [
          "ಯಾವುದೇ ಬಹುಮಾನ, ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್ ಅಥವಾ ಗ್ರಾಹಕರ ಪಾವತಿ ಪಡೆಯಲು UPI PIN ನಮೂದಿಸಬೇಡಿ",
          "ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್ ಅಥವಾ ಡೆಲಿವರಿ ಬಾಯ್ ಯಾರೇ ಕೇಳಿದರೂ OTP ಹಂಚಿಕೊಳ್ಳಬೇಡಿ",
          "ಬ್ಯಾಂಕಿಂಗ್ ಆಪ್ ತೆರೆಯುವಾಗ ಯಾರೊಂದಿಗೂ ಸ್ಕ್ರೀನ್ ಶೇರಿಂಗ್ ಮಾಡಬೇಡಿ"
        ],
        hi: [
          "रिफंड, कैशबैक या लॉटरी पाने के लिए कभी भी अपना UPI PIN न डालें",
          "बैंक कर्मचारी, डिलीवरी बॉय या किसी भी अनजान व्यक्ति को अपना OTP न बताएं",
          "बैंकिंग ऐप का इस्तेमाल करते समय कभी स्क्रीन शेयर न करें"
        ]
      }
    }
  },
  {
    id: "fake_jobs",
    icon: "💼",
    title: {
      en: "Fake Part-Time Job Scams (Telegram / YouTube Task Fraud)",
      kn: "ನಕಲಿ ಅರೆಕಾಲಿಕ ಉದ್ಯೋಗ ವಂಚನೆಗಳು (ಟೆಲಿಗ್ರಾಂ / ಯೂಟ್ಯೂಬ್ ಟಾಸ್ಕ್ ವಂಚನೆ)",
      hi: "फर्जी पार्ट-टाइम नौकरी घोटाले (टेलीग्राम / यूट्यूब टास्क फ्रॉड)"
    },
    shortDesc: {
      en: "Offers to earn ₹2,000-₹5,000 per day by simply liking YouTube videos or rating hotels, ending in massive extortion.",
      kn: "ಯೂಟ್ಯೂಬ್ ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಿ ಅಥವಾ ಹೋಟೆಲ್ ರೇಟಿಂಗ್ ನೀಡಿ ದಿನಕ್ಕೆ ₹2,000-₹5,000 ಗಳಿಸಿ ಎಂದು ನಂಬಿಸಿ ಲಕ್ಷಾಂತರ ರೂಪಾಯಿ ಲೂಟಿ ಮಾಡುವುದು.",
      hi: "यूट्यूब वीडियो लाइक करने या होटल रेटिंग देने पर रोजाना ₹2,000-₹5,000 कमाने का झांसा देकर लाखों की ठगी।"
    },
    realScenario: {
      en: "A college student or housewife receives a WhatsApp message: 'Earn ₹3,000/day part-time from home. Just like 3 YouTube videos and send screenshot.' Initially, the scammer transfers ₹150 to their UPI to build trust. Then they are added to a Telegram group and asked to 'invest' ₹5,000 in crypto/task prepaid account to unlock ₹10,000 profit. Step by step, the victim is trapped into paying ₹3,00,000 before the group disappears.",
      kn: "ವಿದ್ಯಾರ್ಥಿ ಅಥವಾ ಗೃಹಿಣಿಗೆ WhatsApp ಸಂದೇಶ ಬರುತ್ತದೆ: 'ಮನೆಯಲ್ಲೇ ಕುಳಿತು ದಿನಕ್ಕೆ ₹3,000 ಗಳಿಸಿ. ಕೇವಲ 3 ಯೂಟ್ಯೂಬ್ ವಿಡಿಯೋಗಳನ್ನು ಲೈಕ್ ಮಾಡಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ.' ನಂಬಿಕೆ ಹುಟ್ಟಿಸಲು ಆರಂಭದಲ್ಲಿ ವಂಚಕರು ₹150 ಜಮೆ ಮಾಡುತ್ತಾರೆ. ನಂತರ ಟೆಲಿಗ್ರಾಂ ಗ್ರೂಪ್‌ಗೆ ಸೇರಿಸಿ, ದೊಡ್ಡ ಲಾಭಕ್ಕಾಗಿ ₹5,000 'ಹೂಡಿಕೆ' ಮಾಡಲು ಹೇಳುತ್ತಾರೆ. ಹೀಗೆ ಹಂತ ಹಂತವಾಗಿ ₹3,00,000 ಪಡೆದು ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸುತ್ತಾರೆ.",
      hi: "एक छात्र को संदेश मिला: 'घर बैठे पार्ट-टाइम काम करके रोज ₹3,000 कमाएं। बस यूट्यूब वीडियो लाइक करें।' विश्वास जीतने के लिए पहले ₹200 खाते में भेजते हैं। फिर टेलीग्राम ग्रुप में जोड़कर 'टास्क इन्वेस्टमेंट' के नाम पर पैसे जमा करवाते हैं और लाखों रुपये हड़प कर ब्लॉक कर देते हैं।"
    },
    redFlags: {
      en: [
        "Unsolicited job offer received on WhatsApp or Telegram without any application or interview",
        "Absurdly high pay for effortless tasks (e.g., ₹5,000/day for liking videos or writing fake reviews)",
        "Demanding a 'registration fee', 'training deposit', or 'prepaid task investment' to withdraw earned money",
        "Communication conducted strictly through Telegram groups with fake profit screenshots from other 'members'"
      ],
      kn: [
        "ನೀವು ಯಾವುದೇ ಅರ್ಜಿ ಹಾಕದಿದ್ದರೂ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಟೆಲಿಗ್ರಾಂನಲ್ಲಿ ಕೆಲಸದ ಆಫರ್ ಬರುವುದು",
        "ಕೇವಲ ಲೈಕ್ ಮಾಡಲು ದಿನಕ್ಕೆ ₹3,000-₹5,000 ಕೊಡುವ ಅಸಾಧ್ಯ ಆಮಿಷಗಳು",
        "ಗಳಿಸಿದ ಹಣವನ್ನು ಹಿಂಪಡೆಯಲು ನೀವೇ ಮೊದಲು 'ನೋಂದಣಿ ಶುಲ್ಕ' ಅಥವಾ 'ಟಾಸ್ಕ್ ಡೆಪಾಸಿಟ್' ಪಾವತಿಸಬೇಕೆಂದು ಹೇಳುವುದು",
        "ಟೆಲಿಗ್ರಾಂನಲ್ಲಿ ನಕಲಿ ಸದಸ್ಯರು ಲಾಭದ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಹಾಕಿ ನಿಮ್ಮನ್ನು ಪ್ರಚೋದಿಸುವುದು"
      ],
      hi: [
        "बिना किसी इंटरव्यू या आवेदन के व्हाट्सएप/टेलीग्राम पर नौकरी का ऑफर आना",
        "सिर्फ वीडियो लाइक करने के लिए ₹3,000 से ₹5,000 रोजाना देने का झूठा वादा",
        "कमाए पैसे निकालने के लिए पहले 'सिक्योरिटी फीस' या 'टास्क डिपॉजिट' मांगना",
        "बातचीत केवल टेलीग्राम पर करना और फर्जी स्क्रीनशॉट दिखाकर लालच देना"
      ]
    },
    dosAndDonts: {
      dos: {
        en: [
          "Apply for jobs only on verified career portals (NCS.gov.in, official company career pages, LinkedIn)",
          "Remember: Real companies pay employees for work; legitimate jobs NEVER ask employees to deposit money!",
          "Report and block unknown international or local numbers offering work-from-home tasks"
        ],
        kn: [
          "ಅಧಿಕೃತ ಉದ್ಯೋಗ ಪೋರ್ಟಲ್‌ಗಳು (NCS.gov.in, ಅಧಿಕೃತ ಕಂಪನಿ ವೆಬ್‌ಸೈಟ್‌ಗಳು) ಮೂಲಕ ಮಾತ್ರ ಉದ್ಯೋಗಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
          "ನೆನಪಿಡಿ: ನೈಜ ಕಂಪನಿಗಳು ಕೆಲಸಕ್ಕೆ ಸಂಬಳ ನೀಡುತ್ತವೆ; ಹಣ ಡೆಪಾಸಿಟ್ ಮಾಡಲು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ!",
          "ಮನೆಯಿಂದಲೇ ಕೆಲಸ ಎಂದು ಆಮಿಷವೊಡ್ಡುವ ಅಪರಿಚಿತ ನಂಬರ್‌ಗಳನ್ನು ತಕ್ಷಣವೇ ವರದಿ ಮಾಡಿ ಬ್ಲಾಕ್ ಮಾಡಿ"
        ],
        hi: [
          "नौकरी के लिए हमेशा आधिकारिक वेबसाइट्स या सरकारी पोर्टल (ncs.gov.in) का उपयोग करें",
          "याद रखें: असली नौकरी में काम के बदले पैसे मिलते हैं, कभी नौकरी के नाम पर पैसे मांगे नहीं जाते!",
          "टेलीग्राम या व्हाट्सएप पर आए ऐसे मैसेज को तुरंत रिपोर्ट और ब्लॉक करें"
        ]
      },
      donts: {
        en: [
          "NEVER pay any 'security deposit', 'processing fee', or 'task level upgrade' to get a job",
          "Do not be fooled by small initial payouts (₹100-₹200); they are bait to trap your life savings",
          "NEVER add your bank account to anonymous investment portals or crypto task websites"
        ],
        kn: [
          "ಕೆಲಸಕ್ಕಾಗಿ ಯಾವುದೇ 'ಸೆಕ್ಯೂರಿಟಿ ಡೆಪಾಸಿಟ್' ಅಥವಾ 'ಪ್ರೊಸೆಸಿಂಗ್ ಶುಲ್ಕ' ಪಾವತಿಸಬೇಡಿ",
          "ಆರಂಭದಲ್ಲಿ ನೀಡುವ ₹100-₹200 ರ ಸಣ್ಣ ಹಣಕ್ಕೆ ಮರುಳಾಗಬೇಡಿ; ಅದು ದೊಡ್ಡ ಬಲೆ",
          "ಅಪರಿಚಿತ ಟಾಸ್ಕ್ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಗೆ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ನೀಡಬೇಡಿ"
        ],
        hi: [
          "नौकरी पाने या पैसे निकालने के लिए कभी कोई शुल्क न दें",
          "शुरुआत में मिलने वाले ₹100-₹200 के लालच में न आएं, यह फंसाने का चारा है",
          "अज्ञात वेबसाइटों पर अपने बैंक खाते की जानकारी कभी दर्ज न करें"
        ]
      }
    }
  },
  {
    id: "digital_arrest",
    icon: "⚖️",
    title: {
      en: "Digital Arrest Scams (Fake Police, ED & CBI Video Calls)",
      kn: "ಡಿಜಿಟಲ್ ಬಂಧನ ವಂಚನೆಗಳು (ನಕಲಿ ಪೊಲೀಸ್, ED ಮತ್ತು CBI ವಿಡಿಯೋ ಕಾಲ್)",
      hi: "डिजिटल अरेस्ट घोटाले (नकली पुलिस, ED और CBI वीडियो कॉल)"
    },
    shortDesc: {
      en: "Scammers pose as Police, Telecom Regulatory Authority, or CBI over Skype/WhatsApp video claiming illegal parcels or money laundering.",
      kn: "ಪೊಲೀಸ್, CBI ಅಥವಾ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಹೆಸರಿನಲ್ಲಿ ವಿಡಿಯೋ ಕರೆ ಮಾಡಿ, ನಿಮ್ಮ ಹೆಸರಿನಲ್ಲಿ ಡ್ರಗ್ಸ್ ಪಾರ್ಸೆಲ್ ಸಿಕ್ಕಿದೆ ಎಂದು ಹೆದರಿಸಿ ಹಣ ವಸೂಲಿ ಮಾಡುವುದು.",
      hi: "पुलिस या CBI अफसर बनकर वीडियो कॉल पर डराना कि आपके नाम पर ड्रग्स पार्सल पकड़ा गया है और 'डिजिटल अरेस्ट' कर पैसे ऐंठना।"
    },
    realScenario: {
      en: "A victim receives a call: 'Your mobile number will be disconnected in 2 hours by Telecom department because an illegal parcel with drugs and passports was intercepted in Mumbai under your Aadhaar.' The call transfers to a man in police uniform sitting in a room with police logos via Skype. The 'officer' shows fake arrest warrants and Supreme Court stamps, ordering the victim not to disconnect or tell anyone. He demands ₹5,00,000 for 'financial verification' to a government clearance account.",
      kn: "ವ್ಯಕ್ತಿಯೊಬ್ಬರಿಗೆ ಕರೆ ಬರುತ್ತದೆ: 'ನಿಮ್ಮ ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ ಮುಂಬೈನಲ್ಲಿ ಮಾದಕ ದ್ರವ್ಯ (ಡ್ರಗ್ಸ್) ತುಂಬಿದ ಪಾರ್ಸೆಲ್ ಪತ್ತೆಯಾಗಿದೆ, 2 ಗಂಟೆಯಲ್ಲಿ ನಿಮ್ಮ ಸಿಮ್ ಬ್ಲಾಕ್ ಆಗಲಿದೆ.' ನಂತರ ಕರೆಯನ್ನು ಸ್ಕೈಪ್ ಮೂಲಕ ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರ ಧರಿಸಿದ ವ್ಯಕ್ತಿಗೆ ವರ್ಗಾಯಿಸಲಾಗುತ್ತದೆ. ಆತ ನಕಲಿ ಅರೆಸ್ಟ್ ವಾರೆಂಟ್ ತೋರಿಸಿ, 'ನೀವು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್‌ನಲ್ಲಿದ್ದೀರಿ, ಮನೆಯಿಂದ ಹೊರಹೋಗುವಂತಿಲ್ಲ' ಎಂದು ಹೆದರಿಸಿ, 'ವೆರಿಫಿಕೇಶನ್' ಹೆಸರಿನಲ್ಲಿ ₹5 ಲಕ್ಷವನ್ನು ಖಾತೆಗೆ ಹಾಕಿಸಿಕೊಳ್ಳುತ್ತಾನೆ.",
      hi: "एक नागरिक को कॉल आता है: 'टेलीकॉम विभाग से बोल रहे हैं, आपके आधार कार्ड पर एक पार्सल मिला है जिसमें नशीली दवाएं हैं।' फिर स्काइप वीडियो कॉल पर पुलिस की वर्दी पहने एक नकली अफसर नकली वारंट दिखाता है और कहता है कि 'आप डिजिटल अरेस्ट हैं, किसी को न बताएं।' और खाते की जांच के नाम पर लाखों रुपये अपने खाते में ट्रांसफर करवा लेता है।"
    },
    redFlags: {
      en: [
        "Caller claims to be from FedEX, DHL, Telecom (DoT), Mumbai Police, CBI, or ED",
        "Video call on Skype, WhatsApp, or Zoom showing a fake police station backdrop with uniforms",
        "Threatening you with immediate arrest and using the bogus term 'Digital Arrest'",
        "Demanding that you keep the camera on 24/7, not speak to family or lawyers, and transfer funds to a 'RBI verification account'"
      ],
      kn: [
        "ಕೊರಿಯರ್ ಸಂಸ್ಥೆ, ದೂರಸಂಪರ್ಕ ಇಲಾಖೆ, ಮುಂಬೈ ಪೊಲೀಸ್ ಅಥವಾ CBI ಹೆಸರಿನಲ್ಲಿ ಬೆದರಿಕೆ",
        "ಸ್ಕೈಪ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿ ಪೊಲೀಸ್ ಸಮವಸ್ತ್ರ ಮತ್ತು ಲೋಗೋಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವುದು",
        "ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ ಇಲ್ಲದ 'ಡಿಜಿಟಲ್ ಬಂಧನ' (Digital Arrest) ಎಂಬ ಪದವನ್ನು ಬಳಸಿ ಹೆದರಿಸುವುದು",
        "ಯಾರಿಗೂ ಹೇಳಬಾರದು ಎಂದು ಒತ್ತಾಯಿಸಿ 'ಪರಿಶೀಲನೆ' ಹೆಸರಿನಲ್ಲಿ ಹಣ ವರ್ಗಾವಣೆ ಮಾಡಲು ಹೇಳುವುದು"
      ],
      hi: [
        "कुरियर कंपनी, दूरसंचार विभाग, मुंबई पुलिस या CBI के नाम से कॉल आना",
        "स्काइप या व्हाट्सएप वीडियो कॉल पर पुलिस थाने जैसा बैकग्राउंड और वर्दी पहनकर आना",
        "'डिजिटल अरेस्ट' जैसे फर्जी शब्द का उपयोग करके तत्काल जेल भेजने की धमकी देना",
        "कैमरा ऑन रखने को मजबूर करना और 'सुरक्षित सरकारी खाते' के नाम पर पैसे ट्रांसफर मांगना"
      ]
    },
    dosAndDonts: {
      dos: {
        en: [
          "KNOW THE LAW: Indian law has NO provision for 'Digital Arrest' via phone or video call!",
          "Immediately disconnect the call. No legitimate agency interrogates or arrests citizens over Skype or WhatsApp",
          "Immediately report the caller's number to National Cyber Crime helpline 1930 and Chakshu portal on sancharsaathi.gov.in"
        ],
        kn: [
          "ಕಾನೂನು ತಿಳಿಯಿರಿ: ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಬಂಧನ' ಎಂಬ ಯಾವುದೇ ನಿಯಮವಿಲ್ಲ!",
          "ತಕ್ಷಣವೇ ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿ. ಯಾವುದೇ ಪೊಲೀಸ್ ಇಲಾಖೆ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ವಿಚಾರಣೆ ಅಥವಾ ಬಂಧನ ಮಾಡುವುದಿಲ್ಲ",
          "ಆ ಸಂಖ್ಯೆಯನ್ನು ತಕ್ಷಣವೇ 1930 ಸಹಾಯವಾಣಿ ಅಥವಾ sancharsaathi.gov.in ನ ಚಕ್ಷು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ವರದಿ ಮಾಡಿ"
        ],
        hi: [
          "कानून समझें: भारतीय कानून में वीडियो कॉल पर 'डिजिटल अरेस्ट' का कोई प्रावधान नहीं है!",
          "कॉल तुरंत काट दें। कोई भी पुलिस या CBI अधिकारी व्हाट्सएप या स्काइप पर जांच नहीं करता",
          "तुरंत 1930 हेल्पलाइन पर शिकायत करें और sancharsaathi.gov.in के 'चक्षु' पोर्टल पर नंबर रिपोर्ट करें"
        ]
      },
      donts: {
        en: [
          "DO NOT PANIC. Fear and urgency are the scammer's biggest weapons",
          "NEVER transfer money to any bank account claiming to be a 'Supreme Court clearance' or 'RBI safe account'",
          "Never isolate yourself or stay in a room on video call. Alert your family and visit your local police station"
        ],
        kn: [
          "ಹೆದರಬೇಡಿ. ಭಯ ಹುಟ್ಟಿಸುವುದೇ ಇಂತಹ ವಂಚಕರ ಮುಖ್ಯ ಅಸ್ತ್ರ",
          "'RBI ಸುರಕ್ಷಿತ ಖಾತೆ' ಅಥವಾ 'ನ್ಯಾಯಾಲಯದ ಖಾತೆ' ಎಂದು ಹೇಳಿ ನೀಡುವ ಯಾವುದೇ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸಬೇಡಿ",
          "ಕೊಠಡಿಯಲ್ಲಿ ಏಕಾಂಗಿಯಾಗಿ ಇರಬೇಡಿ. ತಕ್ಷಣವೇ ನಿಮ್ಮ ಕುಟುಂಬಸ್ಥರಿಗೆ ತಿಳಿಸಿ ಮತ್ತು ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಭೇಟಿ ನೀಡಿ"
        ],
        hi: [
          "घबराएं बिल्कुल नहीं। डर पैदा करना ही इन ठगों का मुख्य हथियार है",
          "किसी भी तथाकथित 'आरबीआई सुरक्षित खाते' या जांच के नाम पर पैसे ट्रांसफर न करें",
          "अकेले कमरे में बंद न रहें। तुरंत अपने परिवार को बताएं और स्थानीय पुलिस स्टेशन जाएं"
        ]
      }
    }
  },
  {
    id: "qr_scams",
    icon: "📷",
    title: {
      en: "QR Code Payment Scams (Scanning Tricks)",
      kn: "QR ಕೋಡ್ ಪಾವತಿ ವಂಚನೆಗಳು (ಸ್ಕ್ಯಾನಿಂಗ್ ತಂತ್ರಗಳು)",
      hi: "QR कोड पेमेंट फ्रॉड (स्कैनिंग की चालबाजी)"
    },
    shortDesc: {
      en: "Sending you a QR code and asking you to scan it to 'receive prize money, refund, or bill payment'.",
      kn: "ಬಹುಮಾನ ಅಥವಾ ಮರುಪಾವತಿ ಪಡೆಯಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಎಂದು ಮೋಸ ಮಾಡುವುದು.",
      hi: "इनाम, रिफंड या पैसे पाने के लिए QR कोड स्कैन करने का झांसा देकर खाते से पैसे काटना।"
    },
    realScenario: {
      en: "You list a bicycle for sale. A buyer says: 'I am sending a QR code on WhatsApp. Scan this QR code in your PhonePe and enter your PIN, and ₹4,000 will be credited directly to your bank account.' The moment you scan and enter your PIN, ₹4,000 is deducted from your balance.",
      kn: "ನೀವು ಸೈಕಲ್ ಮಾರಾಟ ಮಾಡುತ್ತಿದ್ದೀರಿ. ಗ್ರಾಹಕನೊಬ್ಬ ಹೇಳುತ್ತಾನೆ: 'ನಾನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಒಂದು QR ಕೋಡ್ ಕಳುಹಿಸುತ್ತಿದ್ದೇನೆ. ನಿಮ್ಮ PhonePe ನಲ್ಲಿ ಈ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ PIN ಹಾಕಿದರೆ ₹4,000 ನಿಮ್ಮ ಖಾತೆಗೆ ಜಮೆಯಾಗುತ್ತದೆ.' ನೀವು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ PIN ಹಾಕಿದಾಗ ನಿಮ್ಮ ಖಾತೆಯಿಂದಲೇ ಹಣ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ.",
      hi: "आपने पुराना सामान बेचने के लिए विज्ञापन दिया। खरीदार ने कहा: 'मैं व्हाट्सएप पर QR कोड भेज रहा हूँ। इसे स्कैन करके अपना पिन डालिए, ₹4,000 आपके खाते में आ जाएंगे।' पिन डालते ही आपके खाते से ₹4,000 कट गए।"
    },
    redFlags: {
      en: [
        "Anyone who tells you to scan a QR code to RECEIVE money",
        "QR codes received via WhatsApp or printed stickers pasted on top of genuine merchant QR codes at shops",
        "Promised 'scratch cards' or 'lottery cashback' on WhatsApp asking you to scan to claim"
      ],
      kn: [
        "ಹಣ ಸ್ವೀಕರಿಸಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಎಂದು ಯಾರೇ ಹೇಳಿದರೂ ಅದು ಶೇ.100 ವಂಚನೆ",
        "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕಳುಹಿಸಲಾದ QR ಕೋಡ್‌ಗಳು ಅಥವಾ ಅಂಗಡಿಗಳಲ್ಲಿ ಅಸಲಿ ಕೋಡ್ ಮೇಲೆ ಅಂಟಿಸಲಾದ ನಕಲಿ ಸ್ಟಿಕ್ಕರ್‌ಗಳು",
        "ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್ ಅಥವಾ ಲಾಟರಿ ಬಹುಮಾನ ಪಡೆಯಲು QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಎಂದು ಬರುವ ಮೆಸೇಜ್‌ಗಳು"
      ],
      hi: [
        "कोई भी कहे कि पैसे पाने के लिए QR कोड स्कैन करें, तो वह 100% ठगी है",
        "व्हाट्सएप पर आया कोई भी QR कोड या दुकानों पर असली कोड के ऊपर चिपकाए गए फर्जी स्टीकर",
        "कैशबैक या स्क्रैच कार्ड के नाम पर कोड स्कैन करने को कहना"
      ]
    },
    dosAndDonts: {
      dos: {
        en: [
          "Understand how QR codes work: QR = Quick Response for PAYING out money, never for receiving money!",
          "To receive money, simply give your Mobile Number or UPI ID (e.g., name@okaxis) — nothing else is required",
          "At retail shops, always check that the shopkeeper's printed QR code is not covered by a malicious sticker"
        ],
        kn: [
          "QR ಕೋಡ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತಿಳಿಯಿರಿ: QR ಕೋಡ್ ಕೇವಲ ಹಣ ಪಾವತಿಸಲು ಮಾತ್ರ, ಸ್ವೀಕರಿಸಲು ಎಂದಿಗೂ ಅಲ್ಲ!",
          "ಹಣ ಪಡೆಯಲು ಕೇವಲ ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಥವಾ UPI ID (ಉದಾ: name@upi) ನೀಡಿದರೆ ಸಾಕು",
          "ಅಂಗಡಿಗಳಲ್ಲಿ ಪಾವತಿ ಮಾಡುವಾಗ ವ್ಯಾಪಾರಿಯ ಹೆಸರನ್ನು ಪರದೆಯ ಮೇಲೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ"
        ],
        hi: [
          "QR कोड का नियम समझें: QR कोड सिर्फ पैसे भेजने के लिए होता है, पाने के लिए कभी नहीं!",
          "पैसे प्राप्त करने के लिए केवल अपना मोबाइल नंबर या UPI ID दें, किसी कोड की जरूरत नहीं",
          "दुकान पर पेमेंट करते समय स्क्रीन पर दुकानदार का सही नाम जरूर जांचें"
        ]
      },
      donts: {
        en: [
          "NEVER scan a QR code sent to you on WhatsApp or SMS",
          "NEVER enter your UPI PIN after scanning an unknown QR code",
          "Do not share your screen when discussing payment with unfamiliar buyers"
        ],
        kn: [
          "ವಾಟ್ಸಾಪ್ ಅಥವಾ SMS ನಲ್ಲಿ ಬಂದ QR ಕೋಡ್ ಅನ್ನು ಎಂದಿಗೂ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ",
          "ಅಪರಿಚಿತ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ನಂತರ ಯಾವುದೇ ಕಾರಣಕ್ಕೂ UPI PIN ನಮೂದಿಸಬೇಡಿ",
          "ವ್ಯವಹಾರ ಮಾಡುವಾಗ ಅಪರಿಚಿತರೊಂದಿಗೆ ಸ್ಕ್ರೀನ್ ಶೇರ್ ಮಾಡಬೇಡಿ"
        ],
        hi: [
          "व्हाट्सएप पर आए किसी भी QR कोड को कभी स्कैन न करें",
          "QR कोड स्कैन करने के बाद कभी भी अपना UPI PIN न डालें",
          "पेमेंट के बहाने किसी से स्क्रीन शेयर न करें"
        ]
      }
    }
  },
  {
    id: "social_media",
    icon: "👥",
    title: {
      en: "Social Media Fraud & Account Takeover",
      kn: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ವಂಚನೆ ಮತ್ತು ಖಾತೆ ಕಳ್ಳತನ",
      hi: "सोशल मीडिया फ्रॉड और अकाउंट हैकिंग"
    },
    shortDesc: {
      en: "Cloned Facebook/Instagram profiles asking friends for emergency money, fake stock market investment tips, and sextortion traps.",
      kn: "ಸ್ನೇಹಿತರ ಹೆಸರಿನಲ್ಲಿ ನಕಲಿ ಪ್ರೊಫೈಲ್ ಮಾಡಿ ತುರ್ತು ಹಣ ಕೇಳುವುದು, ನಕಲಿ ಷೇರು ಮಾರುಕಟ್ಟೆ ಸಲಹೆಗಳು ಮತ್ತು ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್ ತಂತ್ರಗಳು.",
      hi: "दोस्तों के नाम से फर्जी प्रोफाइल बनाकर इमरजेंसी के नाम पर पैसे मांगना और शेयर बाजार में भारी मुनाफे का झांसा।"
    },
    realScenario: {
      en: "A retired teacher gets a Facebook Messenger message from his childhood friend's exact profile: 'Urgent medical emergency! My daughter is in ICU and hospital needs ₹25,000 immediately. Please GPay to this hospital vendor number, I will return tomorrow.' The teacher transfers the money, only to find out later that his friend's Facebook account was hacked and thousands of friends received the same message.",
      kn: "ನಿವೃತ್ತ ಶಿಕ್ಷಕರೊಬ್ಬರಿಗೆ ತಮ್ಮ ಆತ್ಮೀಯ ಸ್ನೇಹಿತನ ಹೆಸರಿನ ಫೇಸ್‌ಬುಕ್ ಖಾತೆಯಿಂದ ಮೆಸೇಜ್ ಬರುತ್ತದೆ: 'ತುರ್ತು ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿ! ನನ್ನ ಮಗಳು ಆಸ್ಪತ್ರೆಯಲ್ಲಿದ್ದಾಳೆ, ತುರ್ತಾಗಿ ₹25,000 ಬೇಕಿದೆ. ಈ ನಂಬರ್‌ಗೆ ಜಮೆ ಮಾಡಿ, ನಾಳೆ ವಾಪಸ್ ನೀಡುತ್ತೇನೆ.' ಶಿಕ್ಷಕರು ಹಣ ಕಳುಹಿಸುತ್ತಾರೆ. ನಂತರ ಆ ಸ್ನೇಹಿತನ ಖಾತೆ ಹ್ಯಾಕ್ ಆಗಿರುವುದು ಮತ್ತು ಎಲ್ಲರಿಗೂ ಇದೇ ಮೆಸೇಜ್ ಹೋಗಿರುವುದು ತಿಳಿಯುತ್ತದೆ.",
      hi: "एक नागरिक को फेसबुक पर अपने पुराने दोस्त के अकाउंट से मैसेज आता है: 'मेरी बेटी अस्पताल में भर्ती है, इलाज के लिए तुरंत ₹20,000 चाहिए। कृपया इस नंबर पर भेजें।' पैसे भेजने के बाद फोन करने पर पता चला कि दोस्त का अकाउंट हैक हो चुका था।"
    },
    redFlags: {
      en: [
        "A friend or relative suddenly asks for money on Instagram/Facebook/WhatsApp claiming an emergency",
        "Requests to send money to an unfamiliar UPI ID that doesn't match your friend's name",
        "Fake celebrity or influencer profiles promising guaranteed 200% returns on stock trading or crypto",
        "Strangers starting video calls on Instagram or WhatsApp and recording compromised videos for blackmail"
      ],
      kn: [
        "ಸ್ನೇಹಿತರು ಅಥವಾ ಸಂಬಂಧಿಕರು ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ತುರ್ತು ಹಣ ಕೇಳುವುದು",
        "ಸ್ನೇಹಿತನ ಹೆಸರಿಗೆ ಹೊಂದಿಕೆಯಾಗದ ಬೇರೊಬ್ಬರ ಅಪರಿಚಿತ UPI ID ಗೆ ಹಣ ಕಳುಹಿಸಲು ಹೇಳುವುದು",
        "ಷೇರು ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಕ್ರಿಪ್ಟೋದಲ್ಲಿ 200% ಖಚಿತ ಲಾಭ ಕೊಡುವುದಾಗಿ ಹೇಳುವ ನಕಲಿ ಹೂಡಿಕೆ ಪೋಸ್ಟ್‌ಗಳು",
        "ಅಪರಿಚಿತರು ವಿಡಿಯೋ ಕರೆ ಮಾಡಿ ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್ ಮಾಡುವ ಜಾಲಗಳು"
      ],
      hi: [
        "किसी दोस्त या रिश्तेदार का अचानक सोशल मीडिया पर इमरजेंसी के नाम पर पैसे मांगना",
        "दोस्त के नाम से अलग किसी अनजान व्यक्ति के UPI ID पर पैसे ट्रांसफर करने को कहना",
        "शेयर बाजार या म्यूचुअल फंड में रातोंरात दोगुना मुनाफे का लालच देने वाले ग्रुप",
        "अनजान नंबर से वीडियो कॉल करके अश्लील वीडियो बनाकर ब्लैकमेल करना"
      ]
    },
    dosAndDonts: {
      dos: {
        en: [
          "ALWAYS call the friend directly on their regular phone number to verify before sending a single rupee",
          "Enable Two-Factor Authentication (2FA) with an authenticator app or SMS PIN on WhatsApp, Instagram, and Gmail",
          "Lock your Facebook profile and keep your privacy settings restricted to friends only"
        ],
        kn: [
          "ಹಣ ಕಳುಹಿಸುವ ಮುನ್ನ ಆ ಸ್ನೇಹಿತನ ನಿಜವಾದ ಫೋನ್ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ನೇರವಾಗಿ ಮಾತನಾಡಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ",
          "ನಿಮ್ಮ WhatsApp, Instagram ಮತ್ತು ಇಮೇಲ್ ಖಾತೆಗಳಿಗೆ 2-Step Verification (2FA) ಸಕ್ರಿಯಗೊಳಿಸಿ",
          "ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಲಾಕ್ ಮಾಡಿ ಮತ್ತು ಪ್ರೈವೆಸಿ ಸೆಟ್ಟಿಂಗ್ಸ್ ಸುರಕ್ಷಿತವಾಗಿರಿಸಿ"
        ],
        hi: [
          "एक रुपया भी भेजने से पहले उस दोस्त को सामान्य फोन कॉल करके जरूर पूछें",
          "अपने WhatsApp, Instagram और ईमेल पर 'Two-Factor Authentication (2FA)' जरूर चालू रखें",
          "अपनी प्रोफाइल को लॉक रखें और अज्ञात लोगों की फ्रेंड रिक्वेस्ट स्वीकार न करें"
        ]
      },
      donts: {
        en: [
          "NEVER transfer money based solely on social media chats or voice notes (scammers use AI voice cloning now!)",
          "NEVER accept unknown video calls from stranger numbers on WhatsApp or Instagram",
          "Do not join secret WhatsApp/Telegram trading groups promising guaranteed stock returns"
        ],
        kn: [
          "ಕೇವಲ ಚಾಟ್ ಅಥವಾ ವಾಯ್ಸ್ ನೋಟ್ ಆಧರಿಸಿ ಹಣ ಕಳುಹಿಸಬೇಡಿ (ಇತ್ತೀಚೆಗೆ AI ಧ್ವನಿ ಬಳಸಿ ಮೋಸ ಮಾಡಲಾಗುತ್ತಿದೆ!)",
          "ಅಪರಿಚಿತ ನಂಬರ್‌ಗಳಿಂದ ಬರುವ ವಿಡಿಯೋ ಕರೆಗಳನ್ನು ಸ್ವೀಕರಿಸಬೇಡಿ",
          "ಟೆಲಿಗ್ರಾಂ ಅಥವಾ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಅಕ್ರಮ ಷೇರು ಹೂಡಿಕೆ ಗ್ರೂಪ್‌ಗಳನ್ನು ಸೇರಬೇಡಿ"
        ],
        hi: [
          "सिर्फ चैट या वॉइस मैसेज सुनकर पैसे न भेजें (आजकल AI से आवाज की नकल भी की जाती है!)",
          "अज्ञात नंबर से आने वाले वीडियो कॉल कभी न उठाएं",
          "अवैध टेलीग्राम ट्रेडिंग ग्रुप्स के झांसे में न आएं"
        ]
      }
    }
  }
];
