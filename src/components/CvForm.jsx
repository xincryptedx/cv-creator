import FormControls from "./FormControls";
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
      <FormControls></FormControls>
      <BasicInfo data={basicInfo} setData={setBasicInfo} />
    </form>
  );
}

export default CvForm;
