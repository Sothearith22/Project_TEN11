
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

import ShopMen from "../components/Shop/Shopman/ShopMen";
import ShopWoman from "../components/Shop/ShopWoman/ShopWoman";
import Notfound from "../404Notfound/Notfound";

import ProductDetail from "../components/KickoffStyle/ProductDetail";
import DetailShopMen from "../components/Shop/Shopman/DetailShopMen";
import DetailShopwoman from "../components/Shop/ShopWoman/DetailShopwoman";
import Shoes from "../components/Shoes/Shoes";
import Accessories from "../components/Accessories/Accessories";
import Sale from "../components/Sales/Sale";
import ShopallCollection from "../components/Shop/ShopbyCollection/ShopallCollection";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/about" element={<About />} />

      <Route path="/product/men" element={<ShopMen />} />
      <Route path="/product/woman" element={<ShopWoman />} />
      <Route path="/shoes" element={<Shoes/>}/>
      <Route path="/accessories" element={<Accessories/>} />
      <Route path="/all" element={<ShopallCollection/>}/>
      <Route path="/sale" element={<Sale/>}/>
              {/* Detail Page */}
      <Route path="/product/detail/:id" element={<ProductDetail />} />
      <Route path="/product/men/detail/:id" element={<DetailShopMen />} />
      <Route path="/product/woman/detail/:id" element={<DetailShopwoman />} />

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Approutes;
