import FormControls from "./FormControls";
import styles from "../style/CvPreview.module.css";

function CvPreview({
  appState,
  setAppState,
  basicInfo,
  educationEntries,
  workEntries,
}) {
  function renderEntries(entries, type) {
    return entries.map((entry) => {
      if (type === "education") {
        return <div key={entry.uid}>Education Entry!</div>;
      } else if (type === "work") {
        return <div key={entry.uid}>Work Entry!</div>;
      }
    });
  }

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
        {educationEntries.length > 0 ? <h2>Education</h2> : null}
        {renderEntries(educationEntries, "education")}
        {workEntries.length > 0 ? <h2>Experience</h2> : null}
        {renderEntries(workEntries, "work")}
      </div>
    </main>
  );
}

export default CvPreview;
