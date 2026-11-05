// Online Articles and Trusted Cybersecurity Resources Component
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.ArticlesSection = function ArticlesSection(props) {
  var lang = props.lang;
  var articles = window.CYBER_ARTICLES_DATA || [];

  return React.createElement(
    "div",
    { className: "space-y-8 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center max-w-3xl mx-auto" },
      React.createElement("span", { className: "text-4xl block mb-2" }, "📰"),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ವಿಶ್ವಾಸಾರ್ಹ ಆನ್‌ಲೈನ್ ಲೇಖನಗಳು ಮತ್ತು ಅಧಿಕೃತ ಸಂಪನ್ಮೂಲಗಳು" : (lang === "hi" ? "विश्वसनीय ऑनलाइन लेख और आधिकारिक संसाधन" : "Trusted Articles & Official Cybersecurity Portals")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-2" },
        lang === "kn"
          ? "ಭಾರತ ಸರ್ಕಾರ ಮತ್ತು ಅಧಿಕೃತ ಸಂಸ್ಥೆಗಳ ಪ್ರಮುಖ ಸೈಬರ್ ಸುರಕ್ಷತಾ ತಾಣಗಳ ನೇರ ಲಿಂಕ್‌ಗಳು."
          : (lang === "hi"
              ? "भारत सरकार और नियामक संस्थाओं के आधिकारिक साइबर सुरक्षा पोर्टल्स के सत्यापित लिंक।"
              : "Direct access to official government gateways, banking security guidelines, and telecom fraud reporting systems.")
      )
    ),

    // Grid of Trusted Resources
    React.createElement(
      "div",
      { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" },
      articles.map(function(item) {
        var aTitle = item.title[lang] || item.title.en;
        var aDesc = item.description[lang] || item.description.en;

        return React.createElement(
          "div",
          {
            key: item.id,
            className: "bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "flex items-center justify-between gap-2 mb-3" },
              React.createElement(
                "span",
                { className: "text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-800" },
                item.badge
              ),
              React.createElement("span", { className: "text-slate-400 text-sm" }, "🔒 Verified")
            ),
            React.createElement(
              "h2",
              { className: "font-black text-slate-900 text-lg leading-snug mb-1" },
              aTitle
            ),
            React.createElement(
              "p",
              { className: "text-xs font-bold text-slate-500 mb-3" },
              item.organization
            ),
            React.createElement(
              "p",
              { className: "text-slate-600 text-xs sm:text-sm leading-relaxed mb-4" },
              aDesc
            ),
            React.createElement(
              "div",
              { className: "bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 mb-4" },
              React.createElement("p", { className: "font-bold text-slate-900 mb-0.5" }, "Primary Use:"),
              React.createElement("p", null, item.keyUse)
            )
          ),

          // Visit Link Button
          React.createElement(
            "a",
            {
              href: item.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow text-center transition-all flex items-center justify-center space-x-1.5"
            },
            React.createElement("span", null, lang === "kn" ? "ಅಧಿಕೃತ ತಾಣಕ್ಕೆ ಭೇಟಿ ನೀಡಿ" : (lang === "hi" ? "आधिकारिक पोर्टल पर जाएं" : "Visit Official Resource")),
            React.createElement("span", null, "↗")
          )
        );
      })
    )
  );
};
