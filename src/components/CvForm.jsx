import FormControls from "./FormControls";
import BasicInfo from "./BasicInfo";
import DynamicEntriesContainer from "./DynamicEntriesContainer";
import EducationEntry from "./EducationEntry";
import styles from "../style/CvForm.module.css";
import { v4 as uuidv4 } from "uuid";
import WorkEntry from "./WorkEntry";

function CvForm({
  basicInfo,
  setBasicInfo,
  educationEntries,
  setEducationEntries,
  workEntries,
  setWorkEntries,
  appState,
  setAppState,
}) {
  const addEducationEntryData = () => {
    // Create a new education data entry
    const newEntry = {
      uid: uuidv4(),
      schoolName: "",
      areaOfStudy: "",
      dateFrom: "",
      dateTo: "",
    };

    // Add the new entry to entries data state
    setEducationEntries((previousEntries) => {
      return [...previousEntries, newEntry];
    });
  };

  const removeEducationEntryData = (uid) => {
    setEducationEntries((previousEntries) => {
      const updatedEntries = previousEntries.filter(
        (entry) => entry.uid !== uid
      );
      return updatedEntries;
    });
  };

  const addWorkEntryData = () => {
    // Create a new education data entry
    const newEntry = {
      uid: uuidv4(),
      companyName: "",
      role: "",
      tasks: "",
      dateFrom: "",
      dateTo: "",
    };

    // Add the new entry to entries data state
    setWorkEntries((previousEntries) => {
      return [...previousEntries, newEntry];
    });
  };

  const removeWorkEntryData = (uid) => {
    setWorkEntries((previousEntries) => {
      const updatedEntries = previousEntries.filter(
        (entry) => entry.uid !== uid
      );
      return updatedEntries;
    });
  };

  if (appState.showForm === true)
    return (
      <form className={styles.cvForm}>
        <FormControls
          appState={appState}
          setAppState={setAppState}
        ></FormControls>
        <BasicInfo data={basicInfo} setData={setBasicInfo} />
        <DynamicEntriesContainer
          entriesData={educationEntries}
          setEntriesData={setEducationEntries}
          addDataEntry={addEducationEntryData}
          removeDataEntry={removeEducationEntryData}
          EntryElement={EducationEntry}
          headerText={"Education"}
        ></DynamicEntriesContainer>
        <DynamicEntriesContainer
          entriesData={workEntries}
          setEntriesData={setWorkEntries}
          addDataEntry={addWorkEntryData}
          removeDataEntry={removeWorkEntryData}
          EntryElement={WorkEntry}
          headerText={"Practical Experience"}
        ></DynamicEntriesContainer>
        <FormControls
          appState={appState}
          setAppState={setAppState}
        ></FormControls>
      </form>
    );
}

export default CvForm;
