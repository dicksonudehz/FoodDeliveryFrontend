import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/orders/MyOrders";

function App() {
  const[showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}

    <div className="App">
      <BrowserRouter>
        <Navbar setShowLogin={setShowLogin} showLogin={showLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer/>
    </>
  );
}

export default App;
