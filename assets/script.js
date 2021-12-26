const sr = ScrollReveal({
    distance: "25px",
    duration: 2000,
  });

  ScrollReveal().reveal(".logo", { delay: 150, origin: "left" });
  ScrollReveal().reveal(".navbar", { delay: 150, origin: "right" });

  // Primary page Home / Login
  ScrollReveal().reveal(".primary-content", { delay: 150, origin: "top" });
  ScrollReveal().reveal(".primary-title", { delay: 200, origin: "top" });
  ScrollReveal().reveal(".primary-description", { delay: 250, origin: "top" });
  ScrollReveal().reveal(".primary-btn", { delay: 150, origin: "top" });  
  ScrollReveal().reveal(".form", { delay: 150, origin: "right" });

  // Primary page Contact
  ScrollReveal().reveal(".contact-content", { delay: 150, origin: "left" });
  ScrollReveal().reveal(".contact-map", { delay: 200, origin: "right" });

  // Primary page About
  ScrollReveal().reveal(".about-title", { delay: 200, origin: "top" });
  ScrollReveal().reveal(".about-description", { delay: 200, origin: "top" });
  ScrollReveal().reveal(".about-link", { inter: 100, origin: "top" });

  // Footer
  ScrollReveal().reveal(".copyright", { delay: 100, origin: "bottom" });
  ScrollReveal().reveal(".terms", { delay: 100, origin: "bottom" });
