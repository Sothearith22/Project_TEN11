import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { MdDelete } from "react-icons/md";

const CartPage = ({ isOpen, closeCart }) => {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[260px] md:w-[400px] bg-white shadow-lg z-50
      transform transition-transform duration-500
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">
        <h1 className="text-xl font-bold">🛒 My Cart</h1>
        <button onClick={closeCart} className="text-2xl font-bold">
          &times;
        </button>
      </div>

      {/* Items */}
      <div className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b pb-4 mb-4"
            >
              <img
                src={item.imageURL}
                alt={item.name}
                className="w-20 h-20 object-contain rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 border rounded"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-xl hover:text-red-700"
              >
                <MdDelete />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      {cart.length > 0 && (
        <div className="p-4 border-t font-bold">
          Total: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default CartPage;
