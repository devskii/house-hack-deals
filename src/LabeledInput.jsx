const LabeledInput = (props) => {
  return (
    <label>
      <input data-testid={props.testid} className="border" />
      {props.labelText}
    </label>
  );
};

export default LabeledInput;
