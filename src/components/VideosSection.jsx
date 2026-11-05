// Cybersecurity Awareness Videos Gallery
window.CyberSafeComponents = window.CyberSafeComponents || {};

window.CyberSafeComponents.VideosSection = function VideosSection(props) {
  var lang = props.lang;
  var videos = window.CYBER_VIDEOS_DATA || [];

  var [activeVideo, setActiveVideo] = React.useState(null);

  return React.createElement(
    "div",
    { className: "space-y-8 pb-12" },
    
    // Header
    React.createElement(
      "div",
      { className: "text-center max-w-3xl mx-auto" },
      React.createElement("span", { className: "text-4xl block mb-2" }, "📺"),
      React.createElement(
        "h1",
        { className: "text-2xl sm:text-4xl font-black text-slate-900 tracking-tight" },
        lang === "kn" ? "ಸೈಬರ್ ಸುರಕ್ಷತಾ ಜಾಗೃತಿ ವಿಡಿಯೋಗಳು" : (lang === "hi" ? "साइबर सुरक्षा जागरूकता वीडियो" : "Cybersecurity Awareness Videos")
      ),
      React.createElement(
        "p",
        { className: "text-slate-600 text-sm sm:text-base mt-2" },
        lang === "kn"
          ? "ಪ್ರಮುಖ ವಂಚನೆಗಳು, ಡಿಜಿಟಲ್ ಬಂಧನ ಮತ್ತು ಯುಪಿಐ ಸುರಕ್ಷತೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಈ ವಿಡಿಯೋಗಳನ್ನು ವೀಕ್ಷಿಸಿ."
          : (lang === "hi"
              ? "प्रमुख घोटालों, डिजिटल अरेस्ट और यूपीआई सुरक्षा को समझने के लिए ये वीडियो जरूर देखें।"
              : "Watch informative awareness videos detailing scam defense, digital arrest tactics, and secure UPI practices.")
      )
    ),

    // Active Video Modal / Player if selected
    activeVideo && React.createElement(
      "div",
      { className: "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn" },
      React.createElement(
        "div",
        { className: "bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl" },
        React.createElement(
          "div",
          { className: "p-4 flex items-center justify-between border-b border-slate-800 text-white" },
          React.createElement(
            "h3",
            { className: "font-black text-sm sm:text-base truncate pr-4" },
            activeVideo.title[lang] || activeVideo.title.en
          ),
          React.createElement(
            "button",
            {
              onClick: function() { setActiveVideo(null); },
              className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold"
            },
            "✕"
          )
        ),
        React.createElement(
          "div",
          { className: "relative w-full aspect-video bg-black" },
          React.createElement("iframe", {
            src: activeVideo.embedUrl + "?autoplay=1",
            title: activeVideo.title.en,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            className: "w-full h-full border-0"
          })
        ),
        React.createElement(
          "div",
          { className: "p-4 bg-slate-900 flex justify-between items-center text-xs text-slate-400" },
          React.createElement(
            "a",
            {
              href: activeVideo.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-400 hover:text-blue-300 font-bold flex items-center space-x-1"
            },
            React.createElement("span", null, "Watch on YouTube"),
            React.createElement("span", null, "↗")
          ),
          React.createElement(
            "button",
            {
              onClick: function() { setActiveVideo(null); },
              className: "bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg font-bold"
            },
            "Close Player"
          )
        )
      )
    ),

    // Videos Grid
    React.createElement(
      "div",
      { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
      videos.map(function(vid) {
        var vTitle = vid.title[lang] || vid.title.en;
        var vDesc = vid.description[lang] || vid.description.en;

        return React.createElement(
          "div",
          {
            key: vid.id,
            className: "bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          },
          React.createElement(
            "div",
            null,
            
            // Thumbnail container with play button
            React.createElement(
              "div",
              {
                className: "relative aspect-video bg-slate-900 group cursor-pointer overflow-hidden",
                onClick: function() { setActiveVideo(vid); }
              },
              React.createElement("img", {
                src: vid.thumbnail,
                alt: vTitle,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
              }),
              React.createElement(
                "div",
                { className: "absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-all" },
                React.createElement(
                  "div",
                  { className: "w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center text-2xl shadow-xl transition-transform group-hover:scale-110" },
                  "▶"
                )
              ),
              React.createElement(
                "span",
                { className: "absolute bottom-3 left-3 bg-slate-950/80 text-white text-xs font-bold px-2.5 py-1 rounded-md" },
                vid.tag
              )
            ),

            // Video Details
            React.createElement(
              "div",
              { className: "p-5 sm:p-6" },
              React.createElement(
                "h2",
                { className: "font-black text-slate-900 text-lg sm:text-xl leading-snug mb-2" },
                vTitle
              ),
              React.createElement(
                "p",
                { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" },
                vDesc
              )
            )
          ),

          // Actions
          React.createElement(
            "div",
            { className: "px-5 pb-5 sm:px-6 sm:pb-6 flex items-center justify-between border-t border-slate-100 pt-4" },
            React.createElement(
              "button",
              {
                onClick: function() { setActiveVideo(vid); },
                className: "bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow flex items-center space-x-1.5 transition-all"
              },
              React.createElement("span", null, "▶"),
              React.createElement("span", null, lang === "kn" ? "ವಿಡಿಯೋ ವೀಕ್ಷಿಸಿ" : (lang === "hi" ? "वीडियो देखें" : "Watch Video"))
            ),
            React.createElement(
              "a",
              {
                href: vid.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-slate-500 hover:text-red-600 font-bold text-xs flex items-center space-x-1"
              },
              React.createElement("span", null, "YouTube Link"),
              React.createElement("span", null, "↗")
            )
          )
        );
      })
    )
  );
};
