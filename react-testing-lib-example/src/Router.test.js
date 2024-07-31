import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "./store/store";
import { Provider } from "react-redux";

describe.skip("TEST APP", () => {
  test("Router Test", async () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter initialEntries={["/asdasd"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();

    const user = userEvent.setup();

    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");

    await user.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    await user.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
});
