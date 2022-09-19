import "./App.css";
import LabeledInput from "./LabeledInput";
import { useState } from "react";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(3000);
  const [monthlyRent, setMonthlyRent] = useState(3400);
  const [reserves, setReserves] = useState(375);
  const [annualRentSavings, setAnnualRentSavings] = useState(28800);
  const [monthlyLoanPaydown, setMonthlyLoanPaydown] = useState(2900);
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [initialInvestment, setInitialInvestment] = useState(50000);

  const expectedProfit = monthlyRent - monthlyPayment - reserves;

  function computeNetWorthRoi() {
    const appreciation = 0.034 * purchasePrice;
    const annualLoanPaydown = 12 * monthlyLoanPaydown;

    const netGains =
      appreciation +
      annualRentSavings +
      12 * expectedProfit +
      annualLoanPaydown;
    return Math.round((100 * netGains) / initialInvestment);
  }

  return (
    <div className="flex flex-col">
      <p>${expectedProfit}/mo = Expected Profit</p>
      <LabeledInput
        testid="input-monthly-payment"
        labelText="Monthly Payment"
        value={monthlyPayment}
        stateHook={setMonthlyPayment}
      />
      <LabeledInput
        testid="input-monthly-rent"
        labelText="Monthly Rent"
        value={monthlyRent}
        stateHook={setMonthlyRent}
      />
      <LabeledInput
        testid="input-reserves"
        labelText="Reserves"
        value={reserves}
        stateHook={setReserves}
      />
      <br />
      <p>{computeNetWorthRoi()}% = Net Worth ROI (first year)</p>
      <LabeledInput
        testid="input-annual-rent-savings"
        labelText="Annual Rent Savings"
        value={annualRentSavings}
        stateHook={setAnnualRentSavings}
      />
      <LabeledInput
        testid="input-monthly-loan-paydown"
        labelText="Monthly Loan Paydown"
        value={monthlyLoanPaydown}
        stateHook={setMonthlyLoanPaydown}
      />
      <LabeledInput
        testid="input-purchase-price"
        labelText="Purchase Price"
        value={purchasePrice}
        stateHook={setPurchasePrice}
      />
      <LabeledInput
        testid="input-initial-investment"
        labelText="Initial Investment"
        value={initialInvestment}
        stateHook={setInitialInvestment}
      />
    </div>
  );
}

export default App;
