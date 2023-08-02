import styles from "../style/AuthorHeader.module.css";
import gitIcon from "../assets/github-mark.svg";

function AuthorHeader() {
  return (
    <header className={styles.authorHeader}>
      <p className={styles.authorP}>Created by: xIncryptedx</p>
      <a className={styles.git}>
        <img className={styles.gitIcon} src={gitIcon} alt="" />
      </a>
    </header>
  );
}

export default AuthorHeader;
