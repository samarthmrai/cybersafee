// Interactive Scam Simulator Component
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.Simulator = function Simulator(props) {
  var lang = props.lang;
  var setCurrentTab = props.setCurrentTab;
  var scenarios = window.CYBER_SIMULATOR_DATA || [];

  var [currentIndex, setCurrentIndex] = React.useState(0);
  var [selectedChoice, setSelectedChoice] = React.useState(null);
  var [totalPoints, setTotalPoints] = React.useState(0);
  var [history, setHistory] = React.useState([]);
  var [isCompleted, setIsCompleted] = React.useState(false);

  var currentScenario = scenarios[currentIndex];

  var handleSelect = function(choice) {
    if (selectedChoice !== null) return; // Prevent multiple clicks on same scenario
    setSelectedChoice(choice);
    setTotalPoints(function(prev) { return prev + choice.points; });
    setHistory(function(prev) {
      return prev.concat({
        scenarioId: currentScenario.id,
        isSafe: choice.isSafe,
        points: choice.points
      });
    });
  };

  var handleNext = function() {
    if (currentIndex + 1 < scenarios.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedChoice(null);
    } else {
      setIsCompleted(true);
    }
  };

  var handleRestart = function() {
    setCurrentIndex(0);
    setSelectedChoice(null);
    setTotalPoints(0);
    setHistory([]);
    setIsCompleted(false);
  };

  if (isCompleted) {
    var maxPossiblePoints = scenarios.length * 10;
    var safeChoicesCount = history.filter(function(h) { return h.isSafe; }).length;

    return React.createElement(
      "div",
      { className: "max-w-2xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg text-center" },
      React.createElement("span", { className: "text-6xl block mb-4" }, totalPoints >= 40 ? "🏆" : "🛡️"),
      React.createElement(
        "h2",
        { className: "text-2xl sm:text-3xl font-black text-slate-900 mb-2" },
        lang === "kn" ? "ಸಿಮ್ಯುಲೇಶನ್ ಪೂರ್ಣಗೊಂಡಿದೆ!" : (lang === "hi" ? "सिम्युलेटर पूरा हुआ!" : "Scam Simulator Completed!")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 mb-6 text-sm sm:text-base" },
        lang === "kn"
          ? "ನೀವು " + scenarios.length + " ಸನ್ನಿವೇಶಗಳಲ್ಲಿ " + safeChoicesCount + " ಸರಿಯಾದ ಸುರಕ್ಷಿತ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಂಡಿದ್ದೀರಿ."
          : (lang === "hi"
              ? "आपने " + scenarios.length + " परिदृश्यों में से " + safeChoicesCount + " सुरक्षित निर्णय लिए।"
              : "You made " + safeChoicesCount + " safe choices out of " + scenarios.length + " realistic scenarios.")
      ),

      // Score Pill
      React.createElement(
        "div",
        { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-8" },
        React.createElement("p", { className: "text-xs font-bold text-blue-700 uppercase tracking-widest mb-1" }, "Your Safety Score"),
        React.createElement("p", { className: "text-4xl sm:text-5xl font-black text-blue-900" }, totalPoints + " / " + maxPossiblePoints + " Pts")
      ),

      // Action Buttons
      React.createElement(
        "div",
        { className: "flex flex-wrap justify-center gap-3" },
        React.createElement(
          "button",
          {
            onClick: handleRestart,
            className: "bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-2xl shadow transition-all"
          },
          lang === "kn" ? "ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ" : (lang === "hi" ? "पुनः प्रयास करें" : "Try Again")
        ),
        React.createElement(
          "button",
          {
            onClick: function() { setCurrentTab("quiz"); },
            className: "bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3 rounded-2xl shadow-md transition-all flex items-center space-x-2"
          },
          React.createElement("span", null, "🎯"),
          React.createElement("span", null, lang === "kn" ? "ರಸಪ್ರಶ್ನೆ ತೆಗೆದುಕೊಳ್ಳಿ" : (lang === "hi" ? "सुरक्षा क्विज़ खेलें" : "Take Safety Quiz"))
        )
      )
    );
  }

  return React.createElement(
    "div",
    { className: "max-w-3xl mx-auto space-y-6 pb-12" },
    
    // Header & Points Counter
    React.createElement(
      "div",
      { className: "bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-3" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          { className: "inline-block px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800 mb-1" },
          currentScenario.category
        ),
        React.createElement(
          "h1",
          { className: "text-lg sm:text-xl font-black text-slate-900" },
          currentScenario.title[lang] || currentScenario.title.en
        ),
        React.createElement(
          "p",
          { className: "text-xs text-slate-500 font-semibold" },
          lang === "kn" ? "ಸನ್ನಿವೇಶ " + (currentIndex + 1) + " / " + scenarios.length : (lang === "hi" ? "परिदृश्य " + (currentIndex + 1) + " / " + scenarios.length : "Scenario " + (currentIndex + 1) + " of " + scenarios.length)
        )
      ),
      React.createElement(
        "div",
        { className: "bg-slate-900 text-white px-4 py-2 rounded-xl text-center shadow" },
        React.createElement("p", { className: "text-[10px] uppercase font-bold text-slate-400" }, "Score"),
        React.createElement("p", { className: "text-lg font-black text-emerald-400" }, totalPoints + " pts")
      )
    ),

    // Realistic Mock Device / Chat Simulator Window
    React.createElement(
      "div",
      { className: "bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-xl border-4 border-slate-800 text-white" },
      
      // Mock Mobile Header
      React.createElement(
        "div",
        { className: "flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4" },
        React.createElement(
          "div",
          { className: "flex items-center space-x-2" },
          React.createElement("span", { className: "w-3 h-3 rounded-full bg-red-500" }),
          React.createElement("span", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          React.createElement("span", { className: "w-3 h-3 rounded-full bg-green-500" }),
          React.createElement("span", { className: "text-xs font-mono text-slate-400 ml-2" }, "Incoming Notification")
        ),
        React.createElement(
          "span",
          { className: "text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md" },
          "Simulation"
        )
      ),

      // Sender Info
      React.createElement(
        "div",
        { className: "flex items-center space-x-3 mb-4 bg-slate-800/80 p-3 rounded-2xl border border-slate-700" },
        React.createElement(
          "div",
          { className: "w-10 h-10 rounded-full bg-red-600/30 text-red-400 border border-red-500/40 flex items-center justify-center text-lg font-black" },
          "⚠️"
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "text-xs text-slate-400 font-bold" }, "Sender / Caller"),
          React.createElement("p", { className: "text-sm font-black text-white" }, currentScenario.sender)
        )
      ),

      // Simulated Message Bubble
      React.createElement(
        "div",
        { className: "bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-700 text-sm sm:text-base leading-relaxed text-slate-100 font-medium" },
        currentScenario.simulatedMessage[lang] || currentScenario.simulatedMessage.en
      )
    ),

    // Question Prompt
    React.createElement(
      "div",
      { className: "text-center py-1" },
      React.createElement(
        "h2",
        { className: "text-lg sm:text-xl font-black text-slate-900" },
        lang === "kn" ? "ನೀವು ಈ ಸಂದರ್ಭದಲ್ಲಿ ಏನು ಮಾಡುತ್ತೀರಿ?" : (lang === "hi" ? "आप इस परिस्थिति में क्या करेंगे?" : "What would you do in this situation?")
      )
    ),

    // Choices
    React.createElement(
      "div",
      { className: "space-y-3" },
      currentScenario.choices.map(function(choice) {
        var isChosen = selectedChoice && selectedChoice.id === choice.id;
        var btnColor = "bg-white border-2 border-slate-200 hover:border-blue-500 text-slate-800";
        if (selectedChoice) {
          if (choice.isSafe) {
            btnColor = "bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold";
          } else if (isChosen && !choice.isSafe) {
            btnColor = "bg-red-50 border-2 border-red-500 text-red-950 font-bold";
          } else {
            btnColor = "bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-60";
          }
        }

        return React.createElement(
          "button",
          {
            key: choice.id,
            disabled: selectedChoice !== null,
            onClick: function() { handleSelect(choice); },
            className: "w-full text-left p-4 rounded-2xl transition-all shadow-sm flex items-start space-x-3 text-sm sm:text-base " + btnColor
          },
          React.createElement("span", { className: "font-black text-base mt-0.5" }, isChosen ? (choice.isSafe ? "✅" : "❌") : "👉"),
          React.createElement("span", { className: "leading-relaxed" }, choice.text[lang] || choice.text.en)
        );
      })
    ),

    // Feedback Panel when choice is made
    selectedChoice && React.createElement(
      "div",
      {
        className: "p-5 rounded-2xl border-2 transition-all " +
          (selectedChoice.isSafe 
            ? "bg-emerald-50 border-emerald-400 text-emerald-950" 
            : "bg-red-50 border-red-400 text-red-950")
      },
      React.createElement(
        "div",
        { className: "flex items-center space-x-2 font-black text-base mb-2" },
        React.createElement("span", { className: "text-2xl" }, selectedChoice.isSafe ? "🎉" : "⚠️"),
        React.createElement("span", null, selectedChoice.isSafe ? (lang === "kn" ? "ಸುರಕ್ಷಿತ ನಿರ್ಧಾರ! (+10 ಅಂಕಗಳು)" : (lang === "hi" ? "सुरक्षित निर्णय! (+10 अंक)" : "Safe Choice! (+10 Points)")) : (lang === "kn" ? "ಅಪಾಯಕಾರಿ ತಪ್ಪು! (-10 ಅಂಕಗಳು)" : (lang === "hi" ? "खतरनाक कदम! (-10 अंक)" : "Dangerous Trap! (-10 Points)")))
      ),
      React.createElement(
        "p",
        { className: "text-sm sm:text-base leading-relaxed mb-4" },
        selectedChoice.feedback[lang] || selectedChoice.feedback.en
      ),
      React.createElement(
        "button",
        {
          onClick: handleNext,
          className: "bg-slate-900 hover:bg-slate-800 text-white font-black px-5 py-2.5 rounded-xl shadow transition-all flex items-center space-x-2 text-sm"
        },
        React.createElement("span", null, currentIndex + 1 < scenarios.length ? (lang === "kn" ? "ಮುಂದಿನ ಸನ್ನಿವೇಶ" : (lang === "hi" ? "अगला परिदृश्य" : "Next Scenario")) : (lang === "kn" ? "ಫಲಿತಾಂಶ ನೋಡಿ" : (lang === "hi" ? "परिणाम देखें" : "View Results"))),
        React.createElement("span", null, "→")
      )
    )
  );
};
