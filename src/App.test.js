import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("renders number inputs", () => {
  expect(screen.getByTestId("input-monthly-payment")).toBeInTheDocument();
  expect(screen.getByTestId("input-monthly-rent")).toBeInTheDocument();
  expect(screen.getByTestId("input-reserves")).toBeInTheDocument();
  expect(screen.getByTestId("input-net-worth-roi")).toBeInTheDocument();
});

test("renders the correct label for each input", () => {
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

test("renders default value for each input", () => {
  expect(screen.getByTestId("input-monthly-payment")).toBe(
    screen.getByDisplayValue("3000")
  );
  expect(screen.getByTestId("input-monthly-rent")).toBe(
    screen.getByDisplayValue("3300")
  );
  expect(screen.getByTestId("input-reserves")).toBe(
    screen.getByDisplayValue("375")
  );
  expect(screen.getByTestId("input-net-worth-roi")).toBe(
    screen.getByDisplayValue("100")
  );
});

test("renders expected profit", () => {});

test("renders expected profit based on inputs", () => {
  // const inputMonthlyPaymentElement = screen.getByTestId("input-monthly-payment");
  // fireEvent.change()
});
