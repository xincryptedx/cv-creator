function CvPreview({ appState }) {
  if (appState.showForm === false)
    return (
      <main>
        <div>Im a CV!</div>
      </main>
    );
}

export default CvPreview;
