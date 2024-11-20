import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodRecipie from "./components/FoodRecipie";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState();
  const [foodRecipie, setFoodRecipie] = useState();
  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodRecipie
            foodId={foodId}
            foodRecipie={foodRecipie}
            setFoodRecipie={setFoodRecipie}
          ></FoodRecipie>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
