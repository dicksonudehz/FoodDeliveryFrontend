import React, { useContext, useEffect, useState } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getCartTotalAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items:orderItems,
      amount:getCartTotalAmount() + 2
    }
    const res = await axios.post(url + "/api/order/place", orderData, {headers:{token}});
    console.log(res)
    setData(res)
    if(res.data.success){
      const {success_url} = res.data
      window.location.replace(success_url)
    }else{
      alert("error loading the api")
    }
  };  
const navigate = useNavigate()

  useEffect(() => {
    if(!token){
navigate("/cart")
    }else if(getCartTotalAmount() === 0){
navigate("/cart")
    }
    console.log(data)
  },[])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">delivery information</p>
        <div className="multi-field">
          <input required
            name="firstname"
            onChange={onchangeHandler}
            value={data.firstname}
            type="text"
            placeholder="firstname"
          />
          <input required
            name="lastname"
            onChange={onchangeHandler}
            value={data.lastname}
            type="text"
            placeholder="lastname"
          />
        </div>
        <input required
          name="email"
          onChange={onchangeHandler}
          value={data.email}
          type="email"
          placeholder="email address"
        />
        <input required
          name="street"
          onChange={onchangeHandler}
          value={data.street}
          type="text"
          placeholder="street"
        />
        <div className="multi-field">
          <input required
            name="city"
            onChange={onchangeHandler}
            value={data.city}
            type="text"
            placeholder="city"
          />
          <input required
            name="state"
            onChange={onchangeHandler}
            value={data.state}
            type="text"
            placeholder="state"
          />
        </div>
        <div className="multi-field">
          <input required
            name="zip_code"
            onChange={onchangeHandler}
            value={data.zip_code}
            type="text"
            placeholder="zip-code"
          />
          <input required
            name="country"
            onChange={onchangeHandler}
            value={data.country}
            type="text"
            placeholder="country"
          />
        </div>
        <input required
          name="phone"
          onChange={onchangeHandler}
          value={data.phone}
          type="text"
          placeholder="phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getCartTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getCartTotalAmount() === 0 ? 0 : 9}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 9}</b>
          </div>
          <button type="submit">proceed to checkout</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
