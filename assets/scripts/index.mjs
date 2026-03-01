import HeaderMenu from './header-menu.mjs';

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
    this.showEasterEgg();
  }

  initSnippets() {
    this.snippets.forEach((snippet) => {
      snippet.init();
    });
  }

  handleOverlay() {
    this.overlay = document.getElementById('app-overlay');
    if (!this.overlay) return;

    this.overlayStart = performance.now();

    const readyStates = ['complete', 'interactive'];
    if (readyStates.includes(document.readyState)) {
      this.removeOverlay();
    } else {
      document.addEventListener(
        'DOMContentLoaded',
        () => {
          this.removeOverlay();
        },
        { once: true },
      );
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

  showEasterEgg() {
    const easterEggText = `
    ╔═══════════════════════════════════════════════════════════════════╗
    ║                                                                   ║
    ║    ██████╗ ██╗██████╗     ██████╗ ██╗████████╗██╗   ██╗           ║
    ║   ██╔════╝ ██║██╔══██╗   ██╔════╝ ██║╚══██╔══╝╚██╗ ██╔╝           ║
    ║   ██║      ██║██████╔╝   ██║      ██║   ██║    ╚████╔╝            ║
    ║   ██║      ██║██╔══██╗   ██║      ██║   ██║     ╚██╔╝             ║
    ║   ╚██████╗ ██║██║  ██║   ╚██████╗ ██║   ██║      ██║              ║
    ║    ╚═════╝ ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚═╝   ╚═╝      ╚═╝              ║
    ║                                                                   ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║                                                                   ║
    ║   S.P.E.C.I.A.L: 10 10 10 10 10 10 10   LEVEL: 1                  ║
    ║   KARMA: 999   REPUTATION: CHOSEN ONE OF THE WASTES               ║
    ║                                                                   ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║                                                                   ║
    ║   Sulik: "You readin' the source code?"                           ║
    ║           "Sulik not sure that wise."                             ║
    ║           "Sulik seen men go mad for less."                       ║
    ║           "Maybe go save Arroyo instead, yes?"                    ║
    ║                                                                   ║
    ║   [✓ Keep reading]   [✗ Close DevTools]   [? Barter for bugs]     ║
    ║                                                                   ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║                                                                   ║
    ║  >> You attempt to inspect the source code.                       ║
    ║  >> You find... HTML. Just HTML.                                  ║
    ║  >> You gain 0 XP.                                                ║
    ║  >> Your karma is unaffected.                                     ║
    ║  >> You are mildly disappointed.                                  ║
    ║                                                                   ║
    ║  ITEM FOUND: [Code Comment] x1  — worn, but functional.           ║
    ║                                                                   ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║                                                                   ║
    ║   Myron: "I once tried to read someone's source code.             ║
    ║            Built a dependency that did nothing.                   ║
    ║            Called it Jet. Made a fortune."                        ║
    ║                                                                   ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║                                                                   ║
    ║   ⚠  NOTICE FROM THE OVERSEER OF VAULT 13:                        ║
    ║      Unauthorized reading of HTML comments is punishable          ║
    ║      by immediate dispatch to Navarro. Alone. No armor.           ║
    ║                                                                   ║
    ╚═══════════════════════════════════════════════════════════════════╝

       ~ NUKA-COLA QUANTUM — now available in your source code ~

       © 2241 Enclave Industries. All rights reserved by nuclear force.
    `;

    console.log(easterEggText);
  }
}

const app = new App([HeaderMenu]);
app.init();
