import FormButton from "./FormButton";
import styles from "../style/FormControls.module.css";

function FormControls({ appState, setAppState }) {
  const createClicked = () => {
    setAppState((previousState) => {
      return { ...previousState, showForm: false };
    });
  };

  const editClicked = () => {
    setAppState((previousState) => {
      return { ...previousState, showForm: true };
    });
  };

  if (appState.showForm === true)
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
  else
    return (
      <nav className={styles.formControls}>
        <FormButton
          className={styles.createButton}
          text="Edit CV"
          onClick={editClicked}
        ></FormButton>
        <FormButton className={styles.printButton} text="Print"></FormButton>
        <FormButton
          className={styles.exampleButton}
          text="Show Example"
        ></FormButton>
      </nav>
    );
}

export default FormControls;
