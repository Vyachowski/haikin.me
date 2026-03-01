import HeaderMenu from './header-menu.mjs';
import Loader from './loader.mjs';

class App {
  constructor(snippets) {
    this.snippets = [];

    snippets.forEach((Snippet) => { this.snippets.push(new Snippet()) });
  }

  init() {
    this.initLoader();
    this.initSnippets();
  }

  initLoader() {
    const isBrowserCompatible = this.checkBrowserCompatibilityForLoader()

    if (isBrowserCompatible) {
      this.loader.show();
      this.loader.autoHide();
    }
  }

  initSnippets() {
    this.snippets.forEach((snippet) => { snippet.init() });
  }

  checkBrowserCompatibilityForLoader() {
    const isColdStart = localStorage.getItem('first-load') === 'true';
    const isLikelyHuman = this.isLikelyHuman();

    return isColdStart && isLikelyHuman;
  }

  isLikelyHuman() {
    let score = 0

    if (navigator.webdriver) score++                                          // 1. Автоматизация
    if (/bot|crawl|spider|slurp|headless/i.test(navigator.userAgent)) score++ // 2. Headless / crawler user agents
    if (!document.hasFocus()) score++                                         // 3. Страница не в фокусе
    if (document.visibilityState !== 'visible') score++                       // 4. Не видима
    if (!window.requestAnimationFrame) score++                                // 5. Нет rAF (очень подозрительно)

    return score < 2
  }
}
const app = new App(new Loader(), [HeaderMenu]);

app.init();
