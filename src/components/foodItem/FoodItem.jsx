import "./foodItem.css";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
const[itemCount, setItemCount] = useState(0)
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={url + "/image/" + image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          /> 
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-desc">{description}</div>
        <div className="food-item-price">${price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
