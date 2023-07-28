import React from "react";
import FormButton from "./FormButton";
import styles from "../style/DynamicEntriesContainer.module.css";

function DynamicEntriesContainer({ children, entriesData, setEntriesData }) {
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
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          entriesData: entriesData,
          setEntriesData: setEntriesData,
          setDataProperty: setDataProperty,
        })
      )}
      <FormButton text="Add Entry"></FormButton>
    </section>
  );
}

export default DynamicEntriesContainer;
