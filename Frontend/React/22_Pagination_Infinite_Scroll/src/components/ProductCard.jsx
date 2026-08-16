import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-64 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      
      {/* Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-1">
          {product.title}
        </h2>

        {/* Brand + Category */}
        <p className="text-sm text-gray-500">
          {product.brand} • {product.category}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;