import FormInput from "./FormInput";
import styles from "../style/BasicInfo.module.css";

function BasicInfo({ data, setData }) {
  //Data refs
  const { firstName, lastName, summary, phone, email, address } = data;
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

  function setSummary(event) {
    setDataProperty(event, "summary");
  }

  function setPhone(event) {
    setDataProperty(event, "phone");
  }

  function setEmail(event) {
    setDataProperty(event, "email");
  }

  function setAddress(event) {
    setDataProperty(event, "address");
  }

  return (
    <section className={styles.basicInfoSection}>
      <h2>Basic Information</h2>
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
      <FormInput
        labelFor="phone"
        labelText="Phone:"
        inputValue={phone}
        setDataProperty={setPhone}
      ></FormInput>
      <FormInput
        labelFor="email"
        labelText="Email:"
        inputValue={email}
        setDataProperty={setEmail}
      ></FormInput>
      <FormInput
        labelFor="address"
        labelText="Address:"
        inputValue={address}
        setDataProperty={setAddress}
      ></FormInput>
      <FormInput
        labelFor="summary"
        labelText="Summary:"
        inputType="textarea"
        inputValue={summary}
        setDataProperty={setSummary}
      ></FormInput>
    </section>
  );
}

export default BasicInfo;
