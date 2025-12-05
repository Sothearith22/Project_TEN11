import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  return (
    <div className="w-full bg-white pt-5">
      <h1 className="text-black px-4 md:px-10 lg:px-20 py-5 font-semibold text-xl lg:text-2xl">
        ⚡ Latest Arrivals | 35% OFF
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 ">
        {product.map((pro) => (
          <Link
            key={pro.id}  
            to={`/product/detail/${pro.id}`}
            className="w-full"
          >
            <div className="bg-white overflow-hidden hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col">

              {/* Image */}
              <div className="w-[90%] mx-auto h-[250px] md:h-[300px] lg:h-[500px] flex items-center justify-center pt-2">
                <img
                  // src={pro.image}
                  src={pro.imageURL}
                  alt={pro.product_name}
                  className="object-contain w-full h-full"
                />
              </div>  

              {/* Info */}
              <div className=" w-[80%] lg:px-7 px-2">
                <div className="flex gap-1 text-[14px] lg:text-[18px] items-center">
                  <p className="line-through text-gray-500">${pro.discount}</p>
                  <p className="text-red-500 font-semibold">{pro.discountRate}%</p>
                  <p className="text-pink-600 font-semibold">${pro.price}</p>
                </div>

                <p className="p-1 mt-1 text-gray-800 text-[14px] md:text-[17px] lg:text-[20px] font-medium">
                  {pro.product_name}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
