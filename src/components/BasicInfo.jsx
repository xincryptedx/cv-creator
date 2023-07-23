import FormInput from "./FormInput";

function BasicInfo({ firstName }) {
  return (
    <section>
      <FormInput
        labelFor="firstName"
        labelText="First:"
        inputValue={firstName}
      ></FormInput>
    </section>
  );
}

export default BasicInfo;
