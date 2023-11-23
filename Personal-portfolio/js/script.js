// mobile navigation work
const navButtonEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");
navButtonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// For role span

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
//

//Smooth Scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //close Mobile Nav on click
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
