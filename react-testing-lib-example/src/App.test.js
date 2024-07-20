import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/hello world/i);
  const btnElement = screen.getByRole("button");
  const inputElement = screen.getByPlaceholderText("input value...");
  expect(helloWorldElement).toBeInTheDocument();
  expect(btnElement).toBeInTheDocument();
  expect(inputElement).toMatchSnapshot();
  screen.debug();
});
