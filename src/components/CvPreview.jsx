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
        <h2>{`${basicInfo.firstName} ${basicInfo.lastName}`}</h2>
        {basicInfo.address !== "" ? (
          <p>{`Address: ${basicInfo.address}`}</p>
        ) : null}
        {basicInfo.phone !== "" ? <p>{`Phone: ${basicInfo.phone}`}</p> : null}
        {basicInfo.email !== "" ? <p>{`Email: ${basicInfo.email}`}</p> : null}
        {basicInfo.summary !== "" ? (
          <>
            <h2>Summary</h2>
            <p>{basicInfo.summary}</p>
          </>
        ) : null}
      </div>
    </main>
  );
}

export default CvPreview;
