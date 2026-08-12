import React from "react";

const ProductCard = ({ product }) => {

    if(!product) return null
    
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Brand + Category */}
        <p className="text-sm text-gray-500">
          {product.brand} • {product.category}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm text-gray-600">
            {product.rating} / 5
          </span>
        </div>

        {/* Price + Discount */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>
            <span className="ml-2 text-sm text-red-500">
              -{product.discountPercentage}%
            </span>
          </div>

          {/* Stock */}
          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Shipping */}
        <p className="text-xs text-gray-500">
          🚚 {product.shippingInformation}
        </p>

        {/* Button */}
        <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;