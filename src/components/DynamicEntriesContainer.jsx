import FormButton from "./FormButton";

function DynamicEntriesContainer({ children }) {
  return (
    <section>
      {children}
      <FormButton text="Add Entry"></FormButton>
    </section>
  );
}

export default DynamicEntriesContainer;
