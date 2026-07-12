const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");
if (revealItems.length) {
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.16 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

const header = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");
if (header && hero && "IntersectionObserver" in window) {
  const headerObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-scrolled", entry.intersectionRatio < 0.92);
  }, { threshold: [0, 0.92, 1] });
  headerObserver.observe(hero);
}

document.querySelectorAll("[data-faq-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (panel) panel.classList.toggle("open", !expanded);
  });
});

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      if (!form.checkValidity()) {
        status.textContent = "Please complete the required fields.";
        status.hidden = false;
        form.reportValidity();
        return;
      }
      status.textContent = "Sending...";
      status.hidden = false;
      window.setTimeout(() => {
        status.textContent = "Thanks. Your inquiry is ready to send to Jesel.";
      }, 500);
    }
  });
}
