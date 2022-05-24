const nav = document.querySelector(".header__nav");
let lastScrollY = window.scrollY;
const hamburger = document.querySelector(".hamburguer-menu");
const ulHeader = document.querySelector(".ul__header");
const navLinks = document.querySelectorAll(".nav-link");
const heroBtnInternalContainer = document.querySelector(".hero__button-container");
let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
const heroButton = document.querySelector(".hero__button");

document.documentElement.style.setProperty(
  "--scrollbar-width",
  scrollBarWidth + "px"
);

window.addEventListener("scroll", () => {
  let heroBtnInternalContainerTop = heroBtnInternalContainer.getBoundingClientRect().top;
  let spaceToExecute = heroBtnInternalContainerTop - 50;
  console.log(heroBtnInternalContainerTop);
  console.log(spaceToExecute);

  if (lastScrollY < window.scrollY && window.scrollY >= 50) {
    nav.classList.add("hidden");
    hamburger.classList.remove("active");
    ulHeader.classList.remove("active");
  } else {
    nav.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;

  if (heroBtnInternalContainerTop <= 0) {
    heroButton.classList.add("button_down");
  } else if (heroBtnInternalContainerTop > 0) {
    heroButton.classList.remove("button_down");
  }
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
