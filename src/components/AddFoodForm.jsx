import React from "react";
import { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [foods, setFoods] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFoods({ ...foods, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const calories = parseFloat(foods.calories);
    const servings = parseFloat(foods.servings);

    onAddFood({ ...foods, calories, servings });

    setFoods({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <div>
      <h2>Add New Food</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={foods.name}
          onChange={handleInput}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={foods.image}
          onChange={handleInput}
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={foods.calories}
          onChange={handleInput}
        />

        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={foods.servings}
          onChange={handleInput}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
