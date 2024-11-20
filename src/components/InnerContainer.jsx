import styles from "../css/innercontainer.module.css";

export default ({ children }) => {
  return <div className={styles.innerContainer}>{children}</div>;
};
