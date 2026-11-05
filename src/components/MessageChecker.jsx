// Suspicious Message Checker Component: 100% Client-Side Local JavaScript Rules
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.MessageChecker = function MessageChecker(props) {
  var lang = props.lang;
  var checker = window.CyberMessageChecker;
  var samples = checker.sampleMessages || [];

  var [inputText, setInputText] = React.useState("");
  var [analysis, setAnalysis] = React.useState(null);

  var handleRunAnalysis = function(textToAnalyze) {
    var text = textToAnalyze !== undefined ? textToAnalyze : inputText;
    var result = checker.analyze(text);
    setAnalysis(result);
  };

  var handleLoadSample = function(sample) {
    setInputText(sample.text);
    handleRunAnalysis(sample.text);
  };

  var handleClear = function() {
    setInputText("");
    setAnalysis(null);
  };

  return React.createElement(
    "div",
    { className: "max-w-3xl mx-auto space-y-8 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement("span", { className: "text-4xl block mb-2" }, "🔍"),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶ ಪರಿಶೀಲಕ" : (lang === "hi" ? "संदिग्ध संदेश और SMS जांच केंद्र" : "Suspicious Message & SMS Checker")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto" },
        lang === "kn"
          ? "ನಿಮಗೆ ಬಂದ SMS, ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಅಥವಾ ಲಿಂಕ್ ಅನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ. ಸ್ಥಳೀಯ ನಿಯಮಗಳ ಮೂಲಕ ತಕ್ಷಣ ವಿಶ್ಲೇಷಿಸಿ."
          : (lang === "hi"
              ? "आया हुआ SMS, व्हाट्सएप मैसेज या संदिग्ध लिंक यहां पेस्ट करें और धोखाधड़ी की संभावना जांचें।"
              : "Paste any SMS, WhatsApp forward, or web link to analyze threat patterns with 100% offline client-side heuristics.")
      ),
      React.createElement(
        "span",
        { className: "inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mt-3" },
        React.createElement("span", null, "🔒"),
        React.createElement("span", null, lang === "kn" ? "100% ಖಾಸಗಿ — ಬ್ರೌಸರ್‌ನಲ್ಲೇ ವಿಶ್ಲೇಷಣೆ ನಡೆಯುತ್ತದೆ" : (lang === "hi" ? "100% सुरक्षित — विश्लेषण केवल आपके ब्राउज़र में होता है" : "100% Private — Analyzed locally in your browser"))
      )
    ),

    // Quick Test Preset Buttons
    React.createElement(
      "div",
      { className: "bg-white border border-slate-200 rounded-2xl p-4 shadow-sm" },
      React.createElement(
        "p",
        { className: "text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5" },
        lang === "kn" ? "ಪರೀಕ್ಷಿಸಲು ಮಾದರಿ ಸಂದೇಶಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ:" : (lang === "hi" ? "जांचने के लिए नमूना मैसेज चुनें:" : "Try One-Click Sample Messages:")
      ),
      React.createElement(
        "div",
        { className: "flex flex-wrap gap-2" },
        samples.map(function(s) {
          return React.createElement(
            "button",
            {
              key: s.id,
              onClick: function() { handleLoadSample(s); },
              className: "px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all border border-slate-200"
            },
            s.name[lang] || s.name.en
          );
        })
      )
    ),

    // Input Text Area Box
    React.createElement(
      "div",
      { className: "bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center" },
        React.createElement(
          "label",
          { className: "font-black text-slate-900 text-sm sm:text-base flex items-center space-x-2" },
          React.createElement("span", null, "💬"),
          React.createElement("span", null, lang === "kn" ? "ಸಂದೇಶ ಅಥವಾ ಲಿಂಕ್ ಅನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ:" : (lang === "hi" ? "मैसेज या लिंक यहां पेस्ट करें:" : "Paste Message Text or Link:"))
        ),
        inputText.length > 0 && React.createElement(
          "button",
          {
            onClick: handleClear,
            className: "text-xs text-slate-500 hover:text-red-600 font-bold"
          },
          lang === "kn" ? "ಅಳಿಸಿ" : (lang === "hi" ? "साफ करें" : "Clear")
        )
      ),

      React.createElement("textarea", {
        rows: 4,
        value: inputText,
        onChange: function(e) {
          setInputText(e.target.value);
          handleRunAnalysis(e.target.value);
        },
        placeholder: lang === "kn" 
          ? "ಉದಾ: 'ವಿದ್ಯುತ್ ಕಡಿತಗೊಳ್ಳಲಿದೆ, ತಕ್ಷಣ ಈ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ಈ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ...'" 
          : (lang === "hi" 
              ? "उदा: 'आपका बिजली बिल जमा न होने के कारण आज रात 9:30 बजे बिजली काट दी जाएगी...'" 
              : "e.g., 'Dear customer, your electricity will be disconnected tonight at 9:30 PM, call 9845012345 or click bit.ly/update...'"),
        className: "w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-900 text-sm sm:text-base leading-relaxed bg-slate-50/50"
      }),

      React.createElement(
        "button",
        {
          onClick: function() { handleRunAnalysis(); },
          className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2 text-base"
        },
        React.createElement("span", null, "🔍"),
        React.createElement("span", null, lang === "kn" ? "ಈ ಸಂದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ" : (lang === "hi" ? "मैसेज की जांच करें" : "Analyze Message Safety"))
      )
    ),

    // Analysis Results Panel
    analysis && analysis.level !== "EMPTY" && React.createElement(
      "div",
      { className: "space-y-6 animate-fadeIn" },
      
      // Safety Score Meter Card
      React.createElement(
        "div",
        {
          className: "p-6 rounded-3xl border-2 shadow-sm " +
            (analysis.level === "DANGEROUS" 
              ? "bg-red-50 border-red-400 text-red-950" 
              : (analysis.level === "SUSPICIOUS" 
                  ? "bg-amber-50 border-amber-400 text-amber-950" 
                  : "bg-emerald-50 border-emerald-400 text-emerald-950"))
        },
        React.createElement(
          "div",
          { className: "flex items-center space-x-3 mb-2" },
          React.createElement("span", { className: "text-3xl" }, analysis.level === "DANGEROUS" ? "🚨" : (analysis.level === "SUSPICIOUS" ? "⚠️" : "✅")),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              { className: "font-black text-lg sm:text-xl" },
              analysis.level === "DANGEROUS"
                ? (lang === "kn" ? "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ವಂಚನೆಯ ಸಂದೇಶ!" : (lang === "hi" ? "अत्यधिक खतरनाक धोखाधड़ी का संदेश!" : "High-Risk Fraud / Scam Detected!"))
                : (analysis.level === "SUSPICIOUS"
                    ? (lang === "kn" ? "ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶ — ಎಚ್ಚರಿಕೆ ವಹಿಸಿ!" : (lang === "hi" ? "संदिग्ध संदेश — सावधानी बरतें!" : "Suspicious Message — Exercise Caution!"))
                    : (lang === "kn" ? "ಯಾವುದೇ ಸ್ಪಷ್ಟ ವಂಚನೆಯ ಲಕ್ಷಣ ಕಂಡುಬಂದಿಲ್ಲ" : (lang === "hi" ? "कोई सीधा खतरा नहीं पाया गया" : "No Obvious Scam Signals Detected"))
            ),
            React.createElement(
              "p",
              { className: "text-xs font-bold opacity-80" },
              "Threat Score: " + analysis.score + "/100 • Flags Triggered: " + analysis.count
            )
          )
        ),
        React.createElement(
          "p",
          { className: "text-sm sm:text-base leading-relaxed mt-2" },
          analysis.level === "DANGEROUS"
            ? (lang === "kn" ? "ಈ ಸಂದೇಶದಲ್ಲಿರುವ ಲಿಂಕ್ ಅನ್ನು ಎಂದಿಗೂ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ ಅಥವಾ ನೀಡಿರುವ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಬೇಡಿ. ಇದನ್ನು ತಕ್ಷಣವೇ ಬ್ಲಾಕ್ ಮಾಡಿ." : (lang === "hi" ? "इस मैसेज में आए किसी भी लिंक पर क्लिक न करें और न ही दिए गए नंबर पर फोन करें। इसे तुरंत ब्लॉक करें।" : "Do NOT click any link or call the number in this message. Delete, block, and report immediately."))
            : (analysis.level === "SUSPICIOUS"
                ? (lang === "kn" ? "ಈ ಸಂದೇಶದಲ್ಲಿ ಕೆಲವು ಸಂಶಯಾಸ್ಪದ ಅಂಶಗಳಿವೆ. ಅಧಿಕೃತ ಆಪ್ ಮೂಲಕ ಪರಿಶೀಲಿಸದೆ ಯಾವುದೇ ಕ್ರಮ ಕೈಗೊಳ್ಳಬೇಡಿ." : (lang === "hi" ? "इस संदेश में कुछ संदिग्ध बातें पाई गई हैं। आधिकारिक स्रोत से जांचे बिना कोई कदम न उठाएं।" : "This message exhibits questionable patterns. Independently verify with the organization's official website."))
                : (lang === "kn" ? "ಈ ಸಂದೇಶದಲ್ಲಿ ಸ್ಪಷ್ಟ ವಂಚನೆಯ ಅಂಶಗಳಿಲ್ಲ. ಆದಾಗ್ಯೂ ಯಾವುದೇ ಬ್ಯಾಂಕ್ OTP ಅಥವಾ PIN ಅನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ." : (lang === "hi" ? "यह सामान्य मैसेज प्रतीत होता है। फिर भी कभी किसी के साथ अपना OTP या पिन साझा न करें।" : "While no common scam triggers were matched, always remember never to disclose OTPs or UPI PINs to anyone."))
        )
      ),

      // Matched Red Flags Breakdown
      analysis.matchedRules.length > 0 && React.createElement(
        "div",
        { className: "bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm space-y-4" },
        React.createElement(
          "h4",
          { className: "text-base font-black text-slate-900 flex items-center space-x-2" },
          React.createElement("span", null, "🚩"),
          React.createElement("span", null, lang === "kn" ? "ಪತ್ತೆಯಾದ ಕೆಂಪು ಎಚ್ಚರಿಕೆಗಳು (Detected Red Flags):" : (lang === "hi" ? "पहचाने गए खतरे के संकेत (Detected Red Flags):" : "Detected Scam Indicators:"))
        ),
        React.createElement(
          "div",
          { className: "space-y-3" },
          analysis.matchedRules.map(function(rule) {
            return React.createElement(
              "div",
              { key: rule.id, className: "bg-slate-50 border border-slate-200 rounded-2xl p-4" },
              React.createElement(
                "div",
                { className: "flex items-center space-x-2 mb-1" },
                React.createElement(
                  "span",
                  { className: "text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full " + (rule.severity === "CRITICAL" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800") },
                  rule.severity
                ),
                React.createElement("p", { className: "font-black text-slate-900 text-sm sm:text-base" }, rule.label[lang] || rule.label.en)
              ),
              React.createElement("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed mt-1" }, rule.explanation[lang] || rule.explanation.en)
            );
          })
        )
      )
    )
  );
};
