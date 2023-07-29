import FormInput from "./FormInput";
import FormButton from "./FormButton";
import styles from "../style/WorkEntry.module.css";

function WorkEntry({ entryData, setDataProperty, removeDataEntry }) {
  const { uid, companyName, role, tasks, dateFrom, dateTo } = entryData;

  function setCompanyName(event) {
    setDataProperty(event, "companyName", uid);
  }

  function setRole(event) {
    setDataProperty(event, "role", uid);
  }

  function setTasks(event) {
    setDataProperty(event, "tasks", uid);
  }

  function setDateFrom(event) {
    setDataProperty(event, "dateFrom", uid);
  }

  function setDateTo(event) {
    setDataProperty(event, "dateTo", uid);
  }

  return (
    <section className={styles.workEntry}>
      <FormButton
        className={styles.removeButton}
        onClick={() => removeDataEntry(uid)}
        text="Remove Entry"
      ></FormButton>
      <FormInput
        labelFor="companyName"
        labelText="Company/Organization:"
        inputValue={companyName}
        setDataProperty={setCompanyName}
      ></FormInput>
      <FormInput
        labelFor="role"
        labelText="Position/Role:"
        inputValue={role}
        setDataProperty={setRole}
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
      <FormInput
        labelFor="tasks"
        labelText="Responsibilities/Tasks:"
        inputValue={tasks}
        setDataProperty={setTasks}
        inputType="textarea"
      ></FormInput>
    </section>
  );
}

export default WorkEntry;
