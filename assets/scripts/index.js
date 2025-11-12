const queryElement = (document, identifier) => {
  const el = document.querySelector(identifier);

  if (!(el instanceof HTMLElement)) {
    console.error(`${identifier} was not found.`);

    return null;
  }

  return el;
}

const queryAllElements = (document, identifier) => {
  const elements = document.querySelectorAll(identifier);

  if (elements.length === 0) {
    console.error(`${identifier} was not found.`);

    return null;
  }

  return Array.from(elements);
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

const addHeaderMenuLinksListener = (document, bodyEl) => {
  const linksElements = queryAllElements(document, '.header__nav-link');

  linksElements.forEach(link => {
    link.addEventListener('click', () => {
      bodyEl.classList.remove('header-menu-open');
    })
  })
}

const app = () => {
  const bodyEl = queryElement(document, 'body');
  const menuButtonEl = queryElement(document, '.header__menu-toggle');

  addToggleMenuListener(menuButtonEl, bodyEl);
  addResizeObserver(window, document, bodyEl);
  addHeaderMenuLinksListener(document, bodyEl);
}

app();
