const nav = document.querySelector(".header__nav");
let lastScrollY = window.scrollY;
const hamburger = document.querySelector(".hamburguer-menu");
const ulHeader = document.querySelector(".ul__header");
const navLinks = document.querySelectorAll(".nav-link");
const internalContainer = document.querySelector('.hero__button-container')
let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
const heroButton = document.querySelector('.hero__button')
// define scrollbar - tengo que cambiarlo para rezise and load
document.documentElement.style.setProperty('--scrollbar-width', scrollBarWidth + "px");

window.addEventListener("scroll", () => {
  let internalContainerTop = internalContainer.getBoundingClientRect().top
  let spaceToExecute = internalContainerTop - 50
console.log(internalContainerTop);
console.log(spaceToExecute);

  if (lastScrollY < window.scrollY && window.scrollY >= 50) {
    nav.classList.add("hidden");
    hamburger.classList.remove("active");
    ulHeader.classList.remove("active");
  } 
  
  
  else {
    nav.classList.remove("hidden");
    
  }
  lastScrollY = window.scrollY;


  if(internalContainerTop <= 0) {
    heroButton.classList.add('button_down')
  } 

  else if (internalContainerTop > 0) {
    heroButton.classList.remove('button_down')

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


//detectar la posicion top del contenedor
// activar cuando la posicion sea igual al scroll

//desactivar cuando 