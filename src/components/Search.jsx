import { useEffect, useState } from "react";
import styles from "../css/search.module.css";

const apiKey = "acbd673e780242f0a2508e4d486c7e33";
const baseURL = "https://api.spoonacular.com/recipes/complexSearch";

export default ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza"); // To use the initial call
  useEffect(() => {
    async function fetchData() {
      const finalURL = `${baseURL}?query=${query}&apiKey=${apiKey}`;
      console.log(finalURL);
      const response = await fetch(finalURL);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchData();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputField}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      ></input>
    </div>
  );
};
