function FormInput({ labelText, labelFor, inputValue, inputType = "text" }) {
  return (
    <>
      <label htmlFor={labelFor}>{labelText}</label>
      <input id={labelFor} value={inputValue} type={inputType} />
    </>
  );
}

export default FormInput;
