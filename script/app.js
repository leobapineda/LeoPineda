    const nav = document.querySelector(".header__nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY && window.scrollY >= 50) {
        nav.classList.add("hidden");
      } 
      
      else {
        nav.classList.remove("hidden");
      }
  
      lastScrollY = window.scrollY;
      console.log(lastScrollY);
    });
  