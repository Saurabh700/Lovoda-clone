import React from "react";
import { Route, Routes } from "react-router-dom";
import Bracelet from "../Pages/Bracelet";
import Cart from "../Pages/Cart";
import Earrings from "../Pages/Earrings";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Necklaces from "../Pages/Necklaces";
import New from "../Pages/New/New";
import Register from "../Pages/Register";
import Rings from "../Pages/Rings";
import ShopAll from "../Pages/ShopAll";
import ShopSocial from "../Pages/ShopSocial";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/new" element={<New />} />
        <Route path="/collections/allproducts" element={<ShopAll />} />
        <Route path="/collections/earrings" element={<Earrings />} />
        <Route path="/collections/necklaces" element={<Necklaces />} />
        <Route path="/collections/bracelet" element={<Bracelet />} />
        <Route path="/collections/rings" element={<Rings />} />
        <Route path="/collections/shopsocial" element={<ShopSocial />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
