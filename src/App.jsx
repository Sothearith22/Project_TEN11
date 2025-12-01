
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <CartProvider>
      <BrowserRouter>
        <MainLayout toggleCart={toggleCart} cartOpen={cartOpen} />
      </BrowserRouter>
    </CartProvider>
  );    
}

export default App;
