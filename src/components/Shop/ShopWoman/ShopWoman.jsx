import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { Product_woman } from '../../../../Data';

const Shopwoman = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white pt-10 pb-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/*  Back Button Section */}
        <div className="mb-6 pt-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors duration-200 group"
          >
            {/* SVG Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-medium text-sm sm:text-base">Back</span>
          </button>
        </div>

        {/* Header */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Women's Collection
          </h1>
          <span className="text-gray-500 text-sm font-medium">
            {Product_woman.length} Products
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 lg:gap-x-8">
          {Product_woman.map((product) => (
            <Link
              key={product.id}
              to={`/product/woman/detail/${product.id}`}
              className="group block" // 'group' enables hover effects on children
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
                
                {/* Image 1: Default View */}
                <img
                  src={product.imageURL}
                  alt={product.product_name}
                  className="h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                
                {/* Image 2: Hover View */}
                {product.imageURLChange && (
                  <img
                    src={product.imageURLChange}
                    alt={`${product.product_name} alternate`}
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  />
                )}

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden lg:block">
                  <button className="w-full bg-white text-black py-3 font-semibold text-sm shadow-lg hover:bg-black hover:text-white transition-colors">
                    QUICK VIEW
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm text-gray-700 font-medium line-clamp-1 pr-2">
                    {product.product_name}
                  </h3>
                  <p className="text-sm font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
                
                <p className="text-xs text-gray-500">
                  {product.category || "Women's Fashion"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopwoman;