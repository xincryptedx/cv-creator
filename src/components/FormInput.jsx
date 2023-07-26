function FormInput({
  labelText,
  labelFor,
  inputValue,
  setDataProperty,
  inputType = "text",
}) {
  if (inputType === "textarea")
    return (
      <>
        <label htmlFor={labelFor}>{labelText}</label>
        <textarea
          onChange={(event) => setDataProperty(event)}
          id={labelFor}
          value={inputValue}
        />
      </>
    );
  else
    return (
      <>
        <label htmlFor={labelFor}>{labelText}</label>
        <input
          onChange={(event) => setDataProperty(event)}
          id={labelFor}
          value={inputValue}
          type={inputType}
        />
      </>
    );
}

export default FormInput;
