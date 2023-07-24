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
        onChange={(event) => handleChange(event, "firstName")}
        id={labelFor}
        value={inputValue}
        type={inputType}
      />
    </>
  );
}

export default FormInput;
