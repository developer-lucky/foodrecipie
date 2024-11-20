import FoodItem from "./FoodItem";
import styles from "../css/foodlist.module.css";

export default ({ foodData, setFoodId }) => {
  return (
    <div className={styles.recipieContainer}>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
};
