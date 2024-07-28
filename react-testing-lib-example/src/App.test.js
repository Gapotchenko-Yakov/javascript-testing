import { findByText, fireEvent, render, screen } from "@testing-library/react";
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
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement).toHaveStyle({ color: "red" });
  });

  test("CLICK EVENT", () => {
    render(<App />);

    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("INPUT EVENT", () => {
    render(<App />);

    screen.debug();

    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.getByTestId("value-elem")).toContainHTML("");
    fireEvent.input(input, { target: { value: "123123" } });
    expect(screen.getByTestId("value-elem")).toContainHTML("123123");

    screen.debug();
  });
});
