import CvForm from "./components/CvForm";
import { useState } from "react";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    summary: "",
    phone: "",
    email: "",
    address: "",
  });

  const [educationEntries, setEducationEntries] = useState([]);

  const [workEntries, setWorkEntries] = useState([]);

  return (
    <>
      <CvForm
        basicInfo={basicInfo}
        setBasicInfo={setBasicInfo}
        educationEntries={educationEntries}
        setEducationEntries={setEducationEntries}
        workEntries={workEntries}
        setWorkEntries={setWorkEntries}
      />
    </>
  );
}

export default App;
