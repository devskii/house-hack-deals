import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <label>
        <input data-testid="input-monthly-payment" />
        Monthly Payment
      </label>
      <label>
        <input data-testid="input-monthly-rent" />
        Monthly Rent
      </label>
      <label>
        <input data-testid="input-reserves" />
        Reserves
      </label>
      <label>
        <input data-testid="input-net-worth-roi" />
        Net Worth ROI
      </label>
    </>
  );
}

export default App;
