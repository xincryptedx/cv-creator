import { createPortal } from "react-dom";
import styles from "../style/Modal.module.css";

const Modal = ({ children }) => {
  const wrappedChildren = <div className={styles.modal}>{children}</div>;

  return createPortal(wrappedChildren, document.body);
};

export default Modal;
