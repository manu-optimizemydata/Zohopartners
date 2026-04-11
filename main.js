(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (window.location.protocol === "file:") {
    document.documentElement.classList.add("is-file-protocol");
  }

  var leadForm = document.querySelector(".lead-form");
  if (leadForm && /^https?:$/i.test(window.location.protocol)) {
    try {
      var pageUrl = new URL(window.location.href);
      pageUrl.hash = "";
      var urlField = leadForm.querySelector('input[name="_url"]');
      if (urlField) {
        urlField.value = pageUrl.href;
      }
      var next = document.createElement("input");
      next.type = "hidden";
      next.name = "_next";
      next.value = new URL("thank-you.html", window.location.href).href;
      leadForm.appendChild(next);
    } catch (e) {
      /* FormSubmit default thank-you if URL parsing fails */
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
