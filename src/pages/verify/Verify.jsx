import React, { useContext, useEffect } from "react";
import "./verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";


const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async() => {
    const res = await axios.post(url + "/api/order/verify", {success, orderId})
    console.log(res.data.success)
    if(res.data.success){
        navigate("/myorders")
    }else{
        navigate("/")
    }
  }
  useEffect(()=>{
    verifyPayment()
  },[])

  return (
    <>
       <div className="verify">
      <div className="spinner"></div>
    </div>
    </>
  );
};

export default Verify;
