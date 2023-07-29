import FormControls from "./FormControls";
import styles from "../style/CvPreview.module.css";

function CvPreview({ appState, setAppState }) {
  return (
    <main className={styles.cvPreview}>
      <FormControls
        appState={appState}
        setAppState={setAppState}
      ></FormControls>
      <div>Im a CV!</div>
    </main>
  );
}

export default CvPreview;
