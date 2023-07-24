import FormButton from "./FormButton";
import BasicInfo from "./BasicInfo";
import { useState } from "react";

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
    <>
      <form>
        <FormButton text="Create CV"></FormButton>
        <FormButton text="Reset"></FormButton>
        <FormButton text="Show Example"></FormButton>
        <BasicInfo data={basicInfo} setData={setBasicInfo} />
      </form>
    </>
  );
}

export default CvForm;
