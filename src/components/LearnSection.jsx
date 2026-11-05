// Learn Section Component: Phishing, UPI/OTP, Fake Jobs, Digital Arrest, QR Scams, Social Media
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.LearnSection = function LearnSection(props) {
  var lang = props.lang;
  var playAudio = props.playAudio;
  var stopAudio = props.stopAudio;
  var isSpeaking = props.isSpeaking;

  var t = window.CYBER_TRANSLATIONS[lang] || window.CYBER_TRANSLATIONS.en;
  var scams = window.CYBER_SCAMS_DATA || [];

  var [activeFilter, setActiveFilter] = React.useState("all");

  var filteredScams = activeFilter === "all" 
    ? scams 
    : scams.filter(function(s) { return s.id === activeFilter; });

  return React.createElement(
    "div",
    { className: "space-y-8 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center max-w-3xl mx-auto" },
      React.createElement("span", { className: "text-4xl block mb-2" }, "📚"),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ಪ್ರಮುಖ ಸೈಬರ್ ವಂಚನೆಗಳು ಮತ್ತು ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು" : (lang === "hi" ? "प्रमुख साइबर धोखाधड़ी और उनसे बचाव" : "Understanding Major Cyber Scams & Frauds")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-2" },
        lang === "kn" 
          ? "ನೈಜ ಉದಾಹರಣೆಗಳು, ಕೆಂಪು ಎಚ್ಚರಿಕೆಯ ಸಂಕೇತಗಳು ಮತ್ತು ಮಾಡಬೇಕಾದ ಹಾಗೂ ಮಾಡಬಾರದ ಸರಳ ನಿಯಮಗಳನ್ನು ಕಲಿಯಿರಿ." 
          : (lang === "hi" 
              ? "वास्तविक उदाहरणों, खतरे के संकेतों और क्या करें व क्या न करें के जरूरी नियमों को समझें।" 
              : "Explore real-world case studies, warning signs, and crystal-clear Do's and Don'ts.")
      )
    ),

    // Filter Buttons
    React.createElement(
      "div",
      { className: "flex flex-wrap items-center justify-center gap-2" },
      React.createElement(
        "button",
        {
          onClick: function() { setActiveFilter("all"); },
          className: "px-4 py-2 rounded-xl text-sm font-bold transition-all " +
            (activeFilter === "all" ? "bg-blue-600 text-white shadow" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100")
        },
        lang === "kn" ? "ಎಲ್ಲಾ ವಂಚನೆಗಳು" : (lang === "hi" ? "सभी घोटाले" : "All Scams")
      ),
      scams.map(function(s) {
        var isCurrent = activeFilter === s.id;
        return React.createElement(
          "button",
          {
            key: s.id,
            onClick: function() { setActiveFilter(s.id); },
            className: "px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center space-x-1.5 " +
              (isCurrent ? "bg-blue-600 text-white shadow" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100")
          },
          React.createElement("span", null, s.icon),
          React.createElement("span", null, s.title[lang] ? s.title[lang].split("(")[0] : s.title.en.split("(")[0])
        );
      })
    ),

    // Scams Cards List
    React.createElement(
      "div",
      { className: "space-y-8" },
      filteredScams.map(function(scam) {
        var scamTitle = scam.title[lang] || scam.title.en;
        var scamShortDesc = scam.shortDesc[lang] || scam.shortDesc.en;
        var scamScenario = scam.realScenario[lang] || scam.realScenario.en;
        var scamRedFlags = scam.redFlags[lang] || scam.redFlags.en;
        var scamDos = scam.dosAndDonts.dos[lang] || scam.dosAndDonts.dos.en;
        var scamDonts = scam.dosAndDonts.donts[lang] || scam.dosAndDonts.donts.en;

        var handleScamListen = function() {
          var textToRead = scamTitle + ". " + scamShortDesc + ". Real Story: " + scamScenario;
          playAudio(textToRead, lang);
        };

        return React.createElement(
          "div",
          {
            key: scam.id,
            id: scam.id,
            className: "bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
          },
          
          // Header with Icon and Speech Button
          React.createElement(
            "div",
            { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5" },
            React.createElement(
              "div",
              { className: "flex items-center space-x-3" },
              React.createElement("span", { className: "text-4xl p-2.5 bg-blue-50 rounded-2xl" }, scam.icon),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h2",
                  { className: "text-xl sm:text-2xl font-black text-slate-900" },
                  scamTitle
                ),
                React.createElement(
                  "p",
                  { className: "text-slate-600 text-sm mt-0.5" },
                  scamShortDesc
                )
              )
            ),
            React.createElement(
              "button",
              {
                onClick: isSpeaking ? stopAudio : handleScamListen,
                className: "self-start sm:self-center inline-flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-xl text-xs sm:text-sm border border-slate-300 transition-all flex-shrink-0"
              },
              React.createElement("span", null, isSpeaking ? "⏹️" : "🔊"),
              React.createElement("span", null, isSpeaking ? t.stopAudio : t.listenAudio)
            )
          ),

          // Real Scenario Story Box
          React.createElement(
            "div",
            { className: "bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6" },
            React.createElement(
              "div",
              { className: "flex items-center space-x-2 text-slate-800 font-black text-sm uppercase tracking-wider mb-2" },
              React.createElement("span", null, "📖"),
              React.createElement("span", null, lang === "kn" ? "ನೈಜ ಘಟನೆಯ ಸನ್ನಿವೇಶ" : (lang === "hi" ? "वास्तविक घटना का उदाहरण" : "Real-Life Scam Story"))
            ),
            React.createElement(
              "p",
              { className: "text-slate-700 text-sm sm:text-base leading-relaxed italic" },
              "“" + scamScenario + "”"
            )
          ),

          // Red Flags Section
          React.createElement(
            "div",
            { className: "mb-6" },
            React.createElement(
              "h3",
              { className: "text-sm font-black text-rose-700 uppercase tracking-wider mb-3 flex items-center space-x-1.5" },
              React.createElement("span", null, "🚩"),
              React.createElement("span", null, lang === "kn" ? "ಗುರುತಿಸಬೇಕಾದ ಅಪಾಯಕಾರಿ ಎಚ್ಚರಿಕೆಗಳು (Red Flags)" : (lang === "hi" ? "पहचानने योग्य खतरे के संकेत (Red Flags)" : "Critical Red Flags to Spot"))
            ),
            React.createElement(
              "ul",
              { className: "grid grid-cols-1 md:grid-cols-2 gap-2.5" },
              scamRedFlags.map(function(rf, i) {
                return React.createElement(
                  "li",
                  { key: i, className: "bg-rose-50/60 border border-rose-200 rounded-xl p-3 text-xs sm:text-sm text-rose-950 flex items-start space-x-2 font-medium" },
                  React.createElement("span", { className: "text-rose-500 font-bold flex-shrink-0" }, "⚠️"),
                  React.createElement("span", null, rf)
                );
              })
            )
          ),

          // Dos and Don'ts side by side
          React.createElement(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 gap-5" },
            
            // DOs (Green)
            React.createElement(
              "div",
              { className: "bg-emerald-50/70 border-2 border-emerald-300 rounded-2xl p-5" },
              React.createElement(
                "h4",
                { className: "text-emerald-900 font-black text-base flex items-center space-x-2 mb-3" },
                React.createElement("span", { className: "bg-emerald-200 text-emerald-800 p-1 rounded-lg text-sm" }, "✓"),
                React.createElement("span", null, lang === "kn" ? "ಮಾಡಬೇಕಾದ ರಕ್ಷಣಾ ಕ್ರಮಗಳು (What to Do)" : (lang === "hi" ? "क्या करें (What to Do)" : "Safe Actions (What to Do)"))
              ),
              React.createElement(
                "ul",
                { className: "space-y-2.5 text-xs sm:text-sm text-emerald-950" },
                scamDos.map(function(item, idx) {
                  return React.createElement(
                    "li",
                    { key: idx, className: "flex items-start space-x-2" },
                    React.createElement("span", { className: "text-emerald-600 font-bold mt-0.5" }, "•"),
                    React.createElement("span", null, item)
                  );
                })
              )
            ),

            // DONTs (Red)
            React.createElement(
              "div",
              { className: "bg-red-50/70 border-2 border-red-300 rounded-2xl p-5" },
              React.createElement(
                "h4",
                { className: "text-red-900 font-black text-base flex items-center space-x-2 mb-3" },
                React.createElement("span", { className: "bg-red-200 text-red-800 p-1 rounded-lg text-sm" }, "✕"),
                React.createElement("span", null, lang === "kn" ? "ಖಂಡಿತವಾಗಿಯೂ ಮಾಡಬಾರದ ತಪ್ಪುಗಳು (What Never to Do)" : (lang === "hi" ? "क्या कभी न करें (What Never to Do)" : "Dangerous Traps (What Never to Do)"))
              ),
              React.createElement(
                "ul",
                { className: "space-y-2.5 text-xs sm:text-sm text-red-950" },
                scamDonts.map(function(item, idx) {
                  return React.createElement(
                    "li",
                    { key: idx, className: "flex items-start space-x-2" },
                    React.createElement("span", { className: "text-red-600 font-bold mt-0.5" }, "•"),
                    React.createElement("span", null, item)
                  );
                })
              )
            )
          )
        );
      })
    )
  );
};
