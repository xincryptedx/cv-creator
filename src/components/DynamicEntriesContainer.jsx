import FormButton from "./FormButton";
import styles from "../style/DynamicEntriesContainer.module.css";

function DynamicEntriesContainer({ children }) {
  return (
    <section className={styles.dynamicEntriesContainer}>
      {children}
      <FormButton text="Add Entry"></FormButton>
    </section>
  );
}

export default DynamicEntriesContainer;
