import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./myOrders.css";
import axios from "axios";
import { assets } from "../../components/assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } }
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="my-orders">
      <h2>my orders</h2>
      <div className="container">
        {data.map((orders, index) => {
          return (
            <div className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {orders.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ",";
                  }
                })}
              </p>
              <p>${orders.amount}.00</p>
              <p>Items:{orders.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{orders.status}</b>
              </p>
              <button onClick={fetchOrders}>track orders</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
