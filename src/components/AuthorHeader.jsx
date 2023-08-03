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
    <header
      className={
        hovering
          ? styles.headerHovering + " " + styles.authorHeader
          : styles.authorHeader
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      {" "}
      <p className={styles.authorP}>{hovering ? "GitHub" : "xIncryptedx"}</p>
      <a
        className={styles.git}
        href="https://github.com/xincryptedx/cv-creator"
      >
        <img className={styles.gitIcon} src={gitIcon} alt="🐱" />
      </a>{" "}
      <img className={styles.downArrowIcon} src={doubleDownArrowIcon}></img>
    </header>
  );
}

export default AuthorHeader;
