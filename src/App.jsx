import CvForm from "./components/CvForm";
import { useState } from "react";
import CvPreview from "./components/CvPreview";
import AuthorHeader from "./components/AuthorHeader";

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

  const [appState, setAppState] = useState({
    showForm: true,
    modalOpen: false,
  });

  if (appState.showForm === true)
    return (
      <>
        <AuthorHeader></AuthorHeader>
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
      </>
    );
  else if (appState.showForm === false)
    return (
      <>
        <AuthorHeader></AuthorHeader>
        <CvPreview
          appState={appState}
          setAppState={setAppState}
          basicInfo={basicInfo}
          setBasicInfo={setBasicInfo}
          educationEntries={educationEntries}
          setEducationEntries={setEducationEntries}
          workEntries={workEntries}
          setWorkEntries={setWorkEntries}
        ></CvPreview>{" "}
      </>
    );
}

export default App;
