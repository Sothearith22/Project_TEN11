import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product_Men } from '../../../../Data';

const ShopMen = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white py-10">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6 pt-5">
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
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Men's Collection
          </h1>
          <span className="text-sm text-gray-500 font-medium">
            {Product_Men.length} Products
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 lg:gap-x-8">
          {Product_Men.map((product) => (
            <Link
              key={product.id}
              to={`/product/men/detail/${product.id}`}
              className="group block"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                
                {product.imageURLChange && (
                  <img
                    src={product.imageURLChange}
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  />
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm text-gray-700 font-medium truncate">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopMen;