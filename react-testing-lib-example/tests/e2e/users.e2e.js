// const { expect } = require("@wdio/globals");
// const UsersPage = require("../pages/hello.page");
import { expect } from "@wdio/globals";
import UsersPage from "../pages/hello.page";

describe("Users page", () => {
  it("load data", async () => {
    await UsersPage.loadData();
  });
});
