
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const CartPage = ({ isOpen, closeCart } ) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div
      className={`
        fixed top-0 right-0 h-screen w-[250px] md:w-[400px] bg-white shadow-lg z-50
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">🛒 My Cart</h1>
        <button onClick={closeCart} className="text-2xl cursor-pointer font-bold hover:text-red-500">
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="flex gap-4 items-center mb-4 border-b pb-4">
                <img src={item.imageURL} alt={item.name} className="w-20 h-20 object-contain rounded" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Total: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <h2 className="text-xl font-bold mt-6 border-t pt-4">Cart Total: ${total.toFixed(2)}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
