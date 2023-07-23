import FormButton from "./FormButton";

function CvForm() {
  return (
    <>
      <form>
        <FormButton text="Create CV"></FormButton>
        <FormButton text="Reset"></FormButton>
        <FormButton text="Show Example"></FormButton>
      </form>
    </>
  );
}

export default CvForm;
