import FormButton from "./FormButton";
import BasicInfo from "./BasicInfo";

function CvForm() {
  return (
    <>
      <form>
        <FormButton text="Create CV"></FormButton>
        <FormButton text="Reset"></FormButton>
        <FormButton text="Show Example"></FormButton>
        <BasicInfo />
      </form>
    </>
  );
}

export default CvForm;
