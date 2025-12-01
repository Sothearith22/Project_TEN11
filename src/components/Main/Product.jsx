import React from "react";
import { Link } from "react-router-dom";
import womanImg from "../../assets/img/woman.jpg";
import manImg from "../../assets/img/man.jpg";

const Product = () => {
  return (
    <div className="pt-8 px-4 sm:px-6 md:px-10 lg:px-20 w-full np mx-auto grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
      {/* Women section */}
      <div className="flex flex-col items-center">
        <img
          src={womanImg}
          alt="Women Collection"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
        <div className="mt-4 w-full">
          <Link
            to="/product/woman"
            className=" w-full h-[45px] flex items-center justify-center border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Women Collection
          </Link>
        </div>
      </div>

      {/* Men section */}
      <div className="flex flex-col items-center">
        <img
          src={manImg}
          alt="Men Collection"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
        <div className="mt-4 w-full">
          <Link
            to="/product/men"
            className=" w-full h-[45px] flex items-center justify-center border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Men Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
