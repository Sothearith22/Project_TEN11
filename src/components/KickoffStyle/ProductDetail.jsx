import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../../Data';
import { CartContext } from '../Context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const { addToCart } = useContext(CartContext);
  
  // Find product safely
  const product = products.find(p => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Handle "Product Not Found"
  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate(-1)} 
          className="text-blue-600 hover:underline font-medium"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddtoCart = () => {
    addToCart({ 
      ...product, 
      quantity: qty, 
      selectedSize: selectedSize // Critical: Saves the size choice
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      {/* --- Back Button --- */}
      <div className="mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors duration-200 group"
        >
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

        {/* --- LEFT: Image Section --- */}
        <div className="w-full">
          {/* Sticky Wrapper: Keeps image in view on large screens */}
          <div className="md:sticky md:top-24">
            <div className="aspect-[3/4] w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <img
                // Use fallback if imageURLChange doesn't exist on this specific data set
                src={product.imageURLChange || product.imageURL}
                alt={product.product_name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* --- RIGHT: Details Section --- */}
        <div className="flex flex-col pt-2">

          {/* Title + Price */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {product.product_name}
          </h1>
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            ${product.price}
          </p>

          {/* Description */}
          <div className="prose prose-sm text-gray-500 mb-8">
            <p>
              This unisex t-shirt features short sleeves with a high-quality front print 
              and a classic round neck. Designed for everyday comfort and style.
            </p>
            <p className="text-xs text-gray-400 mt-2">Product Code: {product.id}GEN2026</p>
          </div>

          <hr className="border-gray-200 mb-6" />

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
            <div className="flex items-center gap-3">
              <button className="relative group p-1 border-2 border-transparent hover:border-gray-300 rounded-md transition">
                <img
                  src={product.imageURL}
                  alt="Color variant"
                  className="w-16 h-20 object-cover rounded shadow-sm border border-gray-200"
                />
                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Black
                </span>
              </button>
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <button className="text-sm text-gray-500 underline hover:text-black">Size Guide</button>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    py-3 text-sm font-medium rounded-md border transition-all duration-200
                    ${selectedSize === size 
                      ? "bg-black text-white border-black shadow-md" 
                      : "bg-white text-gray-900 border-gray-200 hover:border-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center w-32 border border-gray-300 rounded-md">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-md transition"
              >
                −
              </button>
              <div className="flex-1 text-center font-medium text-gray-900">
                {qty}
              </div>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-md transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddtoCart}
            className="w-full py-4 bg-black text-white text-lg font-bold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98] duration-150"
          >
            Add to Cart - ${(parseFloat(product.price) * qty).toFixed(2)}
          </button>

          {/* Additional Info Badges */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">🚚 Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">🔄 Easy Returns</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;