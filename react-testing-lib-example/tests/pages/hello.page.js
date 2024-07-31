import { browser } from "@wdio/globals";
import Page from "./page";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class HomePage extends Page {
  get toggleBtn() {
    return $("#toggle");
  }

  get searchInput() {
    return $("#search");
  }

  get helloTitle() {
    return $("#hello");
  }

  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  open(path) {
    return browser.url(`http://localhost:3000${path}`);
  }
}
