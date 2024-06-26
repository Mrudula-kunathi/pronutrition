import React, { useState } from "react";

export const FoodBox = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedItems, setAddedItems] = useState([]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10); 
    setQuantity(value >= 1 ? value : 1); 
  };

  const handleAddItemClick = () => {
    const newItem = {
      name: food.name,
      quantity: quantity,
      totalCalories: quantity * food.cal,
    };

    const updatedItems = [...addedItems]; 
    let itemExists = false;

    updatedItems.forEach((item) => {
      if (item.name === food.name) {
        item.quantity += quantity;
        item.totalCalories += quantity * food.cal;
        itemExists = true;
      }
    });

    if (!itemExists) {
      updatedItems.push(newItem);
    }

    setAddedItems(updatedItems);
    setQuantity(1); 
  };

  const handleResetItemClick = (itemName) => {
    const updatedItems = addedItems.filter((item) => item.name !== itemName);
    setAddedItems(updatedItems);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={handleAddItemClick}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="media-right">
          {addedItems.map((item, index) => (
            <div className="added-item" key={index}>
              <p>{`${item.quantity} ${item.name} = ${item.totalCalories} calories`}</p>
              <button
                className="button is-danger"
                onClick={() => handleResetItemClick(item.name)}
              >
                Reset
              </button>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};
