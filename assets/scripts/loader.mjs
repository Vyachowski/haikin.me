export default class Loader {
  constructor() {
    this.loader = null;
  }

  show() {
    if (!this.loader) {
      this.loader = this.createLoader();

      document.body.appendChild(this.loader);
      console.log('Loader shown', document.body);
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
    loaderEl.textContent = 'SH';

    overlayEl.appendChild(loaderEl);
    return overlayEl;
  }
}
