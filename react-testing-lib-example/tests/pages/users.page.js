import { $ } from "@wdio/globals";
import Page from "./page.js";

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    return browser.react$$("User");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.loadingTitle.usersList({ timeout: 2000 });
    } catch (error) {
      throw new Error("Не удалось загрузить пользователей.");
    }
  }

  open() {
    return super.open("/users-test");
  }
}

export default new UsersPage();
