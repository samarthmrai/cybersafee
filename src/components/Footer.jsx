// Footer Component with Helpline Details, Disclaimers, and Community Mission
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.Footer = function Footer(props) {
  var lang = props.lang;
  var setCurrentTab = props.setCurrentTab;
  var t = window.CYBER_TRANSLATIONS[lang] || window.CYBER_TRANSLATIONS.en;

  var scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return React.createElement(
    "footer",
    { className: "bg-slate-900 text-white border-t border-slate-800 pt-12 pb-8" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-8" },
      
      // Top Row
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-8" },
        React.createElement(
          "div",
          { className: "space-y-2 max-w-md" },
          React.createElement(
            "div",
            { className: "flex items-center space-x-2.5" },
            React.createElement("span", { className: "text-3xl" }, "🛡️"),
            React.createElement("span", { className: "text-2xl font-black tracking-tight text-white" }, t.appTitle)
          ),
          React.createElement(
            "p",
            { className: "text-xs sm:text-sm text-slate-400 leading-relaxed" },
            t.footerText
          )
        ),

        // Emergency Quick Call Card
        React.createElement(
          "div",
          { className: "bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-center space-x-4" },
          React.createElement("span", { className: "text-3xl" }, "📞"),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, t.emergencyHelpline),
            React.createElement(
              "a",
              { href: "tel:1930", className: "text-2xl font-black text-red-400 hover:text-red-300 tracking-wider" },
              "1930 (Toll-Free)"
            ),
            React.createElement("p", { className: "text-[11px] text-slate-400" }, "Report Cyber Fraud Online at cybercrime.gov.in")
          )
        )
      ),

      // Navigation Links Grid
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-400" },
        React.createElement(
          "div",
          { className: "space-y-2" },
          React.createElement("p", { className: "font-black text-white uppercase text-xs tracking-wider" }, "Learn & Practice"),
          React.createElement("button", { onClick: function() { setCurrentTab("learn"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.learn),
          React.createElement("button", { onClick: function() { setCurrentTab("simulator"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.simulator),
          React.createElement("button", { onClick: function() { setCurrentTab("quiz"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.quiz)
        ),
        React.createElement(
          "div",
          { className: "space-y-2" },
          React.createElement("p", { className: "font-black text-white uppercase text-xs tracking-wider" }, "Tools & Safety"),
          React.createElement("button", { onClick: function() { setCurrentTab("checker"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.checker),
          React.createElement("button", { onClick: function() { setCurrentTab("checklist"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.checklist),
          React.createElement("button", { onClick: function() { setCurrentTab("festivals"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.festivals)
        ),
        React.createElement(
          "div",
          { className: "space-y-2" },
          React.createElement("p", { className: "font-black text-white uppercase text-xs tracking-wider" }, "Assistance"),
          React.createElement("button", { onClick: function() { setCurrentTab("chatbot"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.chatbot),
          React.createElement("button", { onClick: function() { setCurrentTab("emergency"); scrollToTop(); }, className: "block text-red-400 hover:text-red-300 font-bold" }, t.nav.emergency),
          React.createElement("button", { onClick: function() { setCurrentTab("videos"); scrollToTop(); }, className: "block hover:text-white" }, t.nav.videos)
        ),
        React.createElement(
          "div",
          { className: "space-y-2" },
          React.createElement("p", { className: "font-black text-white uppercase text-xs tracking-wider" }, "Official Resources"),
          React.createElement("a", { href: "https://cybercrime.gov.in/", target: "_blank", rel: "noopener", className: "block hover:text-white" }, "cybercrime.gov.in ↗"),
          React.createElement("a", { href: "https://sancharsaathi.gov.in/", target: "_blank", rel: "noopener", className: "block hover:text-white" }, "Sanchar Saathi ↗"),
          React.createElement("a", { href: "https://rbikehtahai.rbi.org.in/", target: "_blank", rel: "noopener", className: "block hover:text-white" }, "RBI Kehta Hai ↗")
        )
      ),

      // Disclaimer & Bottom Row
      React.createElement(
        "div",
        { className: "border-t border-slate-800 pt-6 space-y-4 text-xs text-slate-500" },
        React.createElement("p", { className: "leading-relaxed" }, t.disclaimer),
        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row justify-between items-center gap-2 pt-2" },
          React.createElement("p", null, "© 2026 CyberSafe. Built for public awareness and community safety across India. Free to use with no login."),
          React.createElement(
            "button",
            {
              onClick: scrollToTop,
              className: "text-slate-400 hover:text-white font-bold flex items-center space-x-1"
            },
            React.createElement("span", null, "Back to Top"),
            React.createElement("span", null, "↑")
          )
        )
      )
    )
  );
};
