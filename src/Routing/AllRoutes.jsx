import React from "react";
import { Route, Routes } from "react-router-dom";
import Bracelet from "../Pages/Bracelet/Bracelet";
import BraceletPage from "../Pages/Bracelet/BraceletPage";
import Cart from "../Pages/Cart/Cart";
import Earrings from "../Pages/Earrings/Earrings";
import EarringsPage from "../Pages/Earrings/EarringsPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Necklaces from "../Pages/Necklaces/Necklaces";
import NecklacesPage from "../Pages/Necklaces/NecklacesPage";
import New from "../Pages/New/New";
import NewPage from "../Pages/New/NewPage";
import Register from "../Pages/LoginRegister/Register";
import Rings from "../Pages/Rings/Rings";
import RingsPage from "../Pages/Rings/RingsPage";
import ShopAll from "../Pages/ShopAll/ShopAll";
import ShopAllPage from "../Pages/ShopAll/ShopAllPage";
import ShopSocial from "../Pages/ShopSocial/ShopSocial";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/collections/new" element={<New />} />
        <Route path="/collections/new/:id" element={<NewPage />} />
        <Route path="/collections/allproducts" element={<ShopAll />} />
        <Route path="/collections/allproducts/:id" element={<ShopAllPage />} />
        <Route path="/collections/earrings" element={<Earrings />} />
        <Route path="/collections/earrings/:id" element={<EarringsPage />} />
        <Route path="/collections/necklaces" element={<Necklaces />} />
        <Route path="/collections/necklaces/:id" element={<NecklacesPage />} />
        <Route path="/collections/bracelet" element={<Bracelet />} />
        <Route path="/collections/bracelet/:id" element={<BraceletPage />} />
        <Route path="/collections/rings" element={<Rings />} />
        <Route path="/collections/rings/:id" element={<RingsPage />} />
        <Route path="/collections/shopsocial" element={<ShopSocial />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
