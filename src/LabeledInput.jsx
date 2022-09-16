const LabeledInput = (props) => {
  const { testid, value, labelText } = props;
  return (
    <label>
      <input
        type="number"
        data-testid={testid}
        className="border"
        value={value}
      />
      {labelText}
    </label>
  );
};

export default LabeledInput;
