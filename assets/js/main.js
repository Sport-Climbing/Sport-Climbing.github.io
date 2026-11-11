(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-nav-panel]");
  var overlay = document.body.classList.contains("has-overlay-header");

  function setSolid() {
    if (!header) return;
    var solid = !overlay || window.scrollY > 24;
    header.classList.toggle("is-solid", solid);
  }
  setSolid();
  window.addEventListener("scroll", setSolid, { passive: true });

  function closeNav() {
    if (!panel || !toggle) return;
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      panel.classList.toggle("is-open", !open);
      document.body.style.overflow = open ? "" : "hidden";
      if (!open) {
        var first = panel.querySelector("a");
        if (first) first.focus();
      }
    });
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  var dialog = document.querySelector("[data-lightbox]");
  if (dialog && typeof dialog.showModal === "function") {
    var img = dialog.querySelector("img");
    var caption = dialog.querySelector("[data-lightbox-caption]");
    document.querySelectorAll("[data-lightbox-src]").forEach(function (button) {
      button.addEventListener("click", function () {
        img.src = button.getAttribute("data-lightbox-src");
        img.alt = button.getAttribute("data-lightbox-alt") || "";
        caption.textContent = button.getAttribute("data-lightbox-caption") || "";
        dialog.showModal();
      });
    });
    dialog.querySelector("[data-lightbox-close]").addEventListener("click", function () {
      dialog.close();
    });
  }

  var filters = document.querySelector("[data-topic-filters]");
  if (filters) {
    var items = document.querySelectorAll("[data-topic]");
    var empty = document.querySelector("[data-topic-empty]");
    filters.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-filter]");
      if (!button) return;
      filters.querySelectorAll("button").forEach(function (el) {
        el.setAttribute("aria-pressed", el === button ? "true" : "false");
      });
      var topic = button.getAttribute("data-filter");
      var shown = 0;
      items.forEach(function (item) {
        var match = topic === "all" || item.getAttribute("data-topic") === topic;
        item.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  }

  var form = document.querySelector("[data-inquiry-form]");
  if (!form) return;
  var strings = {};
  try {
    strings = JSON.parse(form.getAttribute("data-errors") || "{}");
  } catch (e) {
    strings = {};
  }
  var configured = form.getAttribute("data-configured") === "true";
  var summary = form.querySelector("[data-form-summary]");

  function setError(field, message) {
    var error = form.querySelector('[data-error-for="' + field + '"]');
    var input = form.elements[field];
    if (!error || !input) return;
    if (message) {
      error.hidden = false;
      error.textContent = message;
      input.setAttribute("aria-invalid", "true");
    } else {
      error.hidden = true;
      error.textContent = "";
      input.removeAttribute("aria-invalid");
    }
  }

  function validate() {
    var ok = true;
    function need(name, test, key) {
      var value = (form.elements[name] && form.elements[name].value || "").trim();
      if (!test(value)) {
        setError(name, strings[key] || strings[name] || "Check this field.");
        ok = false;
      } else {
        setError(name, "");
      }
    }
    need("name", function (v) { return v.length > 1; }, "name");
    need("email", function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, "email");
    need("nationality", function (v) { return v.length > 1; }, "nationality");
    need("destination", function (v) { return v.length > 0; }, "destination");
    need("experience_type", function (v) { return v.length > 0; }, "experience_type");
    need("experience_level", function (v) { return v.length > 0; }, "experience_level");
    need("dates", function (v) { return v.length > 1; }, "dates");
    need("participants", function (v) { return /^[1-9]\d*$/.test(v); }, "participants");
    need("message", function (v) { return v.length > 8; }, "message");
    var honey = form.querySelector('[name="company_website"]');
    if (honey && honey.value.trim() !== "") ok = false;
    return ok;
  }

  form.addEventListener("input", function (event) {
    var el = event.target;
    if (!el || !el.name || el.name === "company_website") return;
    setError(el.name, "");
    if (summary && !form.querySelector("[aria-invalid='true']")) summary.hidden = true;
  });

  form.addEventListener("submit", function (event) {
    var valid = validate();
    if (!valid) {
      event.preventDefault();
      if (summary) {
        summary.hidden = false;
        summary.textContent = strings.summary || "";
      }
      var firstInvalid = form.querySelector("[aria-invalid='true']");
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    if (!configured) {
      event.preventDefault();
      if (summary) {
        summary.hidden = false;
        summary.textContent = form.getAttribute("data-not-sent") || "";
      }
    }
  });
})();
