import React, { useContext } from "react";
import { MyCart } from "../context/ProductContext";

const ProductCard = ({ product }) => {

  let {setCartItems} = useContext(MyCart)
  
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">
      {/* Image */}
      <div className="h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-2 flex-1">
        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>

        {/* Category */}
        <p className="text-xs text-gray-500 capitalize">{product.category}</p>

        {/* Price */}
        <p className="text-lg font-bold text-green-600">${product.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {product.rating.rate}
          <span className="text-gray-500 text-xs">
            ({product.rating.count})
          </span>
        </div>

        {/* Button */}
        <button onClick={() => setCartItems(prev => [...prev, product])} className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
