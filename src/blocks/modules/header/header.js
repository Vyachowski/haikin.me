const menuButton = document.querySelector(".header__toggle");
const pageHeaderMenu = document.querySelector(".header");

menuButton.addEventListener("click", () => {
  pageHeaderMenu.classList.toggle("header--open");
});