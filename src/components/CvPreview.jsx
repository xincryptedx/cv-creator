import FormControls from "./FormControls";
import styles from "../style/CvPreview.module.css";

function CvPreview({
  appState,
  setAppState,
  basicInfo,
  setBasicInfo,
  educationEntries,
  setEducationEntries,
  workEntries,
  setWorkEntries,
}) {
  function renderEntries(entries, type) {
    return entries.map((entry) => {
      if (type === "education") {
        return (
          <div key={entry.uid}>
            <p>{`${entry.schoolName} ${
              entry.areaOfStudy !== "" ? `- ${entry.areaOfStudy}` : ""
            }`}</p>
            <p>{`${entry.dateFrom !== "" ? `From: ${entry.dateFrom}` : ""}${
              entry.dateTo !== "" ? ` Until: ${entry.dateTo}` : ""
            }`}</p>
          </div>
        );
      } else if (type === "work") {
        return (
          <div key={entry.uid}>
            <p>{`${entry.companyName} ${
              entry.role !== "" ? `- ${entry.role}` : ""
            }`}</p>
            <p>{`${entry.dateFrom !== "" ? `From: ${entry.dateFrom}` : ""}${
              entry.dateTo !== "" ? ` Until: ${entry.dateTo}` : ""
            }`}</p>
            {entry.tasks !== "" ? (
              <p>
                <span>Main Responsibilities: </span>
                {entry.tasks}
              </p>
            ) : null}
          </div>
        );
      }
    });
  }

  return (
    <main className={styles.cvPreview}>
      <FormControls
        appState={appState}
        setAppState={setAppState}
        setBasicInfo={setBasicInfo}
        setEducationEntries={setEducationEntries}
        setWorkEntries={setWorkEntries}
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
