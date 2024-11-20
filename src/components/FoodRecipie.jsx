import { useEffect, useState } from "react";
import styles from "../css/foodrecipie.module.css";
import IngredientDisplayList from "./IngredientDisplayList";

export default ({ foodId, foodRecipie, setFoodRecipie }) => {
  const apiKey = "acbd673e780242f0a2508e4d486c7e33";

  const [isLoading, setIsLoading] = useState(true);
  const [isIngredientLoading, setIsIngredientLoading] = useState(true);
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${apiKey}`;
    async function fetchFoodRecipieDetails() {
      const response = await fetch(URL);
      const result = await response.json();
      setFoodRecipie(result);
      console.log(response);
      setIsLoading(false);
    }
    if (typeof foodId !== "undefined" && foodId !== 0) {
      console.log("food id is fetched");
      fetchFoodRecipieDetails();
    } else {
      console.log("Food id is undefined");
    }
  }, [foodId]);

  useEffect(() => {
    const ingredientURL = `https://api.spoonacular.com/recipes/${foodId}/ingredientWidget.json?apiKey=${apiKey}`;

    async function fetchIngredient() {
      const response = await fetch(ingredientURL);
      const result = await response.json();
      setIngredients(result.ingredients);
      setIsIngredientLoading(false);
    }
    if (typeof foodId !== "undefined" && foodId !== 0) {
      fetchIngredient();
    }
  }, [foodId]);

  return (
    <div>
      {!isLoading ? (
        <div>
          <h1>{foodRecipie.title}</h1>
          <img
            className={styles.image}
            src={foodRecipie.image}
            alt="Food image"
          />
          <h4 className={styles.context}>
            ${foodRecipie.pricePerServing} per serving
            <br />
            Total Serving:{foodRecipie.servings}
            <br />
            {foodRecipie.vegetarian ? "🥕Vegetarian" : "🍖 Non-Vegetarian"}
          </h4>
          <p>
            Summary:{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: foodRecipie.summary,
              }}
            />
          </p>

          <IngredientDisplayList
            isIngredientLoading={isIngredientLoading}
            ingredients={ingredients}
          ></IngredientDisplayList>

          <p className={styles.para}>
            Brief Instructions:{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: foodRecipie.instructions,
              }}
            />
          </p>

          <p className={styles.para}>
            Detail Instructions:{" "}
            <ol>
              {foodRecipie &&
              foodRecipie.analyzedInstructions &&
              foodRecipie.analyzedInstructions[0]?.steps
                ? foodRecipie.analyzedInstructions[0].steps.map(
                    (step, index) => <li key={index}>{step.step}</li>
                  )
                : "No instructions available"}
            </ol>
          </p>

          <h3>To be ready in: ⏰ {foodRecipie.readyInMinutes}</h3>
        </div>
      ) : (
        <p>Click on View Recipie to view the details of recipie</p>
      )}
    </div>
  );
};
