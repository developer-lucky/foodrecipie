import styles from "../css/container.module.css";

export default ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
