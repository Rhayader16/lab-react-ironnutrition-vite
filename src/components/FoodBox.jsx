import React from "react";

function FoodBox({ food, handleDeleteFood }) {
  const totalCalories = food.servings * food.calories;
  return (
    <div>
      <p>{food.name}</p>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {totalCalories}</b> kcal
      </p>

      <button onClick={() => handleDeleteFood(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
