import FormControls from "./FormControls";
import BasicInfo from "./BasicInfo";
import DynamicEntriesContainer from "./DynamicEntriesContainer";
import EducationEntry from "./EducationEntry";
import { useState } from "react";
import styles from "../style/CvForm.module.css";

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

  return (
    <form className={styles.cvForm}>
      <FormControls></FormControls>
      <BasicInfo data={basicInfo} setData={setBasicInfo} />
      <DynamicEntriesContainer>Education Entry</DynamicEntriesContainer>
      <FormControls></FormControls>
    </form>
  );
}

export default CvForm;
