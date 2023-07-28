import FormInput from "./FormInput";
import styles from "../style/EducationEntry.module.css";
import { v4 as uuidv4 } from "uuid";

function EducationEntry({ educationEntriesData, setEducationEntriesData }) {
  // Create a new education data entry
  const newEntry = {
    uid: uuidv4(),
    schoolName: "",
    areaOfStudy: "",
    dateFrom: "",
    dateTo: "",
  };

  // Add the new entry to entries data
  setEducationEntriesData((previousEntries) => {
    [...previousEntries, newEntry];
  });

  function setDataProperty(event, property) {
    setEducationEntriesData((previousEntries) => {
      const updatedEntries = [...previousEntries];

      [...previousEntries, { [property]: event.target.value }];
      return updatedEntries;
    });
  }

  function setSchoolName(event) {
    setDataProperty(event, "schoolName");
  }

  function setAreaOfStudy(event) {
    setDataProperty(event, "areaOfStudy");
  }

  function setDateFrom(event) {
    setDataProperty(event, "dateFrom");
  }

  function setDateTo(event) {
    setDataProperty(event, "dateTo");
  }

  return (
    <section className={styles.EducationEntry}>
      <FormInput
        labelFor="schoolName"
        labelText="School/Institution:"
        inputValue={schoolName}
        setDataProperty={setSchoolName}
      ></FormInput>
      <FormInput
        labelFor="areaOfStudy"
        labelText="Degree/Area of Study:"
        inputValue={areaOfStudy}
        setDataProperty={setAreaOfStudy}
      ></FormInput>
      <FormInput
        labelFor="dateFrom"
        labelText="Date From:"
        inputValue={dateFrom}
        setDataProperty={setDateFrom}
      ></FormInput>
      <FormInput
        labelFor="dateTo"
        labelText="Date Until:"
        inputValue={dateTo}
        setDataProperty={setDateTo}
      ></FormInput>
    </section>
  );
}

export default EducationEntry;
