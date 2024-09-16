import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";
import "./foodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  console.log("this are the food_list", food_list);

  return (
    <div className="food-display" id="food-display">
      <h1>explore dish in your aread</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
