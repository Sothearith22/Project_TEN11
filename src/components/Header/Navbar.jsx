import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { menu } from "../../../Data";
import {MdNotifications,MdOutlineMenu,MdPerson,MdSearch,MdOutlineClose,MdShoppingBag,} from "react-icons/md";
import { CartContext } from "../Context/CartContext";


const Navbar = ({ toggleCart }) => {
  const { cart } = useContext(CartContext);
  const [menu, setmenu] = useState(false);
  const [search, setsearch] = useState(false);
  const [notify, setnotify] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [shopping, setShopping] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-md">
      {/* --- Navbar Bar --- */}
      <div className="flex items-center justify-between h-[60px] sm:h-[70px] px-3 sm:px-6 md:px-8">
        {/* Left: Menu Button */}
        <button
          className="text-3xl text-white focus:outline-none"
          onClick={() => setmenu(!menu)}
        >
          {menu ? <MdOutlineClose /> : <MdOutlineMenu />}
        </button>

        {/* Center: Logo */}
        <button 
          // to={"/"}
          className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white text-center select-none"
         
        >
          TEN ELEVEN
        </button>

        {/* Right: Icons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
          <button
            className="text-2xl text-white p-1 sm:p-2 rounded hover:bg-white/10"
            onClick={() => setsearch(!search)}
          >
            <MdSearch />
          </button>
          <button
            className="text-2xl text-white p-1 sm:p-2 rounded hover:bg-white/10"
            onClick={() => setnotify(!notify)}
          >
            <MdNotifications />
          </button>

          <button
            className="text-2xl text-white p-1 sm:p-2 rounded hover:bg-white/10"
            onClick={() => setloggedIn(!loggedIn)}
          >
            <MdPerson />
          </button>
          <li className="w-[30%] flex items-center justify-evenly relative">
              <MdShoppingBag
                className="text-xl cursor-pointer hover:scale-110 text-white transition-transform duration-300"
                onClick={toggleCart}
              />
              {cart.length > 0 && (
                <span className="absolute -top-1 left-5 bg-red-600  text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                   {cart.length}
                </span>
               )} 
            </li>
        </div>
      </div>

      {/* --- MENU SLIDE LEFT --- */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white text-black z-50 transform transition-transform duration-300 ease-in-out 
          ${menu ? "translate-x-0" : "-translate-x-full"
          } w-[85%] sm:w-[70%] md:w-[50%] lg:w-[30%]`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setmenu(false)}
              className="text-2xl hover:text-green-300"
            >
              <MdOutlineClose />
            </button>
          </div>
          {/* menu slide left */}
          <div className="flex justify-center items-center p-5 text-xl font-semibold bg-white">
            <div className="w-full h-full bg-green-500/50 lg:text-2xl text-black">
              {/* {menu.map((p) => (
                <div  className="p-2 hover:underline">
                  <Link to={p.url}>{p.menu}</Link>
                </div>
              ))} */}
            </div>
          </div>

        </div>
      </div>

      {/* MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-40 ${menu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setmenu(false)}
      ></div>

      {/* --- SEARCH SLIDE DOWN --- */}
      <div
        className={`fixed top-0 left-0 w-full bg-white text-black h-[60px] sm:h-[70px] flex items-center justify-center transition-transform duration-300 z-50 border-b border-gray-300 ${search ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex items-center justify-between w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] border-b border-gray-300 pb-1">
          <input
            type="text"
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 text-base sm:text-lg outline-none"
            placeholder="What are you searching for?"
          />
          <div className="flex items-center gap-3">
            <MdSearch className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-colors" />
            <MdOutlineClose
              className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-colors"
              onClick={() => setsearch(false)}
            />
          </div>
        </div>
      </div>
      {/* --- SLIDE RIGHT SHOPPING BAG --- */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${shopping ? "translate-x-0" : "translate-x-full"
          } w-[90%] sm:w-[70%] md:w-[45%] lg:w-[25%]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
          <h2 className="text-lg font-semibold">Your Shopping Bag</h2>
          <button
            onClick={() => setShopping(false)}
            className="text-2xl hover:text-red-500 transition-colors"
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="flex gap-4 items-center border-b border-gray-200 pb-3">
      <img
        src="https://zandokh.com/image/catalog/banner/2025/ZANDO/October/ten11%20banner%20app.jpg"
        alt="Item"
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">TEN11 T-Shirt</h3>
        <p className="text-gray-500 text-sm">Size: M</p>
        <p className="font-semibold">$29.99</p>
      </div>
      <button className="text-red-600 hover:text-red-800">
        <MdOutlineClose />
      </button>
    </div>
    </div>
      {/* SHOPPING OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-40 ${shopping ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setShopping(false)}
      ></div>


      {/* SEARCH OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-200 z-40 ${search ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setsearch(false)}
      ></div>

      {/* --- NOTIFICATION SLIDE RIGHT --- */}
      <div
        className={`fixed top-0 p-3 px-5 py-5  right-0 h-screen bg-[#1a1a1a] text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${notify ? "translate-x-0" : "translate-x-full"
          } w-[90%] sm:w-[70%] md:w-[45%] lg:w-[25%]`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button
            onClick={() => setnotify(false)}
            className="text-2xl hover:text-green-500 transition-colors"
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="p-5 space-y-6 overflow-y-auto h-[calc(100vh-70px)]">
          {/* Example Notification */}
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              Top of the Class in Style 🎓
            </h3>
            <img
              src="https://zandokh.com/image/catalog/banner/2025/ZANDO/September/50Off_TEN11_Product_List_Mobile%20(2160x1066).jpg"
              alt="Post Modern"
              className="rounded-lg mb-3 w-full object-cover"
            />
            <p className="text-sm text-gray-300 mb-3">
              Discover the Post Modern Academy Collection now!
            </p>
            <div className="flex gap-2 justify-end pt-2">
              <button className="border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 font-semibold hover:bg-white hover:text-black transition">
                SHOP WOMEN
              </button>
              <button className="border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 font-semibold hover:bg-white hover:text-black transition">
                SHOP MEN
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              Top of the Class in Style 🎓
            </h3>
            <img
              src="https://zandokh.com/image/catalog/banner/2025/ZANDO/October/ten11%20banner%20app.jpg"
              alt="Post Modern"
              className="rounded-lg mb-3 w-full object-cover"
            />
            <p className="text-sm text-gray-300 mb-3">
              Discover the Post Modern Academy Collection now!
            </p>
            <div className="flex gap-2 justify-end pt-2">

              <button className="border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 font-semibold hover:bg-white hover:text-black transition">
                SHOP WOMEN
              </button>

              <button className="border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 font-semibold hover:bg-white hover:text-black transition">
                SHOP MEN
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              Top of the Class in Style 🎓
            </h3>
            <img
              src="https://zandokh.com/image/catalog/banner/2025/ZANDO/October/Water%20Festival/70WF_Ten11_Main_ProductBanner_Mobile%20(2160x1066).jpg"
              alt="Post Modern"
              className="rounded-lg mb-3 w-full object-cover"
            />
            <p className="text-sm text-gray-300 mb-3">
              Discover the Post Modern Academy Collection now!
            </p>
            <div className="flex gap-2 justify-end pt-2">
              <button className="border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 font-semibold hover:bg-white hover:text-black transition">
                SHOP WOMEN
              </button>
              <button className="border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 font-semibold hover:bg-white hover:text-black transition">
                SHOP MEN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NOTIFICATION OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-40 ${notify ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setnotify(false)}
      ></div>

      {/* --- LOGIN BOX --- */}
      <div className={`fixed bg-black/60 backdrop-blur-md text-white rounded-lg shadow-lg
      transition-all duration-500 ease-in-out z-50 flex items-center justify-center
      ${loggedIn ? "opacity-100 scale-100 visible right-4 top-16 sm:right-10 sm:top-20 w-[80%] sm:w-[50%] md:w-[35%] lg:w-[20%] h-[20%]"
          : "opacity-0 scale-90 invisible right-4 top-0 w-0 h-0"}`}>
        <p className="text-center text-sm sm:text-base">Login</p>
      </div>

    </nav>
  );
};

export default Navbar;
