import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product_woman } from '../../../../Data';

const Shopwoman = () => {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white pt-10 pb-16">

      {/* Header */}
      <div className="w-[90%] mx-auto mb-6">
        <h1 className="text-black text-xl sm:text-2xl font-semibold mt-10">
          WOMEN ({Product_woman.length} Items)
        </h1>
      </div>

      {/* Product Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

        {Product_woman.map((product) => (
          <Link
            key={product.id}
            to={`/product/woman/detail/${product.id}`}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            onMouseEnter={() => setHoverId(product.id)}
            onMouseLeave={() => setHoverId(null)}
          >

            {/* Image */}
            <div className="w-full h-[250px] sm:h-[270px] md:h-[290px] lg:h-[450px] bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-xl">
              <img
                src={
                  hoverId === product.id && product.imageURLChange
                    ? product.imageURLChange
                    : product.imageURL
                }
                alt={product.product_name}
                className="w-full h-full object-fit-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-3 sm:p-4">
              <h2 className="text-gray-800 text-sm sm:text-base font-medium mb-1 line-clamp-1">
                {product.product_name}
              </h2>
              <p className="text-black font-semibold text-base sm:text-lg">
                ${product.price}
              </p>
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default Shopwoman;
