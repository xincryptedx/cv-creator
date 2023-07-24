import FormInput from "./FormInput";

function BasicInfo({ data, setData }) {
  const { firstName } = data;
  function setDataProperty(event, property) {
    setData({ ...data, [property]: event.target.value });
  }
  return (
    <section>
      <FormInput
        labelFor="firstName"
        labelText="First:"
        inputValue={firstName}
        handleChange={setDataProperty}
      ></FormInput>
    </section>
  );
}

export default BasicInfo;
