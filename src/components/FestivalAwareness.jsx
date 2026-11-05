// Festival Awareness Component: Diwali, Holi, Eid, Christmas & New Year
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.FestivalAwareness = function FestivalAwareness(props) {
  var lang = props.lang;
  var playAudio = props.playAudio;
  var stopAudio = props.stopAudio;
  var isSpeaking = props.isSpeaking;

  var festivals = window.CYBER_FESTIVALS_DATA || [];
  var [selectedFestival, setSelectedFestival] = React.useState(festivals[0] ? festivals[0].id : "diwali");

  var activeFest = festivals.find(function(f) { return f.id === selectedFestival; }) || festivals[0];

  return React.createElement(
    "div",
    { className: "space-y-8 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center max-w-3xl mx-auto" },
      React.createElement("span", { className: "text-4xl block mb-2" }, "🪔"),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ಸೈಬರ್ ವಂಚನೆಗಳ ಎಚ್ಚರಿಕೆ" : (lang === "hi" ? "त्योहारों में साइबर ठगी से सावधान रहें" : "Festival Season Cyber Fraud Awareness")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-2" },
        lang === "kn"
          ? "ದೀಪಾವಳಿ, ಹೋಳಿ, ಈದ್, ಕ್ರಿಸ್ಮಸ್ ಮತ್ತು ಹೊಸ ವರ್ಷದ ಸಂದರ್ಭದಲ್ಲಿ ವಂಚಕರು ಉಚಿತ ಉಡುಗೊರೆ ಮತ್ತು ರಿಯಾಯಿತಿಯ ಹೆಸರಿನಲ್ಲಿ ಬಲೆ ಬೀಸುತ್ತಾರೆ."
          : (lang === "hi"
              ? "दीपावली, होली, ईद और नए साल पर ठग भारी छूट, मुफ्त गिफ्ट और लकी ड्रॉ के नाम पर ठगी करते हैं।"
              : "Festivals are peak seasons for festive discount phishing, fake gift hampers, and lucky draw scams.")
      )
    ),

    // Festival Selectors
    React.createElement(
      "div",
      { className: "flex flex-wrap items-center justify-center gap-3" },
      festivals.map(function(fest) {
        var isCurrent = fest.id === selectedFestival;
        return React.createElement(
          "button",
          {
            key: fest.id,
            onClick: function() { setSelectedFestival(fest.id); },
            className: "px-5 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center space-x-2 " +
              (isCurrent ? "bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400 font-black" : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100")
          },
          React.createElement("span", { className: "text-xl" }, fest.icon),
          React.createElement("span", null, fest.festivalName[lang] || fest.festivalName.en)
        );
      })
    ),

    // Active Festival Card
    activeFest && React.createElement(
      "div",
      { className: "bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6" },
      
      // Festival Title Row
      React.createElement(
        "div",
        { className: "flex items-center space-x-4 border-b border-slate-100 pb-4" },
        React.createElement("span", { className: "text-5xl p-3 bg-amber-50 rounded-2xl" }, activeFest.icon),
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            { className: "text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full" },
            "Festive Fraud Alert"
          ),
          React.createElement(
            "h2",
            { className: "text-2xl sm:text-3xl font-black text-slate-900 mt-1" },
            activeFest.festivalName[lang] || activeFest.festivalName.en
          )
        )
      ),

      // Common Traps during this festival
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "text-base font-black text-slate-900 mb-3 flex items-center space-x-2" },
          React.createElement("span", null, "⚠️"),
          React.createElement("span", null, lang === "kn" ? "ಈ ಹಬ್ಬದಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಕಂಡುಬರುವ ವಂಚನೆಗಳು" : (lang === "hi" ? "इस त्योहार पर होने वाले आम घोटाले" : "Common Scams Exploded During This Festival"))
        ),
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 gap-3" },
          (activeFest.commonScams[lang] || activeFest.commonScams.en).map(function(scamText, idx) {
            return React.createElement(
              "div",
              { key: idx, className: "bg-rose-50/60 border border-rose-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 flex items-start space-x-3" },
              React.createElement("span", { className: "text-rose-600 font-black mt-0.5" }, "•"),
              React.createElement("span", { className: "leading-relaxed" }, scamText)
            );
          })
        )
      ),

      // Safety Tip Box
      React.createElement(
        "div",
        { className: "bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5" },
        React.createElement(
          "div",
          { className: "flex items-center space-x-2 font-black text-emerald-900 text-sm uppercase tracking-wider mb-2" },
          React.createElement("span", null, "💡"),
          React.createElement("span", null, lang === "kn" ? "ಹಬ್ಬದ ಸುರಕ್ಷತಾ ಸಲಹೆ" : (lang === "hi" ? "त्योहार की सुरक्षा टिप" : "Festive Safety Golden Rule"))
        ),
        React.createElement(
          "p",
          { className: "text-emerald-950 text-sm sm:text-base leading-relaxed" },
          activeFest.safetyTip[lang] || activeFest.safetyTip.en
        )
      )
    ),

    // Universal Festive Shopping Checklist
    React.createElement(
      "div",
      { className: "bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl" },
      React.createElement(
        "h3",
        { className: "text-lg sm:text-xl font-black mb-4 flex items-center space-x-2" },
        React.createElement("span", null, "🛒"),
        React.createElement("span", null, lang === "kn" ? "ಹಬ್ಬದ ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ಮಾಡುವಾಗ 4 ಸುವರ್ಣ ನಿಯಮಗಳು" : (lang === "hi" ? "त्योहारी ऑनलाइन शॉपिंग के 4 सुनहरे नियम" : "4 Golden Rules for Safe Festive Online Shopping"))
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200" },
        React.createElement(
          "div",
          { className: "bg-slate-800 p-4 rounded-2xl border border-slate-700" },
          React.createElement("p", { className: "font-black text-amber-400 mb-1" }, "1. Download Official Apps Only"),
          React.createElement("p", null, "Shop only through official Google Play or Apple App Store apps. Never tap shopping links sent on WhatsApp forwards.")
        ),
        React.createElement(
          "div",
          { className: "bg-slate-800 p-4 rounded-2xl border border-slate-700" },
          React.createElement("p", { className: "font-black text-amber-400 mb-1" }, "2. Beware of 90% Discounts"),
          React.createElement("p", null, "If an iPhone, TV, or gold coin is advertised for ₹999, it is an absolute scam designed to steal your credit card details.")
        ),
        React.createElement(
          "div",
          { className: "bg-slate-800 p-4 rounded-2xl border border-slate-700" },
          React.createElement("p", { className: "font-black text-amber-400 mb-1" }, "3. Never Scan QR to Receive Cashback"),
          React.createElement("p", null, "Festive scratch cards on WhatsApp claiming you won ₹5,000 will ask you to enter UPI PIN. Remember: PIN = money goes OUT.")
        ),
        React.createElement(
          "div",
          { className: "bg-slate-800 p-4 rounded-2xl border border-slate-700" },
          React.createElement("p", { className: "font-black text-amber-400 mb-1" }, "4. Verify Charity Organizations"),
          React.createElement("p", null, "During Eid and Diwali, donate only to registered NGOs you recognize. Never transfer donations to private UPI mobile numbers.")
        )
      )
    )
  );
};
