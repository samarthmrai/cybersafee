// Home Dashboard Component with Daily Safety Tips, Audio Read-Aloud, and Golden Rules
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.HomeDashboard = function HomeDashboard(props) {
  var lang = props.lang;
  var setCurrentTab = props.setCurrentTab;
  var playAudio = props.playAudio;
  var stopAudio = props.stopAudio;
  var isSpeaking = props.isSpeaking;

  var t = window.CYBER_TRANSLATIONS[lang] || window.CYBER_TRANSLATIONS.en;

  // Daily tips repository
  var dailyTips = [
    {
      title: {
        en: "Receiving Money NEVER Requires a UPI PIN",
        kn: "ಹಣ ಪಡೆಯಲು ಯಾವುದೇ UPI PIN ನಮೂದಿಸಬೇಕಾಗಿಲ್ಲ",
        hi: "पैसे प्राप्त करने के लिए कभी भी UPI PIN की जरूरत नहीं होती"
      },
      text: {
        en: "A UPI PIN is used exclusively to transfer money out of your account. If anyone asks you to scan a QR code or enter your PIN to receive cashback, lottery, or payment, it is 100% a scam!",
        kn: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ UPI PIN ಅಗತ್ಯ. ಯಾರಾದರೂ ಹಣ, ಬಹುಮಾನ ಅಥವಾ ಮರುಪಾವತಿ ನೀಡಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ PIN ಹಾಕಿ ಎಂದು ಹೇಳಿದರೆ ಅದು ಶೇ.100 ರಷ್ಟು ವಂಚನೆ!",
        hi: "UPI PIN केवल आपके खाते से पैसे भेजने (कटवाने) के लिए होता है। यदि कोई कहे कि कैशबैक या इनाम पाने के लिए पिन डालें या QR स्कैन करें, तो वह पूरी तरह ठगी है!"
      }
    },
    {
      title: {
        en: "No Police or CBI Official Conducts 'Digital Arrest'",
        kn: "ಯಾವುದೇ ಪೊಲೀಸ್ ಅಥವಾ ಸಿಬಿಐ 'ಡಿಜಿಟಲ್ ಬಂಧನ' ಮಾಡುವುದಿಲ್ಲ",
        hi: "कोई भी पुलिस या CBI अधिकारी 'डिजिटल अरेस्ट' नहीं करता"
      },
      text: {
        en: "Law enforcement agencies never interrogate suspects, issue warrants, or demand financial asset verification over WhatsApp or Skype video calls. Disconnect immediately and dial 1930.",
        kn: "ಯಾವುದೇ ಕಾನೂನು ಸಂಸ್ಥೆ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಸ್ಕೈಪ್ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ವಿಚಾರಣೆ ನಡೆಸುವುದಿಲ್ಲ ಅಥವಾ ಹಣ ಕೇಳುವುದಿಲ್ಲ. ಅಂತಹ ಕರೆ ಬಂದರೆ ತಕ್ಷಣ ಕಟ್ ಮಾಡಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ.",
        hi: "पुलिस कभी भी व्हाट्सएप या स्काइप वीडियो कॉल पर पूछताछ या अरेस्ट वारंट नहीं भेजती और न ही पैसे मांगती है। तुरंत कॉल काटें और 1930 पर शिकायत करें।"
      }
    },
    {
      title: {
        en: "Beware of Electricity Bill Disconnection Threats",
        kn: "ವಿದ್ಯುತ್ ಬಿಲ್ ಕಡಿತದ ಬೆದರಿಕೆಗೆ ಹೆದರಬೇಡಿ",
        hi: "बिजली बिल कटने की धमकी भरे मैसेज से सावधान रहें"
      },
      text: {
        en: "Electricity boards never send disconnection SMS from 10-digit mobile numbers asking you to call an officer or download an APK. Always verify bills directly on your official board app.",
        kn: "ವಿದ್ಯುತ್ ನಿಗಮಗಳು ಸಾಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳಿಂದ ವಿದ್ಯುತ್ ಕಡಿತಗೊಳಿಸುವ ಬೆದರಿಕೆ SMS ಕಳುಹಿಸುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಆಪ್ ಮೂಲಕ ಮಾತ್ರ ನಿಮ್ಮ ಬಿಲ್ ಪರಿಶೀಲಿಸಿ.",
        hi: "बिजली विभाग कभी भी 10 अंकों वाले मोबाइल नंबर से बिजली काटने की धमकी नहीं देता। हमेशा विभाग के आधिकारिक ऐप पर ही बिल देखें।"
      }
    },
    {
      title: {
        en: "Never Install Screen-Sharing Apps for Strangers",
        kn: "ಅಪರಿಚಿತರ ಮಾತಿಗೆ AnyDesk ಅಥವಾ TeamViewer ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ",
        hi: "किसी अनजान के कहने पर AnyDesk या TeamViewer डाउनलोड न करें"
      },
      text: {
        en: "Apps like AnyDesk, TeamViewer, and QuickSupport share your mobile screen live. Scammers can see your bank OTPs and passwords. Never install them at a caller's request.",
        kn: "AnyDesk ಮುಂತಾದ ಆಪ್‌ಗಳು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್ ಅನ್ನು ಇತರರಿಗೆ ನೇರವಾಗಿ ತೋರಿಸುತ್ತವೆ. ವಂಚಕರು ನಿಮ್ಮ OTP ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನೋಡಿ ಹಣ ಕದಿಯುತ್ತಾರೆ. ಯಾರೇ ಹೇಳಿದರೂ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ.",
        hi: "AnyDesk या QuickSupport जैसे ऐप आपके फोन की स्क्रीन दूसरों को दिखाते हैं। ठग आपके बैंक OTP देखकर पैसे चुरा लेते हैं। कभी किसी के कहने पर इन्हें इंस्टॉल न करें।"
      }
    }
  ];

  var [tipIndex, setTipIndex] = React.useState(0);
  var currentTip = dailyTips[tipIndex];

  var handleListenTip = function() {
    var tipText = (currentTip.title[lang] || currentTip.title.en) + ". " + (currentTip.text[lang] || currentTip.text.en);
    playAudio(tipText, lang);
  };

  return React.createElement(
    "div",
    { className: "space-y-8 pb-12" },
    
    // Hero Banner
    React.createElement(
      "div",
      { className: "bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-800/40 relative overflow-hidden" },
      React.createElement(
        "div",
        { className: "max-w-3xl relative z-10" },
        React.createElement(
          "span",
          { className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider mb-4" },
          React.createElement("span", null, "🛡️"),
          React.createElement("span", null, "Public Cyber Safety Portal")
        ),
        React.createElement(
          "h1",
          { className: "text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4" },
          t.appTitle,
          React.createElement(
            "span",
            { className: "block text-blue-400 text-lg sm:text-2xl md:text-3xl font-bold mt-1" },
            t.appTagline
          )
        ),
        React.createElement(
          "p",
          { className: "text-slate-300 text-base sm:text-lg mb-6 leading-relaxed" },
          lang === "kn"
            ? "ವಿದ್ಯಾರ್ಥಿಗಳು, ಹಿರಿಯ ನಾಗರಿಕರು ಮತ್ತು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಡಿಜಿಟಲ್ ವಂಚನೆಗಳಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ಸರಳ ಕನ್ನಡದಲ್ಲಿ ಮಾರ್ಗದರ್ಶಿ. ಯಾವುದೇ ಲಾಗಿನ್ ಅಗತ್ಯವಿಲ್ಲ."
            : (lang === "hi"
                ? "विद्यार्थियों, वरिष्ठ नागरिकों और ग्रामीण भारत को साइबर फ्रॉड से सुरक्षित रखने का सरल मंच। कोई लॉगिन आवश्यक नहीं।"
                : "A simple, public-friendly initiative empowering students, senior citizens, and beginners to recognize, avoid, and report digital fraud. 100% free with no login required.")
        ),
        React.createElement(
          "div",
          { className: "flex flex-wrap gap-3" },
          React.createElement(
            "button",
            {
              onClick: function() { setCurrentTab("chatbot"); },
              className: "bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-5 py-3 rounded-2xl shadow-lg transition-all flex items-center space-x-2 text-base ring-2 ring-emerald-300"
            },
            React.createElement("span", null, "🤖"),
            React.createElement("span", null, lang === "kn" ? "ಸೈಬರ್ ಮಿತ್ರ AI ಜೊತೆ ಚಾಟ್ ಮಾಡಿ" : (lang === "hi" ? "साइबर मित्र AI से बात करें" : "Chat with CyberMitra AI"))
          ),
          React.createElement(
            "button",
            {
              onClick: function() { setCurrentTab("simulator"); },
              className: "bg-blue-500 hover:bg-blue-600 text-white font-black px-5 py-3 rounded-2xl shadow-lg transition-all flex items-center space-x-2 text-base"
            },
            React.createElement("span", null, "🎮"),
            React.createElement("span", null, t.nav.simulator)
          ),
          React.createElement(
            "button",
            {
              onClick: function() { setCurrentTab("learn"); },
              className: "bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-2xl border border-slate-700 transition-all flex items-center space-x-2 text-base"
            },
            React.createElement("span", null, "📚"),
            React.createElement("span", null, t.nav.learn)
          ),
          React.createElement(
            "button",
            {
              onClick: function() { setCurrentTab("checker"); },
              className: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-5 py-3 rounded-2xl shadow transition-all flex items-center space-x-2 text-base"
            },
            React.createElement("span", null, "🔍"),
            React.createElement("span", null, t.nav.checker)
          )
        )
      )
    ),

    // Tip of the Day Card with Audio Listen
    React.createElement(
      "div",
      { className: "bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-7 shadow-sm" },
      React.createElement(
        "div",
        { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 border-b border-amber-200 pb-3" },
        React.createElement(
          "div",
          { className: "flex items-center space-x-2.5" },
          React.createElement("span", { className: "text-2xl" }, "💡"),
          React.createElement(
            "h2",
            { className: "font-black text-amber-950 text-lg sm:text-xl tracking-tight" },
            t.tipOfTheDay
          )
        ),
        React.createElement(
          "div",
          { className: "flex items-center space-x-2" },
          React.createElement(
            "button",
            {
              onClick: isSpeaking ? stopAudio : handleListenTip,
              className: "inline-flex items-center space-x-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-xl text-sm shadow transition-all"
            },
            React.createElement("span", null, isSpeaking ? "⏹️" : "🔊"),
            React.createElement("span", null, isSpeaking ? t.stopAudio : t.listenAudio)
          ),
          React.createElement(
            "button",
            {
              onClick: function() { setTipIndex((tipIndex + 1) % dailyTips.length); },
              className: "inline-flex items-center space-x-1 bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-3 py-1.5 rounded-xl text-sm transition-all"
            },
            React.createElement("span", null, "🔄"),
            React.createElement("span", null, t.nextTip)
          )
        )
      ),
      React.createElement(
        "h3",
        { className: "font-extrabold text-amber-900 text-base sm:text-lg mb-2" },
        currentTip.title[lang] || currentTip.title.en
      ),
      React.createElement(
        "p",
        { className: "text-amber-950 text-sm sm:text-base leading-relaxed" },
        currentTip.text[lang] || currentTip.text.en
      )
    ),

    // CyberMitra AI Chatbot Card on Home Page
    React.createElement(
      "div",
      { className: "bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6" },
        React.createElement(
          "div",
          { className: "space-y-3 max-w-2xl" },
          React.createElement(
            "div",
            { className: "flex items-center space-x-2.5" },
            React.createElement("span", { className: "text-3xl p-2 bg-white/10 rounded-2xl" }, "🤖"),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                { className: "inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-0.5" },
                React.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                React.createElement("span", null, "AI-Powered Assistant")
              ),
              React.createElement(
                "h2",
                { className: "text-xl sm:text-2xl font-black text-white tracking-tight" },
                lang === "kn" ? "ಸೈಬರ್ ಮಿತ್ರ (CyberMitra) AI ಜೊತೆ ಮಾತನಾಡಿ" : (lang === "hi" ? "साइबर मित्र (CyberMitra) AI से पूछें" : "Have Questions? Ask CyberMitra AI")
              )
            )
          ),
          React.createElement(
            "p",
            { className: "text-slate-300 text-sm sm:text-base leading-relaxed" },
            lang === "kn"
              ? "ನಕಲಿ ಸಂದೇಶಗಳು, ಯುಪಿಐ ವಂಚನೆ, ಡಿಜಿಟಲ್ ಬಂಧನ ಅಥವಾ ಕಳೆದುಹೋದ ಹಣದ ಬಗ್ಗೆ ಕನ್ನಡ, ಹಿಂದಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ತಕ್ಷಣ AI ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ."
              : (lang === "hi"
                  ? "ऑनलाइन ठगी, संदिग्ध SMS, QR कोड या डिजिटल अरेस्ट पर हिंदी, कन्नड़ या अंग्रेजी में तुरंत सरल सलाह पाएं।"
                  : "Get instant, simple-language guidance on suspicious SMS, UPI scams, digital arrest video calls, and emergency steps in English, Kannada, or Hindi.")
          ),
          React.createElement(
            "div",
            { className: "flex flex-wrap gap-2 pt-1" },
            React.createElement(
              "button",
              {
                onClick: function() { setCurrentTab("chatbot"); },
                className: "text-xs font-semibold bg-white/10 hover:bg-white/20 text-blue-200 px-3 py-1.5 rounded-xl border border-white/15 transition-all text-left"
              },
              lang === "kn" ? "🚨 ಹಣ ಕಳೆದುಹೋದರೆ ಏನು ಮಾಡಬೇಕು?" : (lang === "hi" ? "🚨 पैसे कट जाएं तो तुरंत क्या करें?" : "🚨 Money stolen online? What to do?")
            ),
            React.createElement(
              "button",
              {
                onClick: function() { setCurrentTab("chatbot"); },
                className: "text-xs font-semibold bg-white/10 hover:bg-white/20 text-blue-200 px-3 py-1.5 rounded-xl border border-white/15 transition-all text-left"
              },
              lang === "kn" ? "⚖️ ಡಿಜಿಟಲ್ ಬಂಧನ ನಿಜವೇ?" : (lang === "hi" ? "⚖️ क्या डिजिटल अरेस्ट सच है?" : "⚖️ Is Digital Arrest real?")
            ),
            React.createElement(
              "button",
              {
                onClick: function() { setCurrentTab("chatbot"); },
                className: "text-xs font-semibold bg-white/10 hover:bg-white/20 text-blue-200 px-3 py-1.5 rounded-xl border border-white/15 transition-all text-left"
              },
              lang === "kn" ? "📷 QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಹಣ ಪಡೆಯಬಹುದೇ?" : (lang === "hi" ? "📷 क्या QR स्कैन करके पैसे मिलते हैं?" : "📷 Safe to scan QR to receive money?")
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex-shrink-0" },
          React.createElement(
            "button",
            {
              onClick: function() { setCurrentTab("chatbot"); },
              className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-4 rounded-2xl shadow-xl transition-all flex items-center space-x-2 text-base transform hover:scale-105 active:scale-95"
            },
            React.createElement("span", null, "💬"),
            React.createElement("span", null, lang === "kn" ? "ಚಾಟ್‌ಬಾಟ್ ತೆರೆಯಿರಿ" : (lang === "hi" ? "चैटबॉट खोलें" : "Launch CyberMitra AI")),
            React.createElement("span", null, "→")
          )
        )
      )
    ),

    // 3 Golden Rules
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "text-center mb-6" },
        React.createElement(
          "h2",
          { className: "text-2xl sm:text-3xl font-black text-slate-900" },
          t.goldenRulesTitle
        ),
        React.createElement(
          "p",
          { className: "text-slate-500 text-sm sm:text-base mt-1" },
          lang === "kn" ? "ಈ 3 ನಿಯಮಗಳನ್ನು ಸದಾ ನೆನಪಿನಲ್ಲಿಡಿ" : (lang === "hi" ? "ये 3 नियम हमेशा याद रखें" : "Keep these 3 golden rules memorized forever")
        )
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-5" },
        
        // Rule 1
        React.createElement(
          "div",
          { className: "bg-white border-2 border-red-200 hover:border-red-500 rounded-3xl p-6 shadow-sm transition-all" },
          React.createElement(
            "div",
            { className: "w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-2xl mb-4 font-black" },
            "1"
          ),
          React.createElement(
            "h3",
            { className: "text-lg font-black text-slate-900 mb-2" },
            t.rule1Title
          ),
          React.createElement(
            "p",
            { className: "text-slate-600 text-sm leading-relaxed" },
            t.rule1Desc
          )
        ),

        // Rule 2
        React.createElement(
          "div",
          { className: "bg-white border-2 border-emerald-200 hover:border-emerald-500 rounded-3xl p-6 shadow-sm transition-all" },
          React.createElement(
            "div",
            { className: "w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4 font-black" },
            "2"
          ),
          React.createElement(
            "h3",
            { className: "text-lg font-black text-slate-900 mb-2" },
            t.rule2Title
          ),
          React.createElement(
            "p",
            { className: "text-slate-600 text-sm leading-relaxed" },
            t.rule2Desc
          )
        ),

        // Rule 3
        React.createElement(
          "div",
          { className: "bg-white border-2 border-indigo-200 hover:border-indigo-500 rounded-3xl p-6 shadow-sm transition-all" },
          React.createElement(
            "div",
            { className: "w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 font-black" },
            "3"
          ),
          React.createElement(
            "h3",
            { className: "text-lg font-black text-slate-900 mb-2" },
            t.rule3Title
          ),
          React.createElement(
            "p",
            { className: "text-slate-600 text-sm leading-relaxed" },
            t.rule3Desc
          )
        )
      )
    ),

    // Feature Modules Grid
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "flex justify-between items-end mb-6" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            { className: "text-2xl sm:text-3xl font-black text-slate-900" },
            t.featuresTitle
          ),
          React.createElement(
            "p",
            { className: "text-slate-500 text-sm sm:text-base mt-1" },
            lang === "kn" ? "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಆಯ್ಕೆಮಾಡಿ" : (lang === "hi" ? "अपनी आवश्यकता अनुसार मॉड्यूल चुनें" : "Select a section below to get started")
          )
        )
      ),

      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" },
        
        // 1. Learn
        React.createElement(
          "div",
          {
            onClick: function() { setCurrentTab("learn"); },
            className: "bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-3xl mb-3 block" }, "📚"),
            React.createElement("h3", { className: "font-black text-slate-900 text-lg mb-1" }, t.nav.learn),
            React.createElement(
              "p",
              { className: "text-slate-600 text-xs sm:text-sm" },
              lang === "kn" ? "ಫಿಶಿಂಗ್, ಯುಪಿಐ, ಡಿಜಿಟಲ್ ಬಂಧನ ಮತ್ತು ಉದ್ಯೋಗ ವಂಚನೆಗಳ ಸಂಪೂರ್ಣ ವಿವರ." : (lang === "hi" ? "फ़िशिंग, यूपीआई फ्रॉड, डिजिटल अरेस्ट और जॉब स्कैम की जानकारी।" : "Understand phishing, UPI fraud, digital arrest, QR scams, and fake jobs.")
            )
          ),
          React.createElement("div", { className: "mt-4 text-blue-600 text-xs font-bold flex items-center space-x-1" }, React.createElement("span", null, t.readMore), React.createElement("span", null, "→"))
        ),

        // 2. Simulator
        React.createElement(
          "div",
          {
            onClick: function() { setCurrentTab("simulator"); },
            className: "bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-lg rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-3xl mb-3 block" }, "🎮"),
            React.createElement("h3", { className: "font-black text-slate-900 text-lg mb-1" }, t.nav.simulator),
            React.createElement(
              "p",
              { className: "text-slate-600 text-xs sm:text-sm" },
              lang === "kn" ? "ನೈಜ ವಂಚನೆಯ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ಸರಿಯಾದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಂಡು ಅಂಕಗಳನ್ನು ಪಡೆಯಿರಿ." : (lang === "hi" ? "वास्तविक धोखाधड़ी परिदृश्यों में सुरक्षित निर्णय लेकर अंक पाएं।" : "Practice realistic scam scenarios, make safe choices, and earn points.")
            )
          ),
          React.createElement("div", { className: "mt-4 text-indigo-600 text-xs font-bold flex items-center space-x-1" }, React.createElement("span", null, t.readMore), React.createElement("span", null, "→"))
        ),

        // 3. Quiz
        React.createElement(
          "div",
          {
            onClick: function() { setCurrentTab("quiz"); },
            className: "bg-white border border-slate-200 hover:border-purple-500 hover:shadow-lg rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-3xl mb-3 block" }, "🎯"),
            React.createElement("h3", { className: "font-black text-slate-900 text-lg mb-1" }, t.nav.quiz),
            React.createElement(
              "p",
              { className: "text-slate-600 text-xs sm:text-sm" },
              lang === "kn" ? "10 ಪ್ರಮುಖ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ ನಿಮ್ಮ ಸೈಬರ್ ಸುರಕ್ಷತಾ ಜ್ಞಾನ ಪರೀಕ್ಷಿಸಿ." : (lang === "hi" ? "10 जरूरी प्रश्नों के उत्तर देकर अपनी जागरूकता परखें और सर्टिफिकेट पाएं।" : "Test your awareness with 10 questions and earn a safety certificate.")
            )
          ),
          React.createElement("div", { className: "mt-4 text-purple-600 text-xs font-bold flex items-center space-x-1" }, React.createElement("span", null, t.readMore), React.createElement("span", null, "→"))
        ),

        // 4. Message Checker
        React.createElement(
          "div",
          {
            onClick: function() { setCurrentTab("checker"); },
            className: "bg-white border border-slate-200 hover:border-amber-500 hover:shadow-lg rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-3xl mb-3 block" }, "🔍"),
            React.createElement("h3", { className: "font-black text-slate-900 text-lg mb-1" }, t.nav.checker),
            React.createElement(
              "p",
              { className: "text-slate-600 text-xs sm:text-sm" },
              lang === "kn" ? "ನಿಮಗೆ ಬಂದ ಸಂದೇಶ ಅಥವಾ ಲಿಂಕ್ ನಕಲಿಯೇ ಎಂದು ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಿ." : (lang === "hi" ? "आए हुए संदिग्ध SMS या व्हाट्सएप संदेश को तुरंत यहां जांचें।" : "Paste any SMS, WhatsApp text, or link to evaluate scam probability.")
            )
          ),
          React.createElement("div", { className: "mt-4 text-amber-600 text-xs font-bold flex items-center space-x-1" }, React.createElement("span", null, t.readMore), React.createElement("span", null, "→"))
        ),

        // 5. Emergency Guide
        React.createElement(
          "div",
          {
            onClick: function() { setCurrentTab("emergency"); },
            className: "bg-red-50 border-2 border-red-300 hover:border-red-600 hover:shadow-lg rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-3xl mb-3 block" }, "🚨"),
            React.createElement("h3", { className: "font-black text-red-900 text-lg mb-1" }, t.nav.emergency),
            React.createElement(
              "p",
              { className: "text-red-700 text-xs sm:text-sm" },
              lang === "kn" ? "ಹಣ ಕಳೆದುಹೋದರೆ 'ಗೋಲ್ಡನ್ ಅವರ್' ನಲ್ಲಿ ಏನು ಮಾಡಬೇಕು? 1930 ಸಹಾಯವಾಣಿ ಮಾಹಿತಿ." : (lang === "hi" ? "पैसे कटने पर 'गोल्डन ऑवर' में क्या करें? 1930 की जरूरी जानकारी।" : "Step-by-step action plan for stolen money, hacked accounts, and 1930.")
            )
          ),
          React.createElement("div", { className: "mt-4 text-red-700 text-xs font-bold flex items-center space-x-1" }, React.createElement("span", null, t.readMore), React.createElement("span", null, "→"))
        ),

        // 6. Chatbot
        React.createElement(
          "div",
          {
            onClick: function() { setCurrentTab("chatbot"); },
            className: "bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-lg rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "text-3xl mb-3 block" }, "🤖"),
            React.createElement("h3", { className: "font-black text-slate-900 text-lg mb-1" }, t.nav.chatbot),
            React.createElement(
              "p",
              { className: "text-slate-600 text-xs sm:text-sm" },
              lang === "kn" ? "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸರಳ ಕನ್ನಡ, ಹಿಂದಿ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಉತ್ತರ ಪಡೆಯಿರಿ." : (lang === "hi" ? "सरल भाषा में साइबर सुरक्षा प्रश्नों के उत्तर और तुरंत मदद पाएं।" : "Ask any question in simple language and receive instant guidance.")
            )
          ),
          React.createElement("div", { className: "mt-4 text-emerald-600 text-xs font-bold flex items-center space-x-1" }, React.createElement("span", null, t.readMore), React.createElement("span", null, "→"))
        )
      )
    )
  );
};
