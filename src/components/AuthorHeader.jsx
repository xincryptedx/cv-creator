import styles from "../style/AuthorHeader.module.css";
import gitIcon from "../assets/github-mark.svg";
import doubleDownArrowIcon from "../assets/double-arrow-down.svg";
import { useState } from "react";

function AuthorHeader() {
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    setHovering(true);
  };

  const handleHoverEnd = () => {
    setHovering(false);
  };

  return (
    <header className={styles.authorHeader}>
      {" "}
      <p className={styles.authorP}>{hovering ? "Github" : "xIncryptedx"}</p>
      <a className={styles.git}>
        <img
          className={styles.gitIcon}
          src={gitIcon}
          alt="🐱"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        />
      </a>{" "}
      <img className={styles.downArrowIcon} src={doubleDownArrowIcon}></img>
    </header>
  );
}

export default AuthorHeader;
