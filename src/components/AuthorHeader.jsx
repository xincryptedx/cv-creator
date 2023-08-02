import styles from "../style/AuthorHeader.module.css";
import gitIcon from "../assets/github-mark.svg";

function AuthorHeader() {
  return (
    <header className={styles.authorHeader}>
      <p>Created by: xIncryptedx</p>
      <a>
        <img src={gitIcon} alt="" />
      </a>
    </header>
  );
}

export default AuthorHeader;
