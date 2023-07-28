import FormControls from "./FormControls";
import BasicInfo from "./BasicInfo";
import DynamicEntriesContainer from "./DynamicEntriesContainer";
import EducationEntry from "./EducationEntry";
import { useState } from "react";
import styles from "../style/CvForm.module.css";
import { v4 as uuidv4 } from "uuid";

function CvForm() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    summary: "",
    phone: "",
    email: "",
    address: "",
  });

  const [educationEntries, setEducationEntries] = useState([]);

  const addEducationEntryData = () => {
    // Create a new education data entry
    const newEntry = {
      uid: uuidv4(),
      schoolName: "",
      areaOfStudy: "",
      dateFrom: "",
      dateTo: "",
    };

    // Add the new entry to entries data
    setEducationEntries((previousEntries) => {
      return [...previousEntries, newEntry];
    });
  };

  return (
    <form className={styles.cvForm}>
      <FormControls></FormControls>
      <BasicInfo data={basicInfo} setData={setBasicInfo} />
      <DynamicEntriesContainer
        entriesData={educationEntries}
        setEntriesData={setEducationEntries}
      ></DynamicEntriesContainer>
      <FormControls></FormControls>
    </form>
  );
}

export default CvForm;
