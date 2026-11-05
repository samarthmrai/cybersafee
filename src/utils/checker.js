// Suspicious Message Checker: 100% Client-Side Local JavaScript Heuristic Engine
window.CyberMessageChecker = {
  // Pre-made sample messages for one-click testing
  sampleMessages: [
    {
      id: "sample_electricity",
      name: {
        en: "⚡ Electricity Bill Cut SMS",
        kn: "⚡ ಕರೆಂಟ್ ಕಟ್ SMS ಉದಾಹರಣೆ",
        hi: "⚡ बिजली बिल काटने का SMS"
      },
      text: "Dear customer, your power will be disconnected tonight at 09:30 PM by BESCOM office because your monthly bill was not updated. Please immediately contact power officer at 9845012345 or pay ₹10 bill update fee here: http://bit.ly/bescom-bill-update.apk"
    },
    {
      id: "sample_job",
      name: {
        en: "💼 Part-Time Job / Telegram Scam",
        kn: "💼 ಪಾರ್ಟ್-ಟೈಮ್ ಜಾಬ್ ಆಫರ್",
        hi: "💼 पार्ट-टाइम नौकरी का ऑफर"
      },
      text: "Hello! Earn ₹3,500 daily part-time from home. Just like 3 YouTube videos and subscribe. Send screenshots to get ₹150 instantly on GPay. Deposit ₹1000 refundable VIP security fee to unlock ₹10,000 tasks: https://t.me/vip_task_earning"
    },
    {
      id: "sample_kyc",
      name: {
        en: "🏦 Fake Bank KYC Expired SMS",
        kn: "🏦 ನಕಲಿ ಬ್ಯಾಂಕ್ KYC ಎಕ್ಸ್‌ಪೈರ್ SMS",
        hi: "🏦 फर्जी बैंक KYC बंद होने का मैसेज"
      },
      text: "SBI Alert: Your NetBanking account will be BLOCKED within 24 hours due to non-submission of PAN & Aadhaar KYC. Update immediately to prevent deactivation: http://sbi-kyc-verification.top/update.apk"
    },
    {
      id: "sample_safe",
      name: {
        en: "✅ Genuine Bank Alert (Safe)",
        kn: "✅ ನೈಜ ಬ್ಯಾಂಕ್ ಮೆಸೇಜ್ (ಸುರಕ್ಷಿತ)",
        hi: "✅ असली बैंक मैसेज (सुरक्षित उदाहरण)"
      },
      text: "Dear SBI Customer, INR 2,500.00 debited from A/C ...4321 on 05-Nov-26 at ATM. Avl Bal: INR 34,210.00. If not done by you, SMS BLOCK to 9223008333 or call 18001234. -SBI"
    }
  ],

  // Heuristic rule definitions
  rules: [
    {
      id: "apk_download",
      weight: 35,
      severity: "CRITICAL",
      pattern: /(\.apk|\.exe|\.scr|\.bat|\.zip)/i,
      label: {
        en: "Dangerous App (.APK / Installer) Download Detected",
        kn: "ಅಪಾಯಕಾರಿ ಆಪ್ (.APK) ಡೌನ್‌ಲೋಡ್ ಪತ್ತೆಯಾಗಿದೆ",
        hi: "खतरनाक ऐप (.APK फाइल) डाउनलोड लिंक पाया गया"
      },
      explanation: {
        en: "Legitimate institutions NEVER send links to download APK files via SMS or WhatsApp. APK links install trojans or screen-mirroring malware to steal banking passwords.",
        kn: "ಅಧಿಕೃತ ಸಂಸ್ಥೆಗಳು ಎಂದಿಗೂ SMS ಮೂಲಕ APK ಫೈಲ್ ಕಳುಹಿಸುವುದಿಲ್ಲ. ಇದು ನಿಮ್ಮ ಬ್ಯಾಂಕಿಂಗ್ ಪಾಸ್‌ವರ್ಡ್ ಕದಿಯುವ ಅಪಾಯಕಾರಿ ವೈರಸ್.",
        hi: "असली संस्थाएं कभी भी SMS पर .apk फाइल नहीं भेजतीं। यह बैंक पासवर्ड चुराने वाला खतरनाक वायरस हो सकता है।"
      }
    },
    {
      id: "urgency_threat",
      weight: 25,
      severity: "HIGH",
      pattern: /(disconnected tonight|will be disconnected|power cut|account.*blocked|suspended.*24.*hours|immediate action|deactivation|warrant|arrest|cbi|police complaint)/i,
      label: {
        en: "Artificial Urgency & Threat Tactics",
        kn: "ಅನಗತ್ಯ ತುರ್ತು ಮತ್ತು ಬೆದರಿಕೆಯ ತಂತ್ರ",
        hi: "अत्यधिक जल्दबाजी और डराने-धमकाने की भाषा"
      },
      explanation: {
        en: "Scammers create false panic ('electricity cut tonight', 'account blocked in 24 hrs') so victims act impulsively without verifying facts.",
        kn: "ವಂಚಕರು ಸತ್ಯಾಸತ್ಯತೆ ತಿಳಿಯಲು ಸಮಯ ನೀಡದೆ ಹೆದರಿಸಿ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳುವಂತೆ ಮಾಡಲು ಇಂತಹ ಬೆದರಿಕೆಗಳನ್ನು ಬಳಸುತ್ತಾರೆ.",
        hi: "ठग जानबूझकर डर पैदा करते हैं ताकि आप बिना सोचे-समझे तुरंत पैसे दे दें या लिंक पर क्लिक कर दें।"
      }
    },
    {
      id: "short_link",
      weight: 20,
      severity: "MEDIUM",
      pattern: /(bit\.ly|tinyurl\.com|t\.me\/|wa\.me\/|cutt\.ly|is\.gd|goo\.gl|tiny\.cc|\.xyz|\.top|\.club|\.vip|\.info|\.cc|\.live)/i,
      label: {
        en: "Suspicious Short Link or Non-Official Web Domain",
        kn: "ಅನುಮಾನಾಸ್ಪದ ಸಂಕ್ಷಿಪ್ತ ಲಿಂಕ್ ಅಥವಾ ನಕಲಿ ವೆಬ್ ಡೊಮೇನ್",
        hi: "संदिग्ध छोटा लिंक या अनधिकृत वेबसाइट पता"
      },
      explanation: {
        en: "Shortened links conceal the real fraudulent destination. Banks and government agencies always use official domains ending in .gov.in, .nic.in, or reputable .com/.in.",
        kn: "ಸಂಕ್ಷಿಪ್ತ ಲಿಂಕ್‌ಗಳು ಅಸಲಿ ವಂಚನೆಯ ಸೈಟ್‌ಗಳನ್ನು ಮುಚ್ಚಿಡುತ್ತವೆ. ಸರ್ಕಾರಿ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಸೈಟ್‌ಗಳು .gov.in ಅಥವಾ ಅಧಿಕೃತ ವಿಳಾಸ ಹೊಂದಿರುತ್ತವೆ.",
        hi: "छोटे लिंक असली ठगी वाली वेबसाइट को छिपाते हैं। सरकारी और बैंक वेबसाइट हमेशा .gov.in या असली पते पर होती हैं।"
      }
    },
    {
      id: "unrealistic_money",
      weight: 25,
      severity: "HIGH",
      pattern: /(earn.*daily|earn.*per day|part.*time.*job|like.*youtube|task.*earning|won.*lottery|congratulations.*won|kbc.*lottery|25,00,000|guaranteed return|double.*money)/i,
      label: {
        en: "Unrealistic Job / Lottery / Easy Money Bait",
        kn: "ಸುಲಭ ಹಣ / ಉದ್ಯೋಗ / ಲಾಟರಿ ಆಮಿಷ",
        hi: "आसान कमाई / फर्जी नौकरी / लॉटरी का लालच"
      },
      explanation: {
        en: "High daily earnings for minimal work (e.g. liking videos) is the hallmark of Telegram/Task scams that extort lakhs from victims.",
        kn: "ಕೇವಲ ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಲು ದಿನಕ್ಕೆ ಸಾವಿರಾರು ರೂಪಾಯಿ ನೀಡುವ ಆಮಿಷಗಳು ದೊಡ್ಡ ಮೊತ್ತವನ್ನು ಕದಿಯುವ ಟಾಸ್ಕ್ ವಂಚನೆಗಳಾಗಿವೆ.",
        hi: "आसान काम के बदले हजारों रुपये रोजाना देने का झांसा टास्क फ्रॉड का सबसे बड़ा लक्षण है।"
      }
    },
    {
      id: "credential_otp_pin",
      weight: 30,
      severity: "CRITICAL",
      pattern: /(enter.*upi pin|scan.*qr|share.*otp|send.*otp|kyc.*update|pan.*card.*update|aadhaar.*update|refund.*fee|update fee)/i,
      label: {
        en: "Demands for UPI PIN, QR Scan, OTP, or KYC Details",
        kn: "UPI PIN, QR ಸ್ಕ್ಯಾನ್, OTP ಅಥವಾ KYC ವಿವರಗಳನ್ನು ಕೇಳುವುದು",
        hi: "UPI PIN, QR कोड स्कैन, OTP या KYC विवरण की मांग"
      },
      explanation: {
        en: "Banks never ask for OTP or PIN to update KYC or process refunds. Entering a PIN or scanning QR codes always debits your account.",
        kn: "ಬ್ಯಾಂಕ್‌ಗಳು KYC ಗಾಗಿ ಅಥವಾ ಹಣ ವಾಪಸ್ ನೀಡಲು OTP/PIN ಕೇಳುವುದಿಲ್ಲ. PIN ಹಾಕಿದರೆ ಹಣ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ.",
        hi: "बैंक कभी भी KYC या रिफंड के नाम पर पिन या ओटीपी नहीं मांगते। पिन डालने से हमेशा पैसे कटते हैं।"
      }
    },
    {
      id: "remote_screen_share",
      weight: 35,
      severity: "CRITICAL",
      pattern: /(anydesk|teamviewer|quicksupport|rustdesk|screen share|share screen)/i,
      label: {
        en: "Remote Screen Sharing Application Mentioned",
        kn: "ಸ್ಕ್ರೀನ್ ಶೇರಿಂಗ್ ಆಪ್‌ಗಳ ಪ್ರಸ್ತಾಪ",
        hi: "रिमोट स्क्रीन शेयरिंग ऐप का उल्लेख"
      },
      explanation: {
        en: "Asking you to install remote access apps is a clear sign of fraud. Scammers use these to steal OTPs and control your mobile device remotely.",
        kn: "ರಿಮೋಟ್ ಆಪ್‌ಗಳನ್ನು ಹಾಕಿಕೊಳ್ಳಲು ಹೇಳುವುದು ವಂಚನೆಯ ಸ್ಪಷ್ಟ ಸಂಕೇತ. ಇದರ ಮೂಲಕ ಅವರು ನಿಮ್ಮ ಮೊಬೈಲ್ ಅನ್ನು ನಿಯಂತ್ರಿಸುತ್ತಾರೆ.",
        hi: "रिमोट ऐप इंस्टॉल करने को कहना ठगी का पक्का सबूत है। इससे ठग आपके फोन पर कब्जा कर लेते हैं।"
      }
    },
    {
      id: "http_unsecured",
      weight: 15,
      severity: "MEDIUM",
      pattern: /http:\/\/(?!localhost|127\.0\.0\.1)/i,
      label: {
        en: "Unencrypted Insecure HTTP Link",
        kn: "ಅಸುರಕ್ಷಿತ (HTTP) ಲಿಂಕ್",
        hi: "असुरक्षित (HTTP) लिंक"
      },
      explanation: {
        en: "Modern banks and legitimate websites strictly use encrypted HTTPS (with a padlock icon). Standard HTTP connections are unsafe.",
        kn: "ಎಲ್ಲಾ ಬ್ಯಾಂಕುಗಳು ಮತ್ತು ಸುರಕ್ಷಿತ ತಾಣಗಳು HTTPS ಬಳಸುತ್ತವೆ. ಕೇವಲ HTTP ಇರುವ ಲಿಂಕ್‌ಗಳು ಅಸುರಕ್ಷಿತವಾಗಿವೆ.",
        hi: "सभी सुरक्षित बैंक वेबसाइट HTTPS का उपयोग करती हैं। केवल HTTP लिंक असुरक्षित होते हैं।"
      }
    }
  ],

  // Analyze function
  analyze: function(text) {
    if (!text || text.trim().length === 0) {
      return {
        score: 0,
        level: "EMPTY",
        matchedRules: [],
        summary: "Please enter or paste a message to inspect."
      };
    }

    var matchedRules = [];
    var totalScore = 0;

    for (var i = 0; i < this.rules.length; i++) {
      var rule = this.rules[i];
      if (rule.pattern.test(text)) {
        matchedRules.push(rule);
        totalScore += rule.weight;
      }
    }

    // Cap total score at 100
    if (totalScore > 100) totalScore = 100;

    var level = "SAFE";
    if (totalScore >= 50) {
      level = "DANGEROUS";
    } else if (totalScore > 0) {
      level = "SUSPICIOUS";
    }

    return {
      score: totalScore,
      level: level,
      matchedRules: matchedRules,
      count: matchedRules.length
    };
  }
};
