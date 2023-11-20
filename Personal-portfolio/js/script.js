let typeData = new Typed(".role", {
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

function adjustLayout() {
  var screenWidth = window.innerWidth;
  var prefixElement = document.querySelector(".prefix");
  var roleElement = document.querySelector(".role");

  if (screenWidth < 544) {
    prefixElement.innerHTML = "I am a<br>";

    roleElement.style.marginTop = "1.2rem";
  } else {
    prefixElement.innerHTML = "I am a";
    roleElement.style.marginTop = "0";
  }
}

// Call the function on page load and window resize
document.addEventListener("DOMContentLoaded", adjustLayout);
window.addEventListener("resize", adjustLayout);

// mobile navigation work
const navButtonEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
navButtonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
