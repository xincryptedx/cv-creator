import FormInput from "./FormInput";
import styles from "../style/EducationEntry.module.css";

function EducationEntry({ entriesData, setEntriesData, setDataProperty }) {
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
