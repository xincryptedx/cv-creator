import CvForm from "./components/CvForm";
import { useState } from "react";
import CvPreview from "./components/CvPreview";

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

  const [appState, setAppState] = useState({ showForm: true });

  if (appState.showForm === true)
    return (
      <CvForm
        basicInfo={basicInfo}
        setBasicInfo={setBasicInfo}
        educationEntries={educationEntries}
        setEducationEntries={setEducationEntries}
        workEntries={workEntries}
        setWorkEntries={setWorkEntries}
        appState={appState}
        setAppState={setAppState}
      />
    );
  else if (appState.showForm === false)
    return (
      <CvPreview
        appState={appState}
        setAppState={setAppState}
        basicInfo={basicInfo}
        educationEntries={educationEntries}
        workEntries={workEntries}
      ></CvPreview>
    );
}

export default App;
