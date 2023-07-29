import FormButton from "./FormButton";
import styles from "../style/FormControls.module.css";

function FormControls({ setAppState }) {
  const createClicked = () => {
    setAppState((previousState) => {
      return { ...previousState, showForm: false };
    });
  };

  return (
    <nav className={styles.formControls}>
      <FormButton
        className={styles.createButton}
        text="Create CV"
        onClick={createClicked}
      ></FormButton>
      <FormButton className={styles.resetButton} text="Reset"></FormButton>
      <FormButton
        className={styles.exampleButton}
        text="Show Example"
      ></FormButton>
    </nav>
  );
}

export default FormControls;
