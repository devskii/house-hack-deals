import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("renders number inputs", () => {
  expect(screen.getByTestId("input-monthly-payment")).toBeInTheDocument();
  expect(screen.getByTestId("input-monthly-rent")).toBeInTheDocument();
  expect(screen.getByTestId("input-reserves")).toBeInTheDocument();
  expect(screen.getByTestId("input-annual-rent-savings")).toBeInTheDocument();
  expect(screen.getByTestId("input-monthly-loan-paydown")).toBeInTheDocument();
  expect(screen.getByTestId("input-purchase-price")).toBeInTheDocument();
  expect(screen.getByTestId("input-initial-investment")).toBeInTheDocument();
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
  expect(screen.getByLabelText("Annual Rent Savings")).toContainElement(
    screen.getByTestId("input-annual-rent-savings")
  );
  expect(screen.getByLabelText("Monthly Loan Paydown")).toContainElement(
    screen.getByTestId("input-monthly-loan-paydown")
  );
  expect(screen.getByLabelText("Purchase Price")).toContainElement(
    screen.getByTestId("input-purchase-price")
  );
  expect(screen.getByLabelText("Initial Investment")).toContainElement(
    screen.getByTestId("input-initial-investment")
  );
});

test("renders default value for each input", () => {
  expect(screen.getByTestId("input-monthly-payment")).toBe(
    screen.getByDisplayValue("3000")
  );
  expect(screen.getByTestId("input-monthly-rent")).toBe(
    screen.getByDisplayValue("3400")
  );
  expect(screen.getByTestId("input-reserves")).toBe(
    screen.getByDisplayValue("375")
  );
  expect(screen.getByTestId("input-annual-rent-savings")).toBe(
    screen.getByDisplayValue("28800")
  );
  expect(screen.getByTestId("input-monthly-loan-paydown")).toBe(
    screen.getByDisplayValue("2900")
  );
  expect(screen.getByTestId("input-purchase-price")).toBe(
    screen.getByDisplayValue("500000")
  );

  expect(screen.getByTestId("input-initial-investment")).toBe(
    screen.getByDisplayValue("50000")
  );
});

test("renders default expected profit", () => {
  expect(screen.getByText("$25/mo = Expected Profit")).toBeInTheDocument();
});

test("renders default net worth ROI for first three years", () => {
  expect(
    screen.getByText("162% = Net Worth ROI (first year)")
  ).toBeInTheDocument();
});

test("re-renders expected profit when input values change", () => {
  const inputMonthlyPaymentElement = screen.getByTestId(
    "input-monthly-payment"
  );
  const inputMonthlyRentElement = screen.getByTestId("input-monthly-rent");
  const inputReservesElement = screen.getByTestId("input-reserves");

  fireEvent.change(inputMonthlyPaymentElement, { target: { value: 2999 } });
  expect(screen.getByText("$26/mo = Expected Profit")).toBeInTheDocument();

  fireEvent.change(inputMonthlyRentElement, { target: { value: 3401 } });
  expect(screen.getByText("$27/mo = Expected Profit")).toBeInTheDocument();

  fireEvent.change(inputReservesElement, { target: { value: 374 } });
  expect(screen.getByText("$28/mo = Expected Profit")).toBeInTheDocument();
});

test("re-renders net worth ROI when input values change", () => {
  const inputAnnualRentSavingsElement = screen.getByTestId(
    "input-annual-rent-savings"
  );
  const inputMonthlyLoanPaydownElement = screen.getByTestId(
    "input-monthly-loan-paydown"
  );
  const inputPurchasePriceElement = screen.getByTestId("input-purchase-price");
  const inputInitialInvestmentElement = screen.getByTestId(
    "input-initial-investment"
  );

  fireEvent.change(inputAnnualRentSavingsElement, { target: { value: 28900 } });
  expect(
    screen.getByText("163% = Net Worth ROI (first year)")
  ).toBeInTheDocument();

  fireEvent.change(inputMonthlyLoanPaydownElement, {
    target: { value: 28900 },
  });
  expect(
    screen.getByText("164% = Net Worth ROI (first year)")
  ).toBeInTheDocument();

  fireEvent.change(inputPurchasePriceElement, { target: { value: 28900 } });
  expect(
    screen.getByText("165% = Net Worth ROI (first year)")
  ).toBeInTheDocument();

  fireEvent.change(inputInitialInvestmentElement, { target: { value: 28900 } });
  expect(
    screen.getByText("166% = Net Worth ROI (first year)")
  ).toBeInTheDocument();
});
