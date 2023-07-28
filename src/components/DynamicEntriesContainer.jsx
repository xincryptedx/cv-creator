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
      console.log(`Updating Property: ${property} on entry id: ${entryUid}`);
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
      {entriesData.map((entry) => (
        <EntryElement
          key={entry.uid}
          setDataProperty={setDataProperty}
          entryData={entry}
          entriesData={entriesData}
        ></EntryElement>
      ))}

      <FormButton text="Add Entry" onClick={addDataEntry}></FormButton>
    </section>
  );
}

export default DynamicEntriesContainer;
