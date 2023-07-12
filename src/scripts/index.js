const menuButton = document.querySelector('.menu-toggle');
const pageHeaderMenu = document.querySelector('.page-header');

menuButton.addEventListener('click', () => {
  pageHeaderMenu.classList.toggle('page-header--open');
});
