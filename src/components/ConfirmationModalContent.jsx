function ConfirmationModalContent({
  setAppState,
  setBasicInfo,
  setEducationEntries,
  setWorkEntries,
  message,
}) {
  const confirmClicked = () => {
    setBasicInfo({
      firstName: "",
      lastName: "",
      summary: "",
      phone: "",
      email: "",
      address: "",
    });
    setEducationEntries([]);
    setWorkEntries([]);
    setAppState((previousState) => ({ ...previousState, modalOpen: false }));
  };

  const cancelClicked = () => {
    setAppState((previousState) => ({ ...previousState, modalOpen: false }));
  };

  return (
    <>
      <p>{message}</p>
      <button onClick={confirmClicked}>OK</button>
      <button onClick={cancelClicked}>Cancel</button>
    </>
  );
}

export default ConfirmationModalContent;
