function FormInput({
  labelText,
  labelFor,
  inputValue,
  handleChange,
  inputType = "text",
}) {
  return (
    <>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        onChange={handleChange}
        id={labelFor}
        value={inputValue}
        type={inputType}
      />
    </>
  );
}

export default FormInput;
