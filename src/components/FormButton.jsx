function FormButton({ text, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default FormButton;
