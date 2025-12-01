import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Product_Men } from '../../../../Data';
import { CartContext } from '../../Context/CartContext';


const DetailShopMen = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = Product_Men.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  if (!product) {
    return <div className="text-center py-10 text-xl font-semibold">Product not found</div>;
  }
  const handleAddtoCart = () => {
    addToCart({ ...product, quantity: 1 });
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-10 md:mt-7">

      {/* LEFT IMAGE */}
      <div>
        <img
          src={product.imageURLChange}
          alt="Product"
          className="w-full rounded-lg shadow-md mt-10 lg:mt-5"
        />
      </div>

      {/* RIGHT DETAILS */}
      <div className="flex flex-col">

        {/* Title + Price */}
        <h2 className="text-3xl font-bold mb-1">{product.product_name}</h2>
        <p className="text-xl font-semibold mb-3">$13.95</p>

        {/* Colors */}
        <div className="mb-6">
          <p className="font-semibold">1 Color Available</p>
          {/* //small image */}
          <img
            src={product.imageURL}
            alt="Black"
            className="w-20 h-30 object-cover rounded-md mt-2 "
          />
          <p className="text-sm mt-1">Black</p>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Size</p>

          <div className="flex gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md 
                  ${selectedSize === size ? "bg-black text-white" : "bg-white"}
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Qty</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="w-10 h-10 border rounded-md text-xl flex items-center justify-center"
            >
              −
            </button>

            <span className="text-lg">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="w-10 h-10 border rounded-md text-xl flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* Product Code + Description */}
        <p className="text-sm opacity-70 mb-1">21252081351</p>
        <p className="text-sm opacity-80 mb-6">
          Unisex t-shirt featuring short sleeves with front printed and round neck.
        </p>

        {/* Add to Cart */}
        <button 
        onClick={handleAddtoCart}
          className="w-full py-3 bg-black text-white rounded-md text-lg font-semibold hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>

  );
}

export default DetailShopMen;