(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (window.location.protocol === "file:") {
    document.documentElement.classList.add("is-file-protocol");
  }

  var formNext = document.querySelector('.lead-form input[name="_next"]');
  if (formNext && /^https?:$/i.test(window.location.protocol)) {
    try {
      formNext.value = new URL("thank-you.html", window.location.href).href;
    } catch (e) {
      /* keep empty → FormSubmit default thank-you page */
    }
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
})();
