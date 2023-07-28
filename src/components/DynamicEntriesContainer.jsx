import FormButton from "./FormButton";
import styles from "../style/DynamicEntriesContainer.module.css";

function DynamicEntriesContainer({
  entriesData,
  setEntriesData,
  addDataEntry,
  removeDataEntry,
  EntryElement,
  headerText,
}) {
  function setDataProperty(event, property, entryUid) {
    setEntriesData((previousEntries) => {
      const updatedEntries = [...previousEntries];
      const index = updatedEntries.findIndex((entry) => entry.uid === entryUid);
      updatedEntries[index] = {
        ...updatedEntries[index],
        [property]: event.target.value,
      };
      return updatedEntries;
    });
  }

  return (
    <section className={styles.dynamicEntriesContainer}>
      <h2>{headerText}</h2>
      {entriesData.map((entry) => (
        <EntryElement
          key={entry.uid}
          setDataProperty={setDataProperty}
          entryData={entry}
          entriesData={entriesData}
          removeDataEntry={removeDataEntry}
        ></EntryElement>
      ))}

      <FormButton text="Add Entry" onClick={addDataEntry}></FormButton>
    </section>
  );
}

export default DynamicEntriesContainer;
