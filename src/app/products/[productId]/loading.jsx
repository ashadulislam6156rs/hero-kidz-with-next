import ProductSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {

    return (
      <div className="space-y-2 mt-6">
        {[...Array(1)].map((_, i) => (
          <ProductSkeleton key={i}></ProductSkeleton>
        ))}
      </div>
    );
};

export default loading;
