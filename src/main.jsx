import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "./style/App.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App className={styles.app} />
  </React.StrictMode>
);
