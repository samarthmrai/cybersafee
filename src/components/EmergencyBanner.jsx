
// CyberSafe Emergency Banner - Responsive Mobile Layout
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.EmergencyBanner = function EmergencyBanner(props) {
  var lang = props.lang;
  var setCurrentTab = props.setCurrentTab;
  var t = window.CYBER_TRANSLATIONS[lang] || window.CYBER_TRANSLATIONS.en;

  return React.createElement(
    "div",
    {
      className: "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-md border-b-2 border-red-800"
    },

    React.createElement(
      "div",
      {
        className: "max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex flex-row items-center justify-between gap-2"
      },

      // Emergency information
      React.createElement(
        "div",
        {
          className: "flex items-center gap-2 min-w-0 flex-1"
        },

        React.createElement(
          "span",
          {
            className: "text-xl sm:text-3xl bg-white/20 p-1.5 sm:p-2 rounded-xl flex-shrink-0"
          },
          "🚨"
        ),

        React.createElement(
          "div",
          {
            className: "min-w-0"
          },

          React.createElement(
            "p",
            {
              className: "font-black text-xs sm:text-base leading-snug"
            },
            t.quickEmergency
          ),

          React.createElement(
            "p",
            {
              className: "hidden sm:block text-xs text-red-100 font-medium opacity-90"
            },
            t.emergencySubtext
          )
        )
      ),

      // Emergency action buttons
      React.createElement(
        "div",
        {
          className: "flex items-center gap-1.5 flex-shrink-0"
        },

        // Call button always visible
        React.createElement(
          "a",
          {
            href: "tel:1930",
            className: "inline-flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold px-2.5 sm:px-4 py-2 rounded-xl shadow text-xs sm:text-sm whitespace-nowrap"
          },

          React.createElement("span", null, "📞"),
          React.createElement("span", null, "1930")
        ),

        // Full portal button on desktop only
        React.createElement(
          "a",
          {
            href: "https://cybercrime.gov.in/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-red-700 font-bold px-3.5 py-2 rounded-xl shadow text-sm"
          },

          React.createElement("span", null, "🌐"),
          React.createElement("span", null, t.visitPortal)
        ),

        // Emergency guide button
        React.createElement(
          "button",
          {
            onClick: function() {
              setCurrentTab("emergency");
            },
            className: "hidden sm:inline-flex items-center gap-1 bg-red-900/60 hover:bg-red-900 text-white font-semibold px-3 py-2 rounded-xl text-sm border border-red-400/40"
          },

          React.createElement("span", null, "📖"),
          React.createElement("span", null, t.readMore)
        )
      )
    )
  );
};
