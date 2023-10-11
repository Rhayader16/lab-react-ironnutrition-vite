import { useState } from "react";
import "./App.css";
import foodJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [storedFood, setStoredFood] = useState(foodJson);
  const handleDeleteFood = (id) => {
    const toKeep = storedFood.filter((food) => food.id !== id);
    setStoredFood(toKeep);
  };
  const handleAddFood = (food) => {
    setStoredFood([...storedFood, food]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      {storedFood.map((food) => (
        <FoodBox
          food={food}
          key={food.id}
          handleDeleteFood={handleDeleteFood}
        />
      ))}
    </div>
  );
}

export default App;
