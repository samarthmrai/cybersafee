// Main Application Component for CyberSafe
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeApp = function CyberSafeApp() {
  // Language state (en, kn, hi)
  var [lang, setLang] = React.useState(function() {
    try {
      return localStorage.getItem("cybersafe_lang") || "en";
    } catch(e) {
      return "en";
    }
  });

  // Text size state (normal, large, xlarge)
  var [textSize, setTextSize] = React.useState(function() {
    try {
      return localStorage.getItem("cybersafe_textsize") || "normal";
    } catch(e) {
      return "normal";
    }
  });

  // Current active navigation tab
  var [currentTab, setCurrentTab] = React.useState("home");
  var [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  var [isSpeaking, setIsSpeaking] = React.useState(false);

  // Sync language with localStorage
  var handleSetLang = function(newLang) {
    setLang(newLang);
    try { localStorage.setItem("cybersafe_lang", newLang); } catch(e) {}
    stopAudio();
  };

  // Sync text size with document.body class and localStorage
  var handleSetTextSize = function(newSize) {
    setTextSize(newSize);
    try { localStorage.setItem("cybersafe_textsize", newSize); } catch(e) {}
  };

  React.useEffect(function() {
    document.body.classList.remove("font-normal", "font-large", "font-xlarge");
    document.body.classList.add("font-" + textSize);
  }, [textSize]);

  // Audio speech synthesis helper for senior citizens and accessibility
  var playAudio = function(text, langCode) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);

    if (langCode === "hi") {
      utterance.lang = "hi-IN";
    } else if (langCode === "kn") {
      utterance.lang = "kn-IN";
    } else {
      utterance.lang = "en-IN";
    }

    utterance.rate = 0.95; // Slightly slower for better comprehension
    utterance.pitch = 1.0;

    utterance.onstart = function() { setIsSpeaking(true); };
    utterance.onend = function() { setIsSpeaking(false); };
    utterance.onerror = function() { setIsSpeaking(false); };

    window.speechSynthesis.speak(utterance);
  };

  var stopAudio = function() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Stop speech when navigating
  var handleTabChange = function(tabId) {
    stopAudio();
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  var components = window.CyberSafeComponents;

  // Active view renderer
  var renderActiveContent = function() {
    switch (currentTab) {
      case "home":
        return React.createElement(components.HomeDashboard, {
          lang: lang,
          setCurrentTab: handleTabChange,
          playAudio: playAudio,
          stopAudio: stopAudio,
          isSpeaking: isSpeaking
        });
      case "learn":
        return React.createElement(components.LearnSection, {
          lang: lang,
          playAudio: playAudio,
          stopAudio: stopAudio,
          isSpeaking: isSpeaking
        });
      case "simulator":
        return React.createElement(components.Simulator, {
          lang: lang,
          setCurrentTab: handleTabChange
        });
      case "quiz":
        return React.createElement(components.QuizSection, {
          lang: lang,
          setCurrentTab: handleTabChange
        });
      case "emergency":
        return React.createElement(components.EmergencyGuide, {
          lang: lang,
          playAudio: playAudio,
          stopAudio: stopAudio,
          isSpeaking: isSpeaking
        });
      case "festivals":
        return React.createElement(components.FestivalAwareness, {
          lang: lang,
          playAudio: playAudio,
          stopAudio: stopAudio,
          isSpeaking: isSpeaking
        });
      case "checker":
        return React.createElement(components.MessageChecker, {
          lang: lang
        });
      case "checklist":
        return React.createElement(components.ChecklistSection, {
          lang: lang
        });
      case "chatbot":
        return React.createElement(components.Chatbot, {
          lang: lang,
          playAudio: playAudio,
          stopAudio: stopAudio,
          isSpeaking: isSpeaking
        });
      case "videos":
        return React.createElement(components.VideosSection, {
          lang: lang
        });
      case "articles":
        return React.createElement(components.ArticlesSection, {
          lang: lang
        });
      default:
        return React.createElement(components.HomeDashboard, {
          lang: lang,
          setCurrentTab: handleTabChange,
          playAudio: playAudio,
          stopAudio: stopAudio,
          isSpeaking: isSpeaking
        });
    }
  };

  return React.createElement(
    "div",
    { className: "min-h-screen flex flex-col bg-slate-100 text-slate-800 antialiased" },
    
    // Top Navbar
    React.createElement(components.Navbar, {
      lang: lang,
      setLang: handleSetLang,
      textSize: textSize,
      setTextSize: handleSetTextSize,
      currentTab: currentTab,
      setCurrentTab: handleTabChange,
      isMobileMenuOpen: isMobileMenuOpen,
      setIsMobileMenuOpen: setIsMobileMenuOpen
    }),

    // Top Emergency Banner
    React.createElement(components.EmergencyBanner, {
      lang: lang,
      setCurrentTab: handleTabChange
    }),

    // Main App Container
    React.createElement(
      "main",
      { className: "flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8" },
      renderActiveContent()
    ),

    // Floating Action Buttons (Global Accessibility across all pages, including Home)
    React.createElement(
      "div",
      { className: "fixed bottom-5 right-5 z-40 flex items-center space-x-3" },
      
      // Floating CyberMitra AI Chatbot Launcher Button
      currentTab !== "chatbot" && React.createElement(
        "button",
        {
          onClick: function() { handleTabChange("chatbot"); },
          title: "Chat with CyberMitra AI",
          className: "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black px-4 sm:px-5 py-3 rounded-full shadow-2xl border-2 border-white flex items-center space-x-2.5 transition-all transform hover:scale-105 active:scale-95"
        },
        React.createElement("span", { className: "text-2xl" }, "🤖"),
        React.createElement(
          "span",
          { className: "text-sm sm:text-base font-extrabold hidden sm:inline" },
          lang === "kn" ? "ಸೈಬರ್ ಮಿತ್ರ AI" : (lang === "hi" ? "साइबर मित्र AI" : "Ask CyberMitra AI")
        ),
        React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border border-white" })
      ),

      // Mobile Quick Emergency Dial Button
      React.createElement(
        "a",
        {
          href: "tel:1930",
          title: "Emergency Helpline 1930",
          className: "w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-xl sm:text-2xl shadow-2xl border-2 border-white badge-emergency active:scale-95 transition-all"
        },
        "📞"
      )
    ),

    // Footer
    React.createElement(components.Footer, {
      lang: lang,
      setCurrentTab: handleTabChange
    })
  );
};
