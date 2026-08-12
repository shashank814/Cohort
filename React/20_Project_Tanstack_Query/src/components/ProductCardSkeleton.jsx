import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-60 bg-gray-300"></div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Title */}
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>

        {/* Brand + Category */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Rating */}
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>

        {/* Price + Discount */}
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Shipping */}
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>

        {/* Button */}
        <div className="h-10 bg-gray-300 rounded-lg mt-3"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;