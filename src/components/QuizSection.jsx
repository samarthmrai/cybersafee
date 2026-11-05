// Cyber Safety Quiz Component: 10 Questions, Progress, Scoring, and Certificate
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.QuizSection = function QuizSection(props) {
  var lang = props.lang;
  var setCurrentTab = props.setCurrentTab;
  var questions = window.CYBER_QUIZ_DATA || [];

  var [currentIndex, setCurrentIndex] = React.useState(0);
  var [selectedAnswer, setSelectedAnswer] = React.useState(null);
  var [score, setScore] = React.useState(0);
  var [isFinished, setIsFinished] = React.useState(false);
  var [certificateName, setCertificateName] = React.useState("");
  var [showCertificate, setShowCertificate] = React.useState(false);

  var currentQ = questions[currentIndex];

  var handleSelect = function(optionIndex) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === currentQ.correctAnswer) {
      setScore(function(prev) { return prev + 1; });
    }
  };

  var handleNext = function() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  var handleRestart = function() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setShowCertificate(false);
  };

  // Certificate Modal / View
  if (showCertificate) {
    return React.createElement(
      "div",
      { className: "max-w-3xl mx-auto space-y-6 pb-12" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm" },
        React.createElement(
          "button",
          {
            onClick: function() { setShowCertificate(false); },
            className: "text-slate-600 hover:text-slate-900 font-bold text-sm flex items-center space-x-1"
          },
          React.createElement("span", null, "←"),
          React.createElement("span", null, lang === "kn" ? "ಹಿಂದಕ್ಕೆ ಹೋಗಿ" : (lang === "hi" ? "वापस जाएं" : "Back to Results"))
        ),
        React.createElement(
          "button",
          {
            onClick: function() { window.print(); },
            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-sm shadow flex items-center space-x-2"
          },
          React.createElement("span", null, "🖨️"),
          React.createElement("span", null, lang === "kn" ? "ಪ್ರಿಂಟ್ / PDF ಡೌನ್‌ಲೋಡ್" : (lang === "hi" ? "प्रिंट / PDF डाउनलोड" : "Print / Save PDF"))
        )
      ),

      // Printable Certificate Card
      React.createElement(
        "div",
        {
          id: "certificate-print-area",
          className: "bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40 border-8 border-double border-amber-600/60 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative"
        },
        React.createElement(
          "div",
          { className: "w-16 h-16 mx-auto rounded-2xl bg-amber-600 text-white flex items-center justify-center text-3xl shadow-md mb-4" },
          "🛡️"
        ),
        React.createElement(
          "p",
          { className: "text-xs uppercase tracking-widest text-amber-800 font-bold mb-1" },
          "CyberSafe National Awareness Initiative"
        ),
        React.createElement(
          "h1",
          { className: "text-2xl sm:text-4xl font-serif font-black text-slate-900 mb-4" },
          "Certificate of Cyber Safety Awareness"
        ),
        React.createElement(
          "p",
          { className: "text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-6" },
          "This is proudly presented to verify that"
        ),
        React.createElement(
          "div",
          { className: "border-b-2 border-slate-900 max-w-md mx-auto pb-2 mb-6" },
          React.createElement(
            "h2",
            { className: "text-xl sm:text-3xl font-serif font-bold text-blue-900 tracking-wide capitalize" },
            certificateName.trim() || (lang === "kn" ? "ಗೌರವಾನ್ವಿತ ಸೈಬರ್ ನಾಗರಿಕ" : (lang === "hi" ? "जागरूक साइबर नागरिक" : "Dedicated Digital Citizen"))
          )
        ),
        React.createElement(
          "p",
          { className: "text-slate-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-medium" },
          "has successfully completed the CyberSafe Public Digital Safety Assessment, scoring " + (score * 10) + "% on fraud prevention, UPI safety, digital arrest awareness, and emergency response procedures."
        ),
        React.createElement(
          "div",
          { className: "flex justify-between items-end border-t border-slate-200 pt-6 text-xs text-slate-500 max-w-lg mx-auto" },
          React.createElement(
            "div",
            { className: "text-left" },
            React.createElement("p", { className: "font-bold text-slate-800" }, "Helpline Verification"),
            React.createElement("p", null, "National Portal: 1930 / cybercrime.gov.in")
          ),
          React.createElement(
            "div",
            { className: "text-right" },
            React.createElement("p", { className: "font-bold text-slate-800" }, "Date of Issue"),
            React.createElement("p", null, new Date().toLocaleDateString())
          )
        )
      )
    );
  }

  // Quiz Finished Screen
  if (isFinished) {
    var percentage = Math.round((score / questions.length) * 100);
    var badgeText = "Cyber Shield Master 🛡️";
    var badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
    if (percentage < 50) {
      badgeText = "Cyber Novice 📘";
      badgeColor = "bg-amber-100 text-amber-800 border-amber-300";
    } else if (percentage < 80) {
      badgeText = "Smart Digital Citizen 🌟";
      badgeColor = "bg-blue-100 text-blue-800 border-blue-300";
    }

    return React.createElement(
      "div",
      { className: "max-w-2xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg text-center" },
      React.createElement("span", { className: "text-6xl block mb-4" }, percentage >= 80 ? "🎉" : "🛡️"),
      React.createElement(
        "h2",
        { className: "text-2xl sm:text-3xl font-black text-slate-900 mb-2" },
        lang === "kn" ? "ಕ್ವಿಜ್ ಪೂರ್ಣಗೊಂಡಿದೆ!" : (lang === "hi" ? "क्विज़ पूरा हुआ!" : "Quiz Completed!")
      ),
      React.createElement(
        "div",
        { className: "inline-block px-4 py-1.5 rounded-full text-sm font-black border my-3 " + badgeColor },
        badgeText
      ),
      React.createElement(
        "div",
        { className: "bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6" },
        React.createElement("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider mb-1" }, "Your Score"),
        React.createElement("p", { className: "text-4xl sm:text-5xl font-black text-slate-900" }, score + " / " + questions.length),
        React.createElement("p", { className: "text-sm text-slate-600 mt-1 font-bold" }, percentage + "% Cyber Awareness Rating")
      ),

      // Name input for certificate
      React.createElement(
        "div",
        { className: "bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6 text-left" },
        React.createElement(
          "label",
          { className: "block text-xs font-extrabold text-blue-900 uppercase tracking-wider mb-1" },
          lang === "kn" ? "ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ ಹೆಸರು ನಮೂದಿಸಿ:" : (lang === "hi" ? "अपने प्रमाण पत्र के लिए नाम दर्ज करें:" : "Enter your name for Certificate:")
        ),
        React.createElement("input", {
          type: "text",
          placeholder: lang === "kn" ? "ಉದಾ: ರಮೇಶ್ ಕುಮಾರ್" : (lang === "hi" ? "उदा: राहुल शर्मा" : "e.g. Samarth Rai"),
          value: certificateName,
          onChange: function(e) { setCertificateName(e.target.value); },
          className: "w-full px-4 py-2.5 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-white"
        }),
        React.createElement(
          "button",
          {
            onClick: function() { setShowCertificate(true); },
            className: "w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-black py-2.5 rounded-xl shadow transition-all flex items-center justify-center space-x-2 text-sm"
          },
          React.createElement("span", null, "📜"),
          React.createElement("span", null, lang === "kn" ? "ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ" : (lang === "hi" ? "प्रमाण पत्र देखें" : "View & Download Certificate"))
        )
      ),

      // Actions
      React.createElement(
        "div",
        { className: "flex flex-wrap justify-center gap-3" },
        React.createElement(
          "button",
          {
            onClick: handleRestart,
            className: "bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
          },
          lang === "kn" ? "ಮತ್ತೊಮ್ಮೆ ರಸಪ್ರಶ್ನೆ ಆಡಿ" : (lang === "hi" ? "क्विज़ दोबारा खेलें" : "Retake Quiz")
        ),
        React.createElement(
          "button",
          {
            onClick: function() { setCurrentTab("checklist"); },
            className: "bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow transition-all text-sm flex items-center space-x-1"
          },
          React.createElement("span", null, "✅"),
          React.createElement("span", null, lang === "kn" ? "ಸುರಕ್ಷತಾ ಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ" : (lang === "hi" ? "सुरक्षा चेकलिस्ट देखें" : "View Safety Checklist"))
        )
      )
    );
  }

  // Active Question Card
  var qTitle = currentQ.question[lang] || currentQ.question.en;
  var qOptions = currentQ.options[lang] || currentQ.options.en;
  var qExpl = currentQ.explanation[lang] || currentQ.explanation.en;

  return React.createElement(
    "div",
    { className: "max-w-3xl mx-auto space-y-6 pb-12" },
    
    // Header & Progress
    React.createElement(
      "div",
      { className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider" },
        React.createElement("span", null, lang === "kn" ? "ಪ್ರಶ್ನೆ " + (currentIndex + 1) + " / " + questions.length : (lang === "hi" ? "प्रश्न " + (currentIndex + 1) + " / " + questions.length : "Question " + (currentIndex + 1) + " of " + questions.length)),
        React.createElement("span", { className: "text-blue-600 font-black" }, "Score: " + score)
      ),
      React.createElement(
        "div",
        { className: "w-full bg-slate-100 rounded-full h-2.5 overflow-hidden" },
        React.createElement("div", {
          className: "bg-blue-600 h-2.5 rounded-full transition-all duration-300",
          style: { width: ((currentIndex + 1) / questions.length) * 100 + "%" }
        })
      )
    ),

    // Question Box
    React.createElement(
      "div",
      { className: "bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm" },
      React.createElement(
        "h2",
        { className: "text-lg sm:text-2xl font-black text-slate-900 leading-snug mb-6" },
        qTitle
      ),

      // Options List
      React.createElement(
        "div",
        { className: "space-y-3" },
        qOptions.map(function(optText, idx) {
          var isChosen = selectedAnswer === idx;
          var isCorrect = idx === currentQ.correctAnswer;
          var btnStyle = "bg-white border-2 border-slate-200 hover:border-blue-500 text-slate-800";

          if (selectedAnswer !== null) {
            if (isCorrect) {
              btnStyle = "bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold";
            } else if (isChosen && !isCorrect) {
              btnStyle = "bg-red-50 border-2 border-red-500 text-red-950 font-bold";
            } else {
              btnStyle = "bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-60";
            }
          }

          return React.createElement(
            "button",
            {
              key: idx,
              disabled: selectedAnswer !== null,
              onClick: function() { handleSelect(idx); },
              className: "w-full text-left p-4 rounded-2xl transition-all shadow-sm flex items-start space-x-3 text-sm sm:text-base " + btnStyle
            },
            React.createElement(
              "span",
              { className: "w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5" },
              String.fromCharCode(65 + idx)
            ),
            React.createElement("span", { className: "leading-relaxed" }, optText)
          );
        })
      ),

      // Explanation Box
      selectedAnswer !== null && React.createElement(
        "div",
        { className: "mt-6 p-5 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-950 space-y-2 animate-fadeIn" },
        React.createElement(
          "p",
          { className: "font-black text-sm flex items-center space-x-1.5" },
          React.createElement("span", null, selectedAnswer === currentQ.correctAnswer ? "✅ Correct!" : "❌ Incorrect!"),
          React.createElement("span", { className: "text-blue-700 text-xs uppercase tracking-wider" }, "Explanation")
        ),
        React.createElement("p", { className: "text-sm sm:text-base leading-relaxed" }, qExpl),
        React.createElement(
          "div",
          { className: "pt-2" },
          React.createElement(
            "button",
            {
              onClick: handleNext,
              className: "bg-blue-600 hover:bg-blue-700 text-white font-black px-5 py-2.5 rounded-xl shadow transition-all text-sm flex items-center space-x-1.5"
            },
            React.createElement("span", null, currentIndex + 1 < questions.length ? (lang === "kn" ? "ಮುಂದಿನ ಪ್ರಶ್ನೆ" : (lang === "hi" ? "अगला प्रश्न" : "Next Question")) : (lang === "kn" ? "ಫಲಿತಾಂಶ ನೋಡಿ" : (lang === "hi" ? "रिजल्ट देखें" : "View Final Result"))),
            React.createElement("span", null, "→")
          )
        )
      )
    )
  );
};
