import "./App.css";
import LabeledInput from "./LabeledInput";

function App() {
  return (
    <>
      <LabeledInput
        testid="input-monthly-payment"
        labelText="Monthly Payment"
      />
      <LabeledInput testid="input-monthly-rent" labelText="Monthly Rent" />
      <LabeledInput testid="input-reserves" labelText="Reserves" />
      <LabeledInput testid="input-net-worth-roi" labelText="Net Worth ROI" />
    </>
  );
}

export default App;
