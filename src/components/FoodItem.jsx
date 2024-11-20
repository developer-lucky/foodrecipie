import styles from "../css/fooditem.module.css";
export default ({ setFoodId, food }) => {
  return (
    <div className={styles.recipieContainer}>
      <p className={styles.recipieTitle}>{food.title}</p>
      <img src={food.image} alt="No image"></img>
      <div className={styles.buttonContainer}>
        <button
          className={styles.viewRecipieButton}
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          View Recipie
        </button>
      </div>
    </div>
  );
};
