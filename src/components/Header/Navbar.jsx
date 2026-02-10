import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { menu as navLinks } from "../../../Data";
import {
  MdNotifications,
  MdOutlineMenu,
  MdPerson,
  MdSearch,
  MdOutlineClose,
  MdShoppingBag,
  MdDelete
} from "react-icons/md";

import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // State Management
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Close all panels
  const closeAll = () => {
    setShowMenu(false);
    setShowSearch(false);
    setShowNotify(false);
    setShowLogin(false);
    setShowCart(false);
  };

  // Toggle panel
  const toggleState = (setter, currentState) => {
    closeAll();
    if (!currentState) setter(true);
  };

  // Cart subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* ==============================
          TOP NAVBAR
      ============================== */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-md">
        <div className="flex items-center justify-between h-[60px] sm:h-[70px] px-4 sm:px-6 md:px-8 relative z-50 bg-gray-800">

          {/* Left: Menu */}
          <button
            className="text-3xl text-white focus:outline-none hover:text-green-400 transition"
            onClick={() => toggleState(setShowMenu, showMenu)}
          >
            {showMenu ? <MdOutlineClose /> : <MdOutlineMenu />}
          </button>

          {/* Center: Logo */}
          <Link
            to="/"
            className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white text-center select-none tracking-wider"
          >
            TEN ELEVEN
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => toggleState(setShowSearch, showSearch)}
            >
              <MdSearch />
            </button>

            <button
              className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => toggleState(setShowNotify, showNotify)}
            >
              <MdNotifications />
            </button>

            <button
              className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => toggleState(setShowLogin, showLogin)}
            >
              <MdPerson />
            </button>

            <div className="relative">
              <button
                className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
                onClick={() => toggleState(setShowCart, showCart)}
              >
                <MdShoppingBag />
              </button>
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div
          className={`absolute top-0 left-0 w-full bg-white h-[70px] flex items-center justify-center transition-transform duration-300 ease-in-out z-40 border-b ${
            showSearch ? "translate-y-[60px] sm:translate-y-[70px]" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center w-[90%] md:w-[60%] border-b-2 border-gray-300 pb-1">
            <input
              type="text"
              className="flex-1 bg-transparent text-gray-800 text-lg outline-none px-2"
              placeholder="What are you searching for?"
              autoFocus={showSearch}
            />
            <MdSearch className="text-2xl text-gray-500" />
            <MdOutlineClose
              className="text-2xl text-gray-500 cursor-pointer ml-4 hover:text-red-500"
              onClick={() => setShowSearch(false)}
            />
          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showMenu || showNotify || showCart || showLogin
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeAll}
      ></div>

      {/* LEFT MENU */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black z-50 transform transition-transform duration-300 shadow-2xl w-[80%] sm:w-[50%] md:w-[35%] lg:w-[25%] ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setShowMenu(false)} className="text-2xl hover:text-red-500">
            <MdOutlineClose />
          </button>
        </div>
        <div className="p-5 flex flex-col gap-4 text-lg font-medium">
          {navLinks && navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              onClick={closeAll}
              className="p-2 hover:bg-gray-100 rounded hover:text-green-600 transition"
            >
              {item.menu}
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT CART */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black z-50 transform transition-transform duration-300 shadow-2xl w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-xl font-bold">Shopping Bag ({cart.length})</h2>
          <button onClick={() => setShowCart(false)} className="text-2xl hover:text-red-500">
            <MdOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b pb-4 mb-4">
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Price: ${item.price.toFixed(2)}</p>
                  {/* <p className="text-gray-500 text-sm">Size : ${item.size}</p> */}
                  <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                  <p className="font-bold mt-1">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-xl p-2"
                >
                  <MdDelete />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Total */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-50 border-t p-4">
          <div className="flex justify-between mb-4 font-bold text-lg">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
