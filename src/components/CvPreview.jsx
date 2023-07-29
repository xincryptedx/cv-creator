import FormControls from "./FormControls";

function CvPreview({ appState, setAppState }) {
  return (
    <main>
      <FormControls
        appState={appState}
        setAppState={setAppState}
      ></FormControls>
      <div>Im a CV!</div>
    </main>
  );
}

export default CvPreview;
