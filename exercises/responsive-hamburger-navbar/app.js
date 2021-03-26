const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const mobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);
