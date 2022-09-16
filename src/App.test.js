import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders number inputs", () => {
  render(<App />);
  expect(screen.getByTestId("input-monthly-payment")).toBeInTheDocument();
  expect(screen.getByTestId("input-monthly-rent")).toBeInTheDocument();
  expect(screen.getByTestId("input-reserves")).toBeInTheDocument();
  expect(screen.getByTestId("input-net-worth-roi")).toBeInTheDocument();
});

test("renders the correct label for each number input", () => {
  render(<App />);
  expect(screen.getByLabelText("Monthly Payment")).toContainElement(
    screen.getByTestId("input-monthly-payment")
  );
  expect(screen.getByLabelText("Monthly Rent")).toContainElement(
    screen.getByTestId("input-monthly-rent")
  );
  expect(screen.getByLabelText("Reserves")).toContainElement(
    screen.getByTestId("input-reserves")
  );
  expect(screen.getByLabelText("Net Worth ROI")).toContainElement(
    screen.getByTestId("input-net-worth-roi")
  );
});
