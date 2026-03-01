import HeaderMenu from './header-menu.mjs'

class App {
  #FADE_DURATION = 300;
  #ERROR_TIMEOUT = 5000;

  constructor(snippets) {
    this.snippets = snippets.map((Snippet) => new Snippet());
    this.overlay = null;
    this.overlayStart = null;
    this.minOverlayTime = 1000;
    this._errorTimer = null;
  }

  init() {
    this.initSnippets();
    this.handleOverlay();
  }

  initSnippets() {
    this.snippets.forEach((snippet) => snippet.init());
  }

  handleOverlay() {
    if (!window.__overlayActive) return;

    this.overlay = document.getElementById('app-overlay');
    if (!this.overlay) return;

    this.overlayStart = performance.now();

    const readyStates = ['complete', 'interactive'];
    if (readyStates.includes(document.readyState)) {
      console.log('Hey!')
      this.removeOverlay();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        console.log('Hey!')
        this.removeOverlay()
      }, { once: true });
    }

    this._errorTimer = setTimeout(() => this.showError(), this.#ERROR_TIMEOUT);
  }

  removeOverlay() {
    if (!this.overlay) return;

    clearTimeout(this._errorTimer);

    const elapsed = performance.now() - this.overlayStart;
    const delay = Math.max(0, this.minOverlayTime - elapsed);

    setTimeout(() => {
      this.overlay.style.opacity = '0';
      setTimeout(() => {
        this.overlay.remove();
        this.overlay = null;
        localStorage.setItem('visited', '1');
      }, this.#FADE_DURATION);
    }, delay);
  }

  showError() {
    if (!this.overlay) return;

    this.overlay.innerHTML = `
      <div style="text-align:center;font-family:system-ui">
        <p>Something went wrong</p>
        <button onclick="location.reload()">Reload</button>
      </div>
    `;
  }
}

const app = new App([HeaderMenu])
app.init()
