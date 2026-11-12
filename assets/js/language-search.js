(function () {
  var empty = {
    fa: "نتیجه‌ای در این زبان پیدا نشد",
    en: "No results in this language",
    de: "Keine Treffer in dieser Sprache",
    fr: "Aucun résultat dans cette langue"
  };

  function start() {
    var lang = document.documentElement.getAttribute("lang") || "fa";
    var prefix = "/" + lang + "/";
    var results = document.getElementById("search-results");
    if (!results) return;

    var timer;

    function filter(finalPass) {
      var items = results.querySelectorAll(".search-results-list-item");
      for (var i = 0; i < items.length; i++) {
        var link = items[i].querySelector("a");
        var href = link ? link.getAttribute("href") || "" : "";
        if (href.indexOf(prefix) !== 0) items[i].remove();
      }

      var message = results.querySelector(".search-no-result");
      if (message && message.textContent === "No results found") {
        message.textContent = empty[lang] || empty.en;
      }

      if (!finalPass) return;

      var list = results.querySelector(".search-results-list");
      if (list && list.children.length === 0) {
        list.remove();
        if (!results.querySelector(".search-no-result")) {
          var note = document.createElement("div");
          note.className = "search-no-result";
          note.textContent = empty[lang] || empty.en;
          results.appendChild(note);
        }
      }
    }

    new MutationObserver(function () {
      filter(false);
      clearTimeout(timer);
      timer = setTimeout(function () {
        filter(true);
      }, 250);
    }).observe(results, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
