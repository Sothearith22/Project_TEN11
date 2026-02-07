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
  const { cart } = useContext(CartContext);

  // State Management
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Helper to close everything (prevents overlapping sidebars)
  const closeAll = () => {
    setShowMenu(false);
    setShowSearch(false);
    setShowNotify(false);
    setShowLogin(false);
    setShowCart(false);
  };

  // Toggle handlers that ensure other panels close
  const toggleState = (setter, currentState) => {
    closeAll();
    if (!currentState) setter(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-md">
        {/* --- Top Navbar Bar --- */}
        <div className="flex items-center justify-between h-[60px] sm:h-[70px] px-4 sm:px-6 md:px-8 relative z-50 bg-gray-800">
          
          {/* Left: Menu Button */}
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

          {/* Right: Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <button
              className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => toggleState(setShowSearch, showSearch)}
            >
              <MdSearch />
            </button>

            {/* Notification */}
            <button
              className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => toggleState(setShowNotify, showNotify)}
            >
              <MdNotifications />
            </button>

            {/* Profile / Login */}
            <button
              className="text-2xl text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => toggleState(setShowLogin, showLogin)}
            >
              <MdPerson />
            </button>

            {/* Cart */}
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

        {/* ==============================
            SEARCH BAR (Slide Down) 
           ============================== */}
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

      {/* ==============================
          SHARED OVERLAY (Backdrop)
          Closes any open sidebar when clicked
         ============================== */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showMenu || showNotify || showCart || showLogin
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeAll}
      ></div>

      {/* ==============================
          LEFT MENU SIDEBAR
         ============================== */}
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

      {/* ==============================
          RIGHT CART SIDEBAR
         ============================== */}
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

        {/* Cart Items Area */}
        <div className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
            {/* Example Static Item (Replace with cart.map in future) */}
            <div className="flex gap-4 items-center border-b pb-4 mb-4">
              <img
                src="https://zandokh.com/image/catalog/banner/2025/ZANDO/October/ten11%20banner%20app.jpg"
                alt="Item"
                className="w-20 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold line-clamp-1">TEN11 Oversized T-Shirt</h3>
                <p className="text-gray-500 text-sm">Size: M</p>
                <p className="font-bold mt-1">$29.99</p>
              </div>
              <button className="text-red-500 hover:text-red-700 text-xl p-2">
                <MdDelete />
              </button>
            </div>
        </div>

        {/* Footer Total */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-50 border-t p-4">
          <div className="flex justify-between mb-4 font-bold text-lg">
            <span>Subtotal:</span>
            <span>$29.99</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            CHECKOUT
          </button>
        </div>
      </div>

      {/* ==============================
          RIGHT NOTIFICATION SIDEBAR
         ============================== */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1a1a1a] text-white z-50 transform transition-transform duration-300 shadow-2xl w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] ${
          showNotify ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button onClick={() => setShowNotify(false)} className="text-2xl hover:text-green-500">
            <MdOutlineClose />
          </button>
        </div>

        <div className="p-5 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
          {/* Notification List (Using Map for cleaner code) */}
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border-b border-gray-800 pb-5">
              <h3 className="font-medium mb-2 flex items-center gap-2 text-green-400">
                Top of the Class in Style 🎓
              </h3>
              <img
                src="https://zandokh.com/image/catalog/banner/2025/ZANDO/October/ten11%20banner%20app.jpg"
                alt="Promo"
                className="rounded-lg mb-3 w-full object-cover h-40"
              />
              <p className="text-sm text-gray-400 mb-3">
                Discover the Post Modern Academy Collection now!
              </p>
              <div className="flex gap-2 justify-end">
                <button className="text-xs border border-white px-3 py-1.5 hover:bg-white hover:text-black transition">
                  SHOP WOMEN
                </button>
                <button className="text-xs border border-white px-3 py-1.5 hover:bg-white hover:text-black transition">
                  SHOP MEN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==============================
          LOGIN DROPDOWN
         ============================== */}
      <div
        className={`fixed right-4 sm:right-16 top-[70px] bg-white text-black rounded-lg shadow-xl border w-48 p-4 z-50 transition-all duration-200 origin-top-right ${
          showLogin ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
        }`}
      >
        <p className="font-semibold mb-2">My Account</p>
        <button className="w-full text-left py-2 px-2 hover:bg-gray-100 text-sm rounded transition">
          Login
        </button>
        <button className="w-full text-left py-2 px-2 hover:bg-gray-100 text-sm rounded transition">
          Register
        </button>
      </div>
    </>
  );
};

export default Navbar;