import React from "react";
import "./cart.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getCartTotalAmount,
    url
  } = useContext(StoreContext);
  console.log("total number if items in the cart", cartItems)
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/image/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="close">
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total </h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getCartTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getCartTotalAmount() === 0 ? 0: 9}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getCartTotalAmount() === 0 ? 0:getCartTotalAmount() + 9}</b>
          </div>
          <button onClick={() => navigate("/placeOrder ")}>
            proceed to checkout
          </button>
        </div>
        <div className="cart-promocode">
          <p>if you have promo code enter it here </p>
          <div className="cart-promoCode-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
