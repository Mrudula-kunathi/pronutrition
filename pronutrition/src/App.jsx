
import React, { useState } from "react";
import { FoodBox } from "./components/FoodBox";
import "./styles.css";
import foods from "./resources/FoodData";
import Search from "./components/Search";

export default function App() {
  const [filteredFoods, setFilteredFoods] = useState(foods);

  const handleSearch = (query) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
}