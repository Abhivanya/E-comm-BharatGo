import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Cart from "./components/Cart";
import OrderDetails from "./pages/OrderDetails";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home category="all" />} />
          <Route path="/cloths" element={<Home category="cloths" />} />
          <Route path="/electronics" element={<Home category="fabo" />} />
          <Route path="/furnitures" element={<Home category="furniture" />} />
          <Route path="/toys" element={<Home category="Toys" />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/my-orders" element={<Orders />} />
          <Route path="/my-orders/:orderId" element={<OrderDetails />} />
        </Routes>
        <Cart />
      </div>
    </Router>
  );
};

export default App;
