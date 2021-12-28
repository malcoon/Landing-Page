// ScroolReveal

const sr = ScrollReveal({
    distance: "25px",
    duration: 2000,
  });

  // Header
  ScrollReveal().reveal(".logo", { delay: 150, origin: "left" });
  ScrollReveal().reveal(".navbar", { delay: 150, origin: "right" });

  // Navbar mobile
  ScrollReveal().reveal(".navbar-hamburger", { delay: 100, origin: "right" });

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


// Navbar Mobile
const hamburger = document.querySelector(".navbar-hamburger");
const navNavbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navNavbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navNavbar.classList.remove("active");
}))

