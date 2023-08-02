import styles from "../style/AuthorHeader.module.css";
import gitIcon from "../assets/github-mark.svg";
import { useState } from "react";

function AuthorHeader() {
  const [open, setOpen] = useState(false);

  if (open === true)
    return (
      <header className={styles.authorHeader}>
        <p className={styles.authorP}>Created by: xIncryptedx</p>
        <a className={styles.git}>
          <img className={styles.gitIcon} src={gitIcon} alt="" />
        </a>
      </header>
    );
  else
    return (
      <header className={styles.authorHeader}>
        <p>down arrow</p>
      </header>
    );
}

export default AuthorHeader;
