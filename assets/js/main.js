/* IMCare — small progressive enhancements. The site works without this file. */
(function () {
  "use strict";

  /* ---- Mobile menu ---------------------------------------------------- */
  var toggle = document.querySelector(".menu-toggle");
  var panel = document.getElementById("mobile-nav");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        toggle.focus();
      }
    });
  }

  /* ---- Patient Tools filter ------------------------------------------- */
  var input = document.getElementById("tool-filter");
  if (input) {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-item]"));
    var subs = Array.prototype.slice.call(document.querySelectorAll("[data-sub]"));
    var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
    var count = document.getElementById("tool-count");
    var picker = document.getElementById("topic-picker");
    var empty = document.getElementById("tool-empty");
    var total = items.length;
    var timer;

    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;

      items.forEach(function (li) {
        var hit = !q || li.getAttribute("data-name").indexOf(q) !== -1;
        li.hidden = !hit;
        if (hit) shown++;
      });
      subs.forEach(function (el) {
        el.hidden = !el.querySelector("[data-item]:not([hidden])");
      });
      sections.forEach(function (el) {
        el.hidden = !el.querySelector("[data-item]:not([hidden])");
      });

      if (picker) picker.hidden = q.length > 0;
      if (empty) empty.hidden = shown !== 0;
      if (count) {
        count.textContent = q
          ? shown + (shown === 1 ? " result for " : " results for ") + '"' + input.value.trim() + '"'
          : "";
      }
    }

    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(apply, 120);
    });
    apply();
  }

  /* ---- Palette switcher (preview page only) --------------------------- */
  var bar = document.querySelector(".palette-bar");
  if (bar) {
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-palette]");
      if (!btn) return;
      document.documentElement.setAttribute("data-palette", btn.getAttribute("data-palette"));
      bar.querySelectorAll("button[data-palette]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
    });
  }
})();
