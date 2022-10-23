import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {

  const [toppingState, setToppingState] = useState(toppings);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleChecked = (selectVal, i) => {
    console.log(selectVal)
    console.log(i)

    setToppingState((toppingState) => {
      const newToppings = [...toppingState];
      newToppings[i].selected = selectVal;
      const selectedToppings = toppingState.filter((topping) => topping.selected === true)
      console.log(selectedToppings)
      setCount(selectedToppings.length)
      
      const priceSelected = selectedToppings.reduce((acc, topping) => topping.price + acc, 0);
      setPrice(priceSelected)
      return newToppings;
    })
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {count}, total price: {price} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, i) => (
          <Topping topping={topping} key={topping.name} 
          onSelectedChange={(selectVal) => handleChecked(selectVal, i)}
          checked={topping.checked}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
