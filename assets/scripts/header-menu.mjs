class HeaderMenu {
  constructor() {
    this.tabletWidth = 768;
    this.menuButton = null;
    this.links = [];
  }

  queryElement(selector) {
    const el = document.querySelector(selector);

    if (!(el instanceof HTMLElement)) {
      console.error(`${selector} was not found.`);
      return null;
    }

    return el;
  }

  queryAllElements(selector) {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) {
      console.error(`${selector} was not found.`);
      return null;
    }

    return Array.from(elements);
  }

  toggleMenu() {
    document.body.classList.toggle('header-menu-open');
  }

  setScrollbarWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }

  handleResize = () => {
    this.setScrollbarWidth();

    if (window.innerWidth >= this.tabletWidth) {
      document.body.classList.remove('header-menu-open');
    }
  };

  addEventListeners() {
    this.menuButton.addEventListener('click', () => this.toggleMenu());

    window.addEventListener('resize', this.handleResize);

    this.links.forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('header-menu-open');
      });
    });
  }

  init() {
    this.menuButton = this.queryElement('.header__menu-toggle');
    if (!this.menuButton) return;

    this.links = this.queryAllElements('.header__nav-link') || [];

    this.setScrollbarWidth();
    this.addEventListeners();
  }
}

export default HeaderMenu;
