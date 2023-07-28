import FormButton from "./FormButton";
import styles from "../style/DynamicEntriesContainer.module.css";

function DynamicEntriesContainer({
  entriesData,
  setEntriesData,
  addDataEntry,
  EntryElement,
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
      {entriesData.forEach((entry) => {
        return (
          <EntryElement
            setDataProperty={setDataProperty}
            entryData={entry}
          ></EntryElement>
        );
      })}
      <FormButton text="Add Entry"></FormButton>
    </section>
  );
}

export default DynamicEntriesContainer;
