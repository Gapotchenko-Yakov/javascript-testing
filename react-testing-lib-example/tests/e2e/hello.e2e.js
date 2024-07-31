// const { expect } = require("@wdio/globals");
// const HelloPage = require("../pages/hello.page");
import { expect } from "@wdio/globals";
import HelloPage from "../pages/hello.page";

describe.skip("Hello application", () => {
  it("should toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("should not toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("asdasd");

    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
