
import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import CartPage from "../components/Cart/CartPage";
import Approutes from "../routes/Approutes";

const MainLayout = ({ toggleCart, cartOpen }) => {
  return (
    <>
      {/* Global Navbar */}
      <Navbar toggleCart={toggleCart} />
      {/* Global Cart Sidebar */}
      <CartPage isOpen={cartOpen} closeCart={toggleCart} />
      {/* Routes inside layout */}
        <Approutes />
      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;

