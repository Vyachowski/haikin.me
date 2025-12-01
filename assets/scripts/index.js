const queryElement = (selector) => {
  const el = document.querySelector(selector);

  if (!(el instanceof HTMLElement)) {
    console.error(`${selector} was not found.`);
    return null;
  }

  return el;
};

const queryAllElements = (selector) => {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) {
    console.error(`${selector} was not found.`);
    return null;
  }

  return Array.from(elements);
};

const toggleBodyMenuState = () => {
  document.body.classList.toggle('header-menu-open');
};

const addToggleMenuListener = (menuButtonEl) => {
  menuButtonEl.addEventListener('click', toggleBodyMenuState);
};

const setScrollbarWidthVariable = () => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
};

const handleResize = () => {
  const tabletWidth = 768;
  setScrollbarWidthVariable();

  if (window.innerWidth >= tabletWidth) {
    document.body.classList.remove('header-menu-open');
  }
};

const addResizeObserver = () => {
  window.addEventListener('resize', handleResize);
};

const addHeaderMenuLinksListener = () => {
  const links = queryAllElements('.header__nav-link');
  if (!links) return;

  links.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('header-menu-open');
    });
  });
};

const app = () => {
  const menuButtonEl = queryElement('.header__menu-toggle');
  if (!menuButtonEl) return;

  setScrollbarWidthVariable();

  addToggleMenuListener(menuButtonEl);
  addResizeObserver();
  addHeaderMenuLinksListener();
};

app();
