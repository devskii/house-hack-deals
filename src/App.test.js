import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders number inputs", () => {
  render(<App />);

  expect(screen.getByTestId("input-monthly-payment")).toBeInTheDocument();
  expect(screen.getByTestId("input-monthly-rent")).toBeInTheDocument();
  expect(screen.getByTestId("input-reserves")).toBeInTheDocument();
  expect(screen.getByTestId("input-net-worth-roi")).toBeInTheDocument();
});
