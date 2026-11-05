// Navbar Component with Multilingual Toggle, Text Size Adjuster, and Emergency Quick Pill
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.Navbar = function Navbar(props) {
  var lang = props.lang;
  var setLang = props.setLang;
  var textSize = props.textSize;
  var setTextSize = props.setTextSize;
  var currentTab = props.currentTab;
  var setCurrentTab = props.setCurrentTab;
  var isMobileMenuOpen = props.isMobileMenuOpen;
  var setIsMobileMenuOpen = props.setIsMobileMenuOpen;

  var t = window.CYBER_TRANSLATIONS[lang] || window.CYBER_TRANSLATIONS.en;

  var navItems = [
    { id: "home", label: t.nav.home, icon: "🏠" },
    { id: "learn", label: t.nav.learn, icon: "📚" },
    { id: "simulator", label: t.nav.simulator, icon: "🎮" },
    { id: "quiz", label: t.nav.quiz, icon: "🎯" },
    { id: "emergency", label: t.nav.emergency, icon: "🚨", isAlert: true },
    { id: "festivals", label: t.nav.festivals, icon: "🪔" },
    { id: "checker", label: t.nav.checker, icon: "🔍" },
    { id: "checklist", label: t.nav.checklist, icon: "✅" },
    { id: "chatbot", label: t.nav.chatbot, icon: "🤖" },
    { id: "videos", label: t.nav.videos, icon: "📺" },
    { id: "articles", label: t.nav.articles, icon: "📰" }
  ];

  return React.createElement(
    "header",
    { className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" },
    
    // Top Accessibility & Language Bar
    React.createElement(
      "div",
      { className: "bg-slate-900 text-white text-xs sm:text-sm py-1.5 px-3 sm:px-6" },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2" },
        
        // Left: Public Tag
        React.createElement(
          "div",
          { className: "flex items-center space-x-2 font-medium text-emerald-400" },
          React.createElement("span", { className: "inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
          React.createElement("span", null, t.noLoginRequired)
        ),

        // Right: Language Selector & Font Size Controls
        React.createElement(
          "div",
          { className: "flex items-center space-x-4" },
          
          // Language Switcher Buttons
          React.createElement(
            "div",
            { className: "flex items-center space-x-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700" },
            React.createElement(
              "button",
              {
                onClick: function() { setLang("en"); },
                className: "px-2 py-0.5 rounded text-xs font-semibold transition-colors " + (lang === "en" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white")
              },
              "English"
            ),
            React.createElement(
              "button",
              {
                onClick: function() { setLang("kn"); },
                className: "px-2 py-0.5 rounded text-xs font-semibold transition-colors " + (lang === "kn" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white")
              },
              "ಕನ್ನಡ"
            ),
            React.createElement(
              "button",
              {
                onClick: function() { setLang("hi"); },
                className: "px-2 py-0.5 rounded text-xs font-semibold transition-colors " + (lang === "hi" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white")
              },
              "हिंदी"
            )
          ),

          // Font Size Adjuster (A-, A, A+)
          React.createElement(
            "div",
            { className: "flex items-center space-x-1 bg-slate-800 rounded-lg p-0.5 border border-slate-700" },
            React.createElement(
              "button",
              {
                onClick: function() { setTextSize("normal"); },
                title: t.normalText,
                className: "px-2 py-0.5 rounded text-xs font-bold " + (textSize === "normal" ? "bg-emerald-600 text-white" : "text-gray-300")
              },
              "A"
            ),
            React.createElement(
              "button",
              {
                onClick: function() { setTextSize("large"); },
                title: t.largeText,
                className: "px-2 py-0.5 rounded text-sm font-bold " + (textSize === "large" ? "bg-emerald-600 text-white" : "text-gray-300")
              },
              "A+"
            ),
            React.createElement(
              "button",
              {
                onClick: function() { setTextSize("xlarge"); },
                title: t.extraLargeText,
                className: "px-2 py-0.5 rounded text-base font-bold " + (textSize === "xlarge" ? "bg-emerald-600 text-white" : "text-gray-300")
              },
              "A++"
            )
          )
        )
      )
    ),

    // Main Navigation Row
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between" },
      
      // Logo and Title
      React.createElement(
        "div",
        {
          className: "flex items-center space-x-3 cursor-pointer",
          onClick: function() { setCurrentTab("home"); }
        },
        React.createElement(
          "div",
          { className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md text-xl" },
          "🛡️"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            { className: "text-xl sm:text-2xl font-black tracking-tight text-slate-900 block leading-tight" },
            t.appTitle
          ),
          React.createElement(
            "span",
            { className: "text-xs text-slate-500 hidden sm:block font-medium" },
            t.appTagline
          )
        )
      ),

      // Emergency Quick Action (1930 Call Button)
      React.createElement(
        "div",
        { className: "flex items-center space-x-2" },
        React.createElement(
          "a",
          {
            href: "tel:1930",
            className: "flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 sm:px-4 rounded-xl shadow-md badge-emergency transition-all text-sm"
          },
          React.createElement("span", { className: "text-base animate-bounce" }, "📞"),
          React.createElement(
            "span",
            { className: "font-black tracking-wider text-base sm:text-lg" },
            "1930"
          ),
          React.createElement(
            "span",
            { className: "hidden md:inline text-xs font-semibold text-red-100 uppercase" },
            "National Helpline"
          )
        ),

        // Mobile Menu Button
        React.createElement(
          "button",
          {
            onClick: function() { setIsMobileMenuOpen(!isMobileMenuOpen); },
            className: "lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
          },
          React.createElement("span", { className: "text-2xl" }, isMobileMenuOpen ? "✕" : "☰")
        )
      )
    ),

    // Desktop Nav Links
    React.createElement(
      "nav",
      { className: "hidden lg:block bg-slate-50 border-t border-slate-200" },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto px-4 flex items-center space-x-1 overflow-x-auto py-1" },
        navItems.map(function(item) {
          var isActive = currentTab === item.id;
          return React.createElement(
            "button",
            {
              key: item.id,
              onClick: function() { setCurrentTab(item.id); },
              className: "flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap " +
                (isActive 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : (item.isAlert 
                      ? "text-red-600 hover:bg-red-50 font-bold" 
                      : "text-slate-700 hover:bg-slate-200"))
            },
            React.createElement("span", null, item.icon),
            React.createElement("span", null, item.label)
          );
        })
      )
    ),

    // Mobile Dropdown Menu
    isMobileMenuOpen && React.createElement(
      "div",
      { className: "lg:hidden bg-white border-t border-slate-200 px-4 py-3 shadow-xl max-h-[80vh] overflow-y-auto" },
      React.createElement(
        "div",
        { className: "grid grid-cols-2 gap-2" },
        navItems.map(function(item) {
          var isActive = currentTab === item.id;
          return React.createElement(
            "button",
            {
              key: item.id,
              onClick: function() {
                setCurrentTab(item.id);
                setIsMobileMenuOpen(false);
              },
              className: "flex items-center space-x-2 p-2.5 rounded-xl text-left text-sm font-medium transition-all " +
                (isActive 
                  ? "bg-blue-600 text-white font-bold" 
                  : (item.isAlert 
                      ? "bg-red-50 text-red-700 font-bold border border-red-200" 
                      : "bg-slate-50 text-slate-800 hover:bg-slate-100"))
            },
            React.createElement("span", { className: "text-lg" }, item.icon),
            React.createElement("span", { className: "truncate" }, item.label)
          );
        })
      )
    )
  );
};
