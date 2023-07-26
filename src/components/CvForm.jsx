import FormButton from "./FormButton";
import BasicInfo from "./BasicInfo";
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
  return (
    <form className={styles.cvForm}>
      <FormButton text="Create CV"></FormButton>
      <FormButton text="Reset"></FormButton>
      <FormButton text="Show Example"></FormButton>
      <BasicInfo data={basicInfo} setData={setBasicInfo} />
    </form>
  );
}

export default CvForm;
