class Loader {
  constructor() {
    this.loader = null;
  }

  show() {
    if (!this.loader) {
      this.loader = this.createLoader();

      document.body.appendChild(this.loader);
    }
  }

  hide() {
    if (this.loader) {
      this.loader.remove();
      this.loader = null;
    }
  }

  autoHide() {
    let timerId = null;

    if (this.loader) {
      timerId = setTimeout(() => {
        this.hide();
      }, 3000);
    }

    document.addEventListener('DOMContentLoaded', () => {
      this.hide();
      clearTimeout(timerId);
    });
  }

  createLoader() {
    const overlayEl = document.createElement('div');
    overlayEl.classList.add('loader-overlay');

    const loaderEl = document.createElement('div');
    loaderEl.classList.add('loader-content');

    overlayEl.appendChild(loaderEl);
    return overlayEl;
  }
}
