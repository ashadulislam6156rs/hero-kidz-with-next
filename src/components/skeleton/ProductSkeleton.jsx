import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md rounded-xl animate-pulse">
      {/* Image Skeleton */}
      <figure className="px-4 pt-4">
        <div className="w-full h-45 bg-gray-200 rounded-lg" />
      </figure>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />

        {/* Rating */}
        <div className="h-4 bg-gray-200 rounded w-2/3" />

        {/* Price */}
        <div className="flex gap-2 mt-2">
          <div className="h-6 w-20 bg-gray-300 rounded" />
          <div className="h-4 w-14 bg-gray-200 rounded" />
          <div className="h-4 w-10 bg-gray-200 rounded" />
        </div>

        {/* Button */}
        <div className="h-9 bg-gray-300 rounded mt-4" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
