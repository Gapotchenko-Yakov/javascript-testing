import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class HomePage {
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

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`http://localhost:3000${path}`);
  }
}
