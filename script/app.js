const nav = document.querySelector(".header__nav");
let lastScrollY = window.scrollY;
const hamburger = document.querySelector(".hamburguer-menu");
const ulHeader = document.querySelector(".ul__header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && window.scrollY >= 50) {
    nav.classList.add("hidden");
    hamburger.classList.remove("active");
    ulHeader.classList.remove("active");
  } else {
    nav.classList.remove("hidden");
    
  }
  lastScrollY = window.scrollY;
  
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ulHeader.classList.toggle("active");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ulHeader.classList.remove("active");
  })
);
