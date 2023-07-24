function FormInput({
  labelText,
  labelFor,
  inputValue,
  setDataProperty,
  inputType = "text",
}) {
  return (
    <>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        onChange={(event) => setDataProperty(event, "firstName")}
        id={labelFor}
        value={inputValue}
        type={inputType}
      />
    </>
  );
}

export default FormInput;
