import { createPortal } from "react-dom";

const ConfirmationModal = ({ children }) => {
  const el = document.getElementById("modal-root");

  return createPortal(children, el);
};

export default ConfirmationModal;
