import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {

  const [checked, setChecked] = useState(toppings);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleChecked = (newTopping, i) => {
    setChecked((checked) => {
      const selectedToppings = [...checked];
      selectedToppings[i].selected = newTopping;
      return selectedToppings;
    })
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {count}, total price: {price} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, i) => (
          <Topping topping={topping} key={topping.name} 
          onSelectedChange={(newTopping) => handleChecked(newTopping, i)}
          checked={topping.checked}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
