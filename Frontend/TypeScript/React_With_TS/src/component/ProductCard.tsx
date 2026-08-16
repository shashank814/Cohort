import React from 'react'
import type { Product } from '../type'

const ProductCard = ({product}: {product: Product}) => {
    return (
        <div className="w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        
        {/* Category */}
        <span className="text-sm text-gray-500 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">
            ⭐ {product.rating.rate}
          </span>
          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    )
}

export default ProductCard
