
import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    Swal.fire({
      title: "✅ Added!",
      text: `${product.product_name} has been added to cart.`,
      // size: `${product.size}`
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: "top-end",
    });
  };



  // Remove item
const removeFromCart = (id) => {
  setCart((prev) => {
    const index = prev.findIndex((item) => item.id === id);
    if (index === -1) return prev; // not found

    const newCart = [...prev];
    newCart.splice(index, 1); // remove only one item
    return newCart;
  });
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
