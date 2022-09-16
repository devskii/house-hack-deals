const LabeledInput = (props) => {
  const { testid, value, labelText, stateHook } = props;
  return (
    <label>
      <input
        type="number"
        data-testid={testid}
        className="border"
        value={value}
        onChange={(event) => stateHook(parseInt(event.target.value))}
      />
      {labelText}
    </label>
  );
};

export default LabeledInput;
