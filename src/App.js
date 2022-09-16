import "./App.css";
import LabeledInput from "./LabeledInput";

function App() {
  return (
    <div className="flex flex-col">
      <LabeledInput
        testid="input-monthly-payment"
        labelText="Monthly Payment"
        value={3000}
      />
      <LabeledInput
        testid="input-monthly-rent"
        labelText="Monthly Rent"
        value={3300}
      />
      <LabeledInput testid="input-reserves" labelText="Reserves" value={375} />
      <LabeledInput
        testid="input-net-worth-roi"
        labelText="Net Worth ROI"
        value={100}
      />
    </div>
  );
}

export default App;
