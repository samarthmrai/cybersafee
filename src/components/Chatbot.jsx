// AI-Powered Cyber Safety Chatbot Component (CyberMitra)
// Communicates with secure backend /api/chat (keeps API keys 100% on server)
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.Chatbot = function Chatbot(props) {
  var lang = props.lang;
  var playAudio = props.playAudio;
  var stopAudio = props.stopAudio;
  var isSpeaking = props.isSpeaking;

  var botEngine = window.CyberBotEngine || {};
  var suggestedQs = [
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
        hi: "⚖️ क्या पुलिस वीडियो कॉल पर डिजिटल अरेस्ट कर सकती है?"
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
      id: "q_check_msg",
      text: {
        en: "🔍 Can you analyze a suspicious SMS for me?",
        kn: "🔍 ನನಗೆ ಬಂದ ಒಂದು ಅನುಮಾನಾಸ್ಪದ SMS ಅನ್ನು ವಿಶ್ಲೇಷಿಸಿ?",
        hi: "🔍 क्या आप एक संदिग्ध SMS की जांच करके बता सकते हैं?"
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
  ];

  // Initial greeting
  var getInitialGreeting = function(l) {
    if (l === "kn") {
      return "ನಮಸ್ಕಾರ! ನಾನು **ಸೈಬರ್ ಮಿತ್ರ (CyberMitra)**, ನಿಮ್ಮ ಎಐ ಸೈಬರ್ ಸುರಕ್ಷತಾ ಸಹಾಯಕ.\n\nಆನ್‌ಲೈನ್ ವಂಚನೆಗಳು, ನಕಲಿ ಸಂದೇಶಗಳು, UPI ನಿಯಮಗಳು ಅಥವಾ ತುರ್ತು ಸಹಾಯದ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ. ನಾನು ನಿಮಗೆ ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.\n\n⚠️ ನೆನಪಿಡಿ: ನಿಮ್ಮ OTP ಅಥವಾ UPI PIN ಅನ್ನು ಎಂದಿಗೂ ಇಲ್ಲಿ ನಮೂದಿಸಬೇಡಿ!";
    } else if (l === "hi") {
      return "नमस्ते! मैं हूँ **साइबर मित्र (CyberMitra)**, आपका एआई साइबर सुरक्षा सहायक।\n\nऑनलाइन धोखाधड़ी, फर्जी संदेश, यूपीआई नियम या आपातकालीन मदद के बारे में कोई भी सवाल पूछें। मैं सरल भाषा में आपका मार्गदर्शन करूँगा।\n\n⚠️ ध्यान दें: अपना OTP या UPI PIN कभी भी यहां टाइप न करें!";
    }
    return "Hello! I am **CyberMitra**, your AI-powered Cyber Safety Guide.\n\nAsk me anything about online fraud, suspicious messages, UPI safety, digital arrest scams, or emergency help. I explain everything in simple, jargon-free language.\n\n⚠️ Note: Never type your passwords, OTP, or UPI PIN here or anywhere online!";
  };

  var [messages, setMessages] = React.useState(function() {
    return [
      {
        id: "msg_init",
        sender: "bot",
        text: getInitialGreeting(lang),
        isEmergency: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  var [inputText, setInputText] = React.useState("");
  var [isLoading, setIsLoading] = React.useState(false);
  var chatEndRef = React.useRef(null);

  // Auto-scroll to bottom of chat
  React.useEffect(function() {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  var handleSendMessage = async function(textToSend) {
    var text = textToSend !== undefined ? textToSend : inputText;
    if (!text || text.trim().length === 0 || isLoading) return;

    var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    var userMsg = {
      id: "u_" + Date.now(),
      sender: "user",
      text: text,
      isEmergency: false,
      time: currentTime
    };

    setMessages(function(prev) { return prev.concat(userMsg); });
    setInputText("");
    setIsLoading(true);

    try {
      // Call backend AI endpoint
      var res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          language: lang
        })
      });

      if (res.ok) {
        var data = await res.json();
        var botMsg = {
          id: "b_" + Date.now(),
          sender: "bot",
          text: data.reply,
          isEmergency: !!data.is_emergency,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          provider: data.provider
        };
        setMessages(function(prev) { return prev.concat(botMsg); });
      } else {
        throw new Error("Backend response error: " + res.status);
      }
    } catch (err) {
      console.warn("AI Backend request failed, utilizing local fallback engine:", err);
      // Fallback to local rule-based knowledge engine
      var localMatched = botEngine.processQuery ? botEngine.processQuery(text) : null;
      var fallbackText = localMatched && localMatched.text ? (localMatched.text[lang] || localMatched.text.en) : "I am here to help you stay safe from digital fraud. In an emergency or if money was lost, call 1930 immediately or visit cybercrime.gov.in.";
      var isEmerg = localMatched ? !!localMatched.isEmergency : false;

      var botFallbackMsg = {
        id: "b_" + Date.now(),
        sender: "bot",
        text: fallbackText,
        isEmergency: isEmerg,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        provider: "offline_knowledge_base"
      };
      setMessages(function(prev) { return prev.concat(botFallbackMsg); });
    } finally {
      setIsLoading(false);
    }
  };

  var handleKeyDown = function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  var handleClearChat = function() {
    stopAudio();
    setMessages([
      {
        id: "msg_reset_" + Date.now(),
        sender: "bot",
        text: getInitialGreeting(lang),
        isEmergency: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return React.createElement(
    "div",
    { className: "max-w-4xl mx-auto space-y-6 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement(
        "div",
        { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 shadow" },
        React.createElement("span", null, "✨"),
        React.createElement("span", null, "AI-Powered Cyber Safety Assistant")
      ),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ಸೈಬರ್ ಮಿತ್ರ (CyberMitra) ಎಐ ಸಹಾಯಕ" : (lang === "hi" ? "साइबर मित्र (CyberMitra) एआई सहायक" : "CyberMitra AI Safety Assistant")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-1 max-w-xl mx-auto" },
        lang === "kn"
          ? "ಸೈಬರ್ ಭದ್ರತೆ, ನಕಲಿ ಕರೆಗಳು, ಆನ್‌ಲೈನ್ ವಂಚನೆ ಅಥವಾ ತುರ್ತು ಸಹಾಯದ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ."
          : (lang === "hi"
              ? "साइबर फ्रॉड, संदिग्ध मैसेज, डिजिटल अरेस्ट या पैसे कटने पर सरल भाषा में तुरंत सही सलाह पाएं।"
              : "Ask any cybersecurity question, analyze suspicious messages, or get immediate emergency guidance in simple language.")
      )
    ),

    // Top Disclaimer Banner
    React.createElement(
      "div",
      { className: "bg-blue-50/80 border border-blue-200 rounded-2xl p-3.5 text-xs text-blue-950 font-medium flex items-center justify-between gap-2 shadow-sm" },
      React.createElement(
        "div",
        { className: "flex items-center space-x-2" },
        React.createElement("span", { className: "text-lg flex-shrink-0" }, "🛡️"),
        React.createElement(
          "span",
          null,
          lang === "kn"
            ? "ಶೈಕ್ಷಣಿಕ ಎಚ್ಚರಿಕೆ: ಸೈಬರ್ ಮಿತ್ರ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಅಧಿಕೃತ ದೂರಿಗೆ 1930 ಅಥವಾ cybercrime.gov.in ಸಂಪರ್ಕಿಸಿ. ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ OTP ಹಂಚಿಕೊಳ್ಳಬೇಡಿ."
            : (lang === "hi"
                ? "शैक्षणिक सूचना: साइबर मित्र मार्गदर्शन प्रदान करता है। आधिकारिक शिकायत के लिए 1930 डायल करें। पासवर्ड या OTP कभी न बताएं।"
                : "Educational Guidance Only: CyberMitra provides awareness. For official reporting, contact 1930 or cybercrime.gov.in. Never share passwords or OTPs.")
        )
      ),
      React.createElement(
        "button",
        {
          onClick: handleClearChat,
          className: "text-xs font-bold text-slate-500 hover:text-red-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200 flex-shrink-0"
        },
        lang === "kn" ? "ಚಾಟ್ ಅಳಿಸಿ" : (lang === "hi" ? "चैट रीसेट" : "Reset Chat")
      )
    ),

    // Suggested Questions Chips
    React.createElement(
      "div",
      { className: "bg-white border border-slate-200 rounded-2xl p-4 shadow-sm" },
      React.createElement(
        "p",
        { className: "text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center space-x-1" },
        React.createElement("span", null, "💡"),
        React.createElement("span", null, lang === "kn" ? "ಪ್ರಾರಂಭಿಸಲು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:" : (lang === "hi" ? "शुरू करने के लिए एक सवाल चुनें:" : "Suggested Questions to Ask CyberMitra:"))
      ),
      React.createElement(
        "div",
        { className: "flex flex-wrap gap-2" },
        suggestedQs.map(function(q) {
          var qText = q.text[lang] || q.text.en;
          return React.createElement(
            "button",
            {
              key: q.id,
              disabled: isLoading,
              onClick: function() { handleSendMessage(qText); },
              className: "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-800 transition-all border border-slate-200 text-left shadow-xs hover:border-blue-300"
            },
            qText
          );
        })
      )
    ),

    // Modern Chat Window Container
    React.createElement(
      "div",
      { className: "bg-white border-2 border-slate-200 rounded-3xl shadow-sm flex flex-col h-[560px] overflow-hidden" },
      
      // Chat Window Header
      React.createElement(
        "div",
        { className: "bg-slate-900 text-white p-3.5 sm:px-6 flex items-center justify-between border-b border-slate-800" },
        React.createElement(
          "div",
          { className: "flex items-center space-x-3" },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xl shadow" }, "🤖"),
            React.createElement("span", { className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "font-black text-sm sm:text-base leading-tight" }, "CyberMitra AI"),
            React.createElement("p", { className: "text-[11px] text-emerald-400 font-semibold" }, "Online • Ready to Help in EN / KN / HI")
          )
        ),
        React.createElement(
          "a",
          {
            href: "tel:1930",
            className: "bg-red-600 hover:bg-red-700 text-white font-black px-3 py-1 rounded-xl text-xs flex items-center space-x-1 shadow transition-all"
          },
          React.createElement("span", null, "📞"),
          React.createElement("span", null, "Helpline 1930")
        )
      ),

      // Messages Area
      React.createElement(
        "div",
        { className: "flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/70" },
        messages.map(function(msg) {
          var isBot = msg.sender === "bot";
          return React.createElement(
            "div",
            {
              key: msg.id,
              className: "flex items-start space-x-3 " + (isBot ? "justify-start" : "justify-end")
            },
            isBot && React.createElement(
              "div",
              { className: "w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow mt-1" },
              "🤖"
            ),
            React.createElement(
              "div",
              {
                className: "max-w-[88%] sm:max-w-[78%] p-4 rounded-2xl text-sm sm:text-base leading-relaxed shadow-sm " +
                  (isBot 
                    ? (msg.isEmergency 
                        ? "bg-red-50/90 border-2 border-red-400 text-red-950 font-medium" 
                        : "bg-white border border-slate-200 text-slate-900") 
                    : "bg-blue-600 text-white font-medium rounded-br-none")
              },
              
              // Bubble Text
              React.createElement(
                "div",
                { className: "whitespace-pre-wrap space-y-2" },
                msg.text
              ),

              // Emergency Banner if detected
              msg.isEmergency && React.createElement(
                "div",
                { className: "mt-4 pt-3 border-t border-red-300/80 bg-red-100/60 p-3 rounded-xl space-y-2" },
                React.createElement(
                  "p",
                  { className: "text-xs font-black text-red-900 uppercase tracking-wider flex items-center space-x-1" },
                  React.createElement("span", null, "🚨"),
                  React.createElement("span", null, "Immediate Emergency Action:")
                ),
                React.createElement(
                  "div",
                  { className: "flex flex-wrap gap-2 pt-1" },
                  React.createElement(
                    "a",
                    {
                      href: "tel:1930",
                      className: "inline-flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white font-black px-4 py-2 rounded-xl text-xs sm:text-sm shadow"
                    },
                    React.createElement("span", null, "📞"),
                    React.createElement("span", null, "Call 1930 Now (Toll Free)")
                  ),
                  React.createElement(
                    "a",
                    {
                      href: "https://cybercrime.gov.in/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-3.5 py-2 rounded-xl text-xs sm:text-sm shadow"
                    },
                    React.createElement("span", null, "🌐"),
                    React.createElement("span", null, "cybercrime.gov.in ↗")
                  )
                )
              ),

              // Bottom row: time and voice audio read-aloud
              React.createElement(
                "div",
                { className: "mt-2 pt-1 flex items-center justify-between text-[11px] " + (isBot ? "text-slate-400" : "text-blue-100") },
                React.createElement("span", null, msg.time || ""),
                isBot && React.createElement(
                  "button",
                  {
                    onClick: function() {
                      if (isSpeaking) {
                        stopAudio();
                      } else {
                        var cleanText = msg.text.replace(/[*#_`]/g, '');
                        playAudio(cleanText, lang);
                      }
                    },
                    className: "text-slate-500 hover:text-blue-600 font-semibold flex items-center space-x-1 ml-auto"
                  },
                  React.createElement("span", null, isSpeaking ? "⏹️ Stop" : "🔊 Listen")
                )
              )
            ),
            !isBot && React.createElement(
              "div",
              { className: "w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow mt-1" },
              "👤"
            )
          );
        }),

        // Typing Indicator Animation
        isLoading && React.createElement(
          "div",
          { className: "flex items-start space-x-3 justify-start animate-fadeIn" },
          React.createElement(
            "div",
            { className: "w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow mt-1" },
            "🤖"
          ),
          React.createElement(
            "div",
            { className: "bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2" },
            React.createElement("span", { className: "text-xs font-bold text-slate-500" }, "CyberMitra is thinking"),
            React.createElement(
              "div",
              { className: "flex space-x-1" },
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-600 animate-bounce", style: { animationDelay: "0ms" } }),
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-600 animate-bounce", style: { animationDelay: "150ms" } }),
              React.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-600 animate-bounce", style: { animationDelay: "300ms" } })
            )
          )
        ),
        React.createElement("div", { ref: chatEndRef })
      ),

      // Input Row
      React.createElement(
        "div",
        { className: "p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center space-x-2" },
        React.createElement("input", {
          type: "text",
          disabled: isLoading,
          value: inputText,
          onChange: function(e) { setInputText(e.target.value); },
          onKeyDown: handleKeyDown,
          placeholder: lang === "kn" 
            ? "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ (ಉದಾ: 'ನಕಲಿ ಉದ್ಯೋಗ ಹೇಗೆ ಗುರುತಿಸುವುದು?')..." 
            : (lang === "hi" 
                ? "अपना प्रश्न यहां पूछें (उदा: 'बिजली बिल कटने का मैसेज आया है, क्या करूँ?')..." 
                : "Ask CyberMitra anything (e.g. 'Someone sent a QR code to pay me, is it safe?')..."),
          className: "flex-1 px-4 py-3 rounded-2xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 text-slate-900 text-sm sm:text-base bg-slate-50/70"
        }),
        React.createElement(
          "button",
          {
            disabled: isLoading || inputText.trim().length === 0,
            onClick: function() { handleSendMessage(); },
            className: "bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-black px-5 sm:px-7 py-3 rounded-2xl shadow transition-all flex items-center space-x-1.5 text-sm sm:text-base flex-shrink-0"
          },
          React.createElement("span", null, "Send"),
          React.createElement("span", null, "➤")
        )
      )
    )
  );
};
