import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Image */}
      <div className="h-60 flex items-center justify-center bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain p-4"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-500 capitalize">
          {product.category}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-3">
          
          {/* Price */}
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            ⭐ {product.rating.rate}
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;