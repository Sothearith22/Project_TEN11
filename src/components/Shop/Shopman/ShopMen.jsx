import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product_Men } from '../../../../Data';

const ShopMen = () => {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div className="w-full h-full bg-white pt-5 md:pt-7">

      {/* Header */}
      <div className="w-[80%] mx-auto ">
        <h1 className="text-black text-xl md:text-2xl lg:px-14  lg:mt-12 mt-15">
          MEN   ({Product_Men.length}Items)
        </h1>
      </div>

      {/* Product Card */}
      <div className="w-[80%] mx-auto grid lg:mt-5 grid-cols-2 bg-black/0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
        {Product_Men.map((product) => (
          <Link
            key={product.id}
            to={`/product/men/detail/${product.id}`}
            className="group bg-white transition-all duration-200 ease-in-out"
            onMouseEnter={() => setHoverId(product.id)}
            onMouseLeave={() => setHoverId(null)}
          >

            {/* Product Image */}
            <div className="w-full lg:h-[400px] h-[250px] bg-white flex items-center justify-center overflow-hidden">
              <img
                src={
                  hoverId === product.id && product.imageURLChange
                    ? product.imageURLChange : product.imageURL
                 
                }
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Product Info */}
            <div className="lg:mt-3 px-2 lg:px-10">
              <p className="text-black font-semibold lg:text-lg text-[15px]">${product.price}</p>
              <h2 className="text-sm lg:text-lg  font-semibold text-gray-700">{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopMen;
