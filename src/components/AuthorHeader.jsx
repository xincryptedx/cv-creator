import styles from "../style/AuthorHeader.module.css";
import gitIcon from "../assets/github-mark.svg";
import doubleDownArrowIcon from "../assets/double-arrow-down.svg";
import { useState } from "react";

function AuthorHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.authorHeader}>
      {open === true ? (
        <>
          {" "}
          <p className={styles.authorP}>Created by: xIncryptedx</p>
          <a className={styles.git}>
            <img className={styles.gitIcon} src={gitIcon} alt="🐱" />
          </a>{" "}
        </>
      ) : (
        <img className={styles.downArrowIcon} src={doubleDownArrowIcon}></img>
      )}
    </header>
  );
}

export default AuthorHeader;
