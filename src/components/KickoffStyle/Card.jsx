import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  return (
    // 1. Main Container: Added max-width and centering for better large-screen handling
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h1 className="text-black mb-6 font-bold text-xl lg:text-3xl">
          ⚡ Latest Arrivals | <span className="text-red-600">35% OFF</span>
        </h1>

        {/* 2. Grid Layout: Added md:grid-cols-3 for smoother tablet transition */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {product.map((pro) => (
            <Link
              key={pro.id}
              to={`/product/detail/${pro.id}`}
              className="group w-full" 
            >
              <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                
                {/* 3. Image Container: Removed massive 500px height. Used aspect ratio or reasonable fixed height. */}
                <div className="relative w-full h-48 sm:h-64 lg:h-72 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={pro.imageURL}
                    alt={pro.product_name}
                    // Added group-hover scale to image only, not the whole card, for smoother effect
                    className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Optional: Badge for discount rate overlaid on image */}
                  {pro.discountRate && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{pro.discountRate}%
                    </span>
                  )}
                </div>

                {/* 4. Info Section: Removed w-[80%] constraint, used standard padding */}
                <div className="p-4 flex flex-col gap-2">
                  {/* Price Row */}
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                      ${pro.price}
                    </p>
                    {/* Assuming pro.discount is the Original Price */}
                    <p className="text-sm text-gray-400 line-through decoration-gray-400">
                      ${pro.discount}
                    </p>
                  </div>

                  {/* Product Name: Clamped to 2 lines to prevent uneven heights */}
                  <h3 className="text-sm md:text-base font-medium text-gray-700 hover:text-black transition-colors line-clamp-2">
                    {pro.product_name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};