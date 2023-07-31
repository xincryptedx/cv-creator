import FormButton from "./FormButton";
import styles from "../style/FormControls.module.css";
import exampleData from "../assets/exampleData";

function FormControls({
  appState,
  setAppState,
  setBasicInfo,
  setEducationEntries,
  setWorkEntries,
}) {
  const createClicked = () => {
    setAppState((previousState) => {
      return { ...previousState, showForm: false };
    });
  };

  const exampleClicked = () => {
    setBasicInfo(exampleData.basicInfo);
    setEducationEntries(exampleData.educationEntries);
    setWorkEntries(exampleData.workEntries);
  };

  const editClicked = () => {
    setAppState((previousState) => {
      return { ...previousState, showForm: true };
    });
  };

  const printClicked = () => {
    window.print();
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
          onClick={exampleClicked}
        ></FormButton>
      </nav>
    );
  else
    return (
      <nav className={styles.previewControls}>
        <FormButton
          className={styles.editButton}
          text="Edit CV"
          onClick={editClicked}
        ></FormButton>
        <FormButton
          className={styles.printButton}
          text="Print"
          onClick={printClicked}
        ></FormButton>
        <FormButton
          className={styles.exampleButton}
          text="Show Example"
        ></FormButton>
      </nav>
    );
}

export default FormControls;
