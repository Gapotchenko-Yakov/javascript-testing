import { findByText, render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
  test("renders learn react hello", () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const btnElement = screen.getByRole("button");
    const inputElement = screen.getByPlaceholderText("input value...");
    expect(helloWorldElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
    // screen.debug();
  });

  test("renders learn react hello", async () => {
    render(<App />);
    // const helloWorldElement = screen.queryByText(/hello world 2/i);
    // expect(helloWorldElement).toBeNull();
    screen.debug();
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement).toHaveStyle({ color: "red" });
    screen.debug();
  });
});
