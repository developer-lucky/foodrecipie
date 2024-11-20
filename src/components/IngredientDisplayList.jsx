import styles from "../css/ingredientdisplaylist.module.css";

export default ({ isIngredientLoading, ingredients }) => {
  return (
    <div>
      <h3>Ingrediants</h3>
      {!isIngredientLoading ? (
        <div>
          {ingredients.map((item) => (
            <div key={item.name} className={styles.ingredientItem}>
              {item.name}
              <br />
              {item.amount.metric.value} {item.amount.metric.unit}
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                alt="Image not found"
              ></img>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading ingredients</p>
      )}
    </div>
  );
};
