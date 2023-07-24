import FormInput from "./FormInput";

function BasicInfo({ data, setData }) {
  //Data refs
  const { firstName, lastName } = data;
  // Data change handlers
  function setDataProperty(event, property) {
    setData({ ...data, [property]: event.target.value });
  }

  function setFirst(event) {
    setDataProperty(event, "firstName");
  }

  function setLast(event) {
    setDataProperty(event, "lastName");
  }

  return (
    <section>
      <FormInput
        labelFor="firstName"
        labelText="First:"
        inputValue={firstName}
        setDataProperty={setFirst}
      ></FormInput>
      <FormInput
        labelFor="lastName"
        labelText="Last:"
        inputValue={lastName}
        setDataProperty={setLast}
      ></FormInput>
    </section>
  );
}

export default BasicInfo;
