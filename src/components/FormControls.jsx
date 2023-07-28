import FormButton from "./FormButton";
import styles from "../style/FormControls.module.css";

function FormControls() {
  return (
    <nav className={styles.formControls}>
      <FormButton className={styles.createButton} text="Create CV"></FormButton>
      <FormButton className={styles.resetButton} text="Reset"></FormButton>
      <FormButton
        className={styles.exampleButton}
        text="Show Example"
      ></FormButton>
    </nav>
  );
}

export default FormControls;
