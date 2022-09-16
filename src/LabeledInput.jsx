const LabeledInput = (props) => {
  return (
    <label>
      <input data-testid={props.testid} />
      {props.labelText}
    </label>
  );
};

export default LabeledInput;
