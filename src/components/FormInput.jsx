function FormInput({ labelText, labelFor, inputType = "text" }) {
  return (
    <>
      <label htmlFor={labelFor}>{labelText}</label>
      <input type={inputType} />
    </>
  );
}

export default FormInput;
