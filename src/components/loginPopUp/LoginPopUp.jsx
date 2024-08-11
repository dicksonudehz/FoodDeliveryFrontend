import { useContext, useState } from "react";
import "./loginPopUp.css";
import { assets } from "../assets/assets";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const res = await axios.post(newUrl, data);

    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setShowLogin(false);
    } else {
      alert(res.data.message);
    }
  };

  const [currState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-pop">
      <form action="" onSubmit={onLogin} className="login-popUp-container">
        <div className="login-popUp-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popUp-input">
          {currState === "login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleData}
              placeholder="enter your name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleData}
            placeholder="enter your email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleData}
            placeholder="enter your password"
            required
          />
          <button type="submit">
            {currState === "Sign up" ? "create an account" : "login"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>

        {currState === "login" ? (
          <p>
            Create an Account?
            <span onClick={() => setCurrentState("Sign up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("login")}> login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
