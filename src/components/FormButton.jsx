function FormButton({ text, onClick, className }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default FormButton;
