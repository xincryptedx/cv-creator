import styles from "../style/AuthorHeader.module.css";
import gitIcon from "../assets/github-mark.svg";
import doubleDownArrowIcon from "../assets/double-arrow-down.svg";
import { useState } from "react";

function AuthorHeader() {
  const [headerHover, setHeaderHover] = useState(false);
  const [gitHover, setGitHover] = useState(false);

  return (
    <header
      className={
        headerHover
          ? styles.headerHovering + " " + styles.authorHeader
          : styles.authorHeader
      }
      onMouseEnter={() => setHeaderHover(true)}
      onMouseLeave={() => setHeaderHover(false)}
    >
      {" "}
      <p className={styles.authorP}>{gitHover ? "GitHub" : "xIncryptedx"}</p>
      <a
        className={styles.git}
        href="https://github.com/xincryptedx/cv-creator"
        onMouseEnter={() => setGitHover(true)}
        onMouseLeave={() => setGitHover(false)}
        onFocus={() => setHeaderHover(true)}
        onBlur={() => setHeaderHover(false)}
      >
        <img
          className={
            gitHover
              ? styles.gitIconHovering + " " + styles.gitIcon
              : styles.gitIcon
          }
          src={gitIcon}
          alt="🐱"
        />
      </a>{" "}
      <img className={styles.downArrowIcon} src={doubleDownArrowIcon}></img>
    </header>
  );
}

export default AuthorHeader;
