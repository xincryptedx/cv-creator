import React from "react";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";
import App from "./App.jsx";
import "normalize.css";
import "./style/baseStyles.css";

createPortal(<div id="portal-root" />, document.body);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
