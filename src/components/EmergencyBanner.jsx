// Emergency Banner Component
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.EmergencyBanner = function EmergencyBanner(props) {
  var lang = props.lang;
  var setCurrentTab = props.setCurrentTab;
  var t = window.CYBER_TRANSLATIONS[lang] || window.CYBER_TRANSLATIONS.en;

  return React.createElement(
    "div",
    { className: "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-md border-b-2 border-red-800" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left" },
      
      // Left info
      React.createElement(
        "div",
        { className: "flex items-center space-x-3" },
        React.createElement(
          "span",
          { className: "text-3xl bg-white/20 p-2 rounded-xl flex-shrink-0" },
          "🚨"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "font-black text-sm sm:text-base leading-snug" },
            t.quickEmergency
          ),
          React.createElement(
            "p",
            { className: "text-xs text-red-100 font-medium opacity-90" },
            t.emergencySubtext
          )
        )
      ),

      // Right action buttons
      React.createElement(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-2 flex-shrink-0" },
        React.createElement(
          "a",
          {
            href: "tel:1930",
            className: "inline-flex items-center space-x-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold px-4 py-2 rounded-xl shadow text-sm transition-all transform hover:-translate-y-0.5"
          },
          React.createElement("span", null, "📞"),
          React.createElement("span", null, t.callNow)
        ),
        React.createElement(
          "a",
          {
            href: "https://cybercrime.gov.in/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center space-x-1.5 bg-white hover:bg-slate-100 text-red-700 font-bold px-3.5 py-2 rounded-xl shadow text-sm transition-all"
          },
          React.createElement("span", null, "🌐"),
          React.createElement("span", null, t.visitPortal)
        ),
        React.createElement(
          "button",
          {
            onClick: function() { setCurrentTab("emergency"); },
            className: "inline-flex items-center space-x-1 bg-red-900/60 hover:bg-red-900 text-white font-semibold px-3 py-2 rounded-xl text-xs sm:text-sm border border-red-400/40 transition-all"
          },
          React.createElement("span", null, "📖"),
          React.createElement("span", null, t.readMore)
        )
      )
    )
  );
};
