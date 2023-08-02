import styles from "../style/AuthorHeader.module.css";

function AuthorHeader() {
  return (
    <header className={styles.authorHeader}>
      <p>
        Created by: <a href="">xIncryptedx</a>
      </p>
    </header>
  );
}

export default AuthorHeader;
