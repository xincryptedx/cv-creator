import FormControls from "./FormControls";
import BasicInfo from "./BasicInfo";
import DynamicEntriesContainer from "./DynamicEntriesContainer";
import EducationEntry from "./EducationEntry";
import styles from "../style/CvForm.module.css";
import { v4 as uuidv4 } from "uuid";

function CvForm({
  basicInfo,
  setBasicInfo,
  educationEntries,
  setEducationEntries,
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

  return (
    <form className={styles.cvForm}>
      <FormControls></FormControls>
      <BasicInfo data={basicInfo} setData={setBasicInfo} />
      <DynamicEntriesContainer
        entriesData={educationEntries}
        setEntriesData={setEducationEntries}
        addDataEntry={addEducationEntryData}
        removeDataEntry={removeEducationEntryData}
        EntryElement={EducationEntry}
        headerText={"Education"}
      ></DynamicEntriesContainer>
      <FormControls></FormControls>
    </form>
  );
}

export default CvForm;
