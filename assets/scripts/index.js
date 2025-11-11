const queryElement = (document, identifier) => {
  const el = document.querySelector(identifier);

  if (!(el instanceof HTMLElement)) {
    console.error(`${identifier} was not found.`);

    return null;
  }

  return el;
}

const toggleBodyBlock = (bodyEl) => {
  bodyEl.classList.toggle('header-menu-open');
}

const addToggleMenuListener = (menuButtonEl, bodyEl) => {
  menuButtonEl.addEventListener('click', () => {
    toggleBodyBlock(bodyEl);
  })
}

const setScrollbarWidthVariable = (window, document) => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

const addResizeObserver = (window, document, bodyEl) => {
  window.addEventListener('resize', () => {
    setScrollbarWidthVariable(window, document);

    if (window.innerWidth >= 768) {
      bodyEl.classList.contains('header-menu-open') && toggleBodyBlock(bodyEl);
    };
  })
}

const app = () => {
  const bodyEl = queryElement(document, 'body');
  const menuButtonEl = queryElement(document, '.header__menu-toggle');

  addToggleMenuListener(menuButtonEl, bodyEl);
  addResizeObserver(window, document, bodyEl);
}

app();
