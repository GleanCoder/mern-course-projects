var typeData = new Typed(".role", {
  strings: [
    "Web Developer",
    "Front-End Developer",
    "Coder",
    "Open-Source enthuasiast",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

// mobile navigation work
const navButtonEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
navButtonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
