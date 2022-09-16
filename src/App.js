import "./App.css";
import LabeledInput from "./LabeledInput";
import { useState } from "react";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(3000);
  const [monthlyRent, setMonthlyRent] = useState(3400);
  const [reserves, setReserves] = useState(375);

  const expectedProfit = monthlyRent - monthlyPayment - reserves;

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
      <LabeledInput
        testid="input-net-worth-roi"
        labelText="Net Worth ROI"
        value={100}
      />
    </div>
  );
}

export default App;
