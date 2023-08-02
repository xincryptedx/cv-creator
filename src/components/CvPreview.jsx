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
          <div key={entry.uid} className={styles.educationEntry}>
            <p className={styles.schoolName}>
              {entry.schoolName}
              {" - "}
              {entry.areaOfStudy !== "" ? <span>{entry.areaOfStudy}</span> : ""}
            </p>
            <p>
              {entry.dateFrom !== "" ? (
                <>
                  <span>From: </span>
                  {entry.dateFrom}
                </>
              ) : (
                ""
              )}
              {" - "}
              {entry.dateTo !== "" ? (
                <>
                  <span>Until: </span>
                  {entry.dateTo}
                </>
              ) : (
                ""
              )}
            </p>
          </div>
        );
      } else if (type === "work") {
        return (
          <div key={entry.uid} className={styles.workEntry}>
            <p className={styles.companyName}>
              {entry.companyName}
              {" - "}
              {entry.role !== "" ? <span>{entry.role}</span> : ""}
            </p>
            <p>
              {entry.dateFrom !== "" ? (
                <>
                  <span>From: </span>
                  {entry.dateFrom}
                </>
              ) : (
                ""
              )}
              {" - "}
              {entry.dateTo !== "" ? (
                <>
                  <span>Until: </span>
                  {entry.dateTo}
                </>
              ) : (
                ""
              )}
            </p>
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
        <div className={styles.basicInfo}>
          <h2>{`${basicInfo.firstName} ${basicInfo.lastName}`}</h2>
          {basicInfo.address !== "" ? <p>{basicInfo.address}</p> : null}
          {basicInfo.phone !== "" ? <p>{basicInfo.phone}</p> : null}
          {basicInfo.email !== "" ? <p>{basicInfo.email}</p> : null}
        </div>

        {basicInfo.summary !== "" ? (
          <div className={styles.summary}>
            <h2>Summary</h2>
            <p>{basicInfo.summary}</p>
          </div>
        ) : null}

        <div className={styles.education}>
          {educationEntries.length > 0 ? <h2>Education</h2> : null}
          {renderEntries(educationEntries, "education")}
        </div>

        <div className={styles.work}>
          {workEntries.length > 0 ? <h2>Experience</h2> : null}
          {renderEntries(workEntries, "work")}
        </div>
      </div>
    </main>
  );
}

export default CvPreview;
