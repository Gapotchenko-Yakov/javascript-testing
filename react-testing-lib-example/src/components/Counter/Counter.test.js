import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("Counter test", () => {
  test("Test Router", async () => {
    const container = renderTestApp(null);

    const user = userEvent.setup();

    expect(container.getByTestId("value-title")).toHaveTextContent("0");

    const incrementBtn = container.getByTestId("increment-btn");
    const decrementBtn = container.getByTestId("decrement-btn");

    await user.click(incrementBtn);
    expect(container.getByTestId("value-title")).toHaveTextContent("1");

    await user.click(incrementBtn);
    expect(container.getByTestId("value-title")).toHaveTextContent("2");

    await user.click(decrementBtn);
    expect(container.getByTestId("value-title")).toHaveTextContent("1");
  });
});
