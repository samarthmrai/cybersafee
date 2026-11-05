// Cyber Safety Checklist and Achievement Score Component
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.ChecklistSection = function ChecklistSection(props) {
  var lang = props.lang;
  var habits = window.CYBER_CHECKLIST_DATA || [];

  // Load initial checked habits from localStorage if available
  var [checkedHabits, setCheckedHabits] = React.useState(function() {
    try {
      var saved = localStorage.getItem("cybersafe_checklist");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  var toggleHabit = function(id) {
    setCheckedHabits(function(prev) {
      var updated = Object.assign({}, prev);
      if (updated[id]) {
        delete updated[id];
      } else {
        updated[id] = true;
      }
      try {
        localStorage.setItem("cybersafe_checklist", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  var handleSelectAll = function() {
    var all = {};
    habits.forEach(function(h) { all[h.id] = true; });
    setCheckedHabits(all);
    try { localStorage.setItem("cybersafe_checklist", JSON.stringify(all)); } catch(e) {}
  };

  var handleReset = function() {
    setCheckedHabits({});
    try { localStorage.removeItem("cybersafe_checklist"); } catch(e) {}
  };

  var totalWeight = habits.reduce(function(acc, h) { return acc + h.weight; }, 0);
  var currentScore = habits.reduce(function(acc, h) {
    return checkedHabits[h.id] ? acc + h.weight : acc;
  }, 0);
  var percentage = totalWeight > 0 ? Math.round((currentScore / totalWeight) * 100) : 0;

  var badgeTitle = "Cyber Novice 📘";
  var badgeColor = "bg-amber-100 text-amber-900 border-amber-300";
  if (percentage === 100) {
    badgeTitle = "Cyber Shield Guardian 🛡️ (100% Protected)";
    badgeColor = "bg-emerald-100 text-emerald-900 border-emerald-400";
  } else if (percentage >= 70) {
    badgeTitle = "Proactive Cyber Citizen 🌟 (High Protection)";
    badgeColor = "bg-blue-100 text-blue-900 border-blue-400";
  } else if (percentage >= 40) {
    badgeTitle = "Awareness In Progress 📘";
    badgeColor = "bg-amber-100 text-amber-900 border-amber-300";
  } else {
    badgeTitle = "High Risk — Action Needed ⚠️";
    badgeColor = "bg-red-100 text-red-900 border-red-300";
  }

  return React.createElement(
    "div",
    { className: "max-w-3xl mx-auto space-y-8 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center" },
      React.createElement("span", { className: "text-4xl block mb-2" }, "✅"),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ಸೈಬರ್ ಸುರಕ್ಷತಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಮತ್ತು ಸಾಧನಾ ಅಂಕ" : (lang === "hi" ? "साइबर सुरक्षा चेकलिस्ट और उपलब्धि स्कोर" : "Cyber Safety Checklist & Score")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-2" },
        lang === "kn"
          ? "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಭದ್ರತೆಯನ್ನು ಅಳೆಯಲು ಈ 10 ಮೂಲಭೂತ ಅಭ್ಯಾಸಗಳನ್ನು ಪರಿಶೀಲಿಸಿ."
          : (lang === "hi"
              ? "अपनी सुरक्षा स्थिति जानने के लिए इन 10 बुनियादी डिजिटल आदतों की जांच करें।"
              : "Tick the digital security habits you practice to evaluate your personal Cyber Shield Score.")
      )
    ),

    // Live Score & Achievement Banner
    React.createElement(
      "div",
      { className: "bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4" },
      React.createElement(
        "div",
        { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" },
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "text-xs font-black uppercase tracking-wider text-slate-500" }, "Your Security Score"),
          React.createElement(
            "div",
            { className: "flex items-baseline space-x-2 mt-1" },
            React.createElement("span", { className: "text-4xl sm:text-5xl font-black text-slate-900" }, percentage + "%"),
            React.createElement("span", { className: "text-sm text-slate-500 font-bold" }, "(" + currentScore + " / " + totalWeight + " Pts)")
          )
        ),
        React.createElement(
          "div",
          { className: "px-4 py-2 rounded-2xl font-black text-sm border shadow-sm " + badgeColor },
          badgeTitle
        )
      ),

      // Progress Bar
      React.createElement(
        "div",
        { className: "w-full bg-slate-100 rounded-full h-3 overflow-hidden" },
        React.createElement("div", {
          className: "h-3 rounded-full transition-all duration-500 " + (percentage >= 80 ? "bg-emerald-500" : (percentage >= 50 ? "bg-blue-500" : "bg-amber-500")),
          style: { width: percentage + "%" }
        })
      ),

      // Action buttons
      React.createElement(
        "div",
        { className: "flex justify-end space-x-2 pt-2 text-xs font-bold" },
        React.createElement(
          "button",
          {
            onClick: handleSelectAll,
            className: "text-blue-600 hover:text-blue-800 px-3 py-1 bg-blue-50 rounded-lg"
          },
          lang === "kn" ? "ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ" : (lang === "hi" ? "सभी चुनें" : "Select All")
        ),
        React.createElement(
          "button",
          {
            onClick: handleReset,
            className: "text-slate-500 hover:text-red-600 px-3 py-1 bg-slate-100 rounded-lg"
          },
          lang === "kn" ? "ಮರುಹೊಂದಿಸಿ" : (lang === "hi" ? "रीसेट करें" : "Reset")
        )
      )
    ),

    // Checklist Items
    React.createElement(
      "div",
      { className: "space-y-3" },
      habits.map(function(habit, index) {
        var isChecked = !!checkedHabits[habit.id];
        return React.createElement(
          "div",
          {
            key: habit.id,
            onClick: function() { toggleHabit(habit.id); },
            className: "p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start space-x-3.5 shadow-sm " +
              (isChecked 
                ? "bg-emerald-50/70 border-emerald-400 text-emerald-950 font-medium" 
                : "bg-white border-slate-200 hover:border-slate-300 text-slate-800")
          },
          React.createElement(
            "div",
            {
              className: "w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all " +
                (isChecked ? "bg-emerald-600 border-emerald-600 text-white font-black text-sm" : "border-slate-300 bg-white")
            },
            isChecked ? "✓" : ""
          ),
          React.createElement(
            "div",
            { className: "flex-grow" },
            React.createElement(
              "div",
              { className: "flex items-center space-x-2 mb-1" },
              React.createElement("span", { className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider" }, habit.category),
              React.createElement("span", { className: "text-xs font-bold text-emerald-700" }, "+10 pts")
            ),
            React.createElement(
              "p",
              { className: "text-sm sm:text-base leading-relaxed " + (isChecked ? "font-bold text-emerald-950" : "text-slate-800") },
              habit.title[lang] || habit.title.en
            )
          )
        );
      })
    )
  );
};
