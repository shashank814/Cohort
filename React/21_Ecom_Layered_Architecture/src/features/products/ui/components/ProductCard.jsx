import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="w-64 border rounded-xl shadow-md p-4 hover:shadow-lg transition">
      
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm">
          {product.brand}
        </p>

        <p className="text-green-600 font-bold mt-1">
          ${product.price}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;