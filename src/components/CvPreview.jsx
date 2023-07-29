import FormControls from "./FormControls";
import styles from "../style/CvPreview.module.css";

function CvPreview({ appState, setAppState }) {
  return (
    <main className={styles.cvPreview}>
      <FormControls
        appState={appState}
        setAppState={setAppState}
      ></FormControls>
      <div className={styles.cvContainer}></div>
    </main>
  );
}

export default CvPreview;
