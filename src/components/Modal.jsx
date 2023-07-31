import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const el = document.getElementById("modal-root");

  return createPortal(children, el);
};

export default Modal;
