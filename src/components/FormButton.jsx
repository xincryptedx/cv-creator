function FormButton({ text, handleClick, className }) {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default FormButton;
