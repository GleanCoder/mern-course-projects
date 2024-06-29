// // Mobile Navbar

const navButtonEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelector(".nav-link");

navButtonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close mobile navigation when a link is clicked
navLinks.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});

// For role span

let typeData = new Typed(".role", {
  strings: ["Web Developer", "Front-End Developer", "Coder", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
//
function adjustLayout() {
  let screenWidth = window.innerWidth;
  let prefixElement = document.querySelector(".prefix");
  let roleElement = document.querySelector(".role");

  if (screenWidth < 544) {
    prefixElement.innerHTML = "I am a<br>";

    roleElement.style.marginTop = "1.2rem";
  } else {
    prefixElement.innerHTML = "I am a";
    roleElement.style.marginTop = "0";
  }
}
document.addEventListener("DOMContentLoaded", adjustLayout);
window.addEventListener("resize", adjustLayout);
