import FormControls from "./FormControls";
import styles from "../style/CvPreview.module.css";

function CvPreview({
  appState,
  setAppState,
  basicInfo,
  educationEntries,
  workEntries,
}) {
  return (
    <main className={styles.cvPreview}>
      <FormControls
        appState={appState}
        setAppState={setAppState}
      ></FormControls>
      <div className={styles.cvContainer}>
        <h1>Name</h1>
      </div>
    </main>
  );
}

export default CvPreview;
