import HeaderMenu from './header-menu.mjs';

class App {
  constructor(snippets) {
    this.snippets = [];

    snippets.forEach((Snippet) => { this.snippets.push(new Snippet()) });
  }

  init() {
    this.snippets.forEach((snippet) => { snippet.init() });
  }
}
const app = new App([HeaderMenu]);

app.init();
