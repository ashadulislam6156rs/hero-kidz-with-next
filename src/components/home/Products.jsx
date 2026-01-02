import React from 'react';
import { getProducts } from '@/actions/Server/Product';
import ProductCard from '../Cards/ProductCard';

const Products = async () => {
    const products = await getProducts();

    return (
      <div>
        <h1 className="text-xl md:text-4xl font-bold text-center pt-5 pb-10">
          <span className='text-primary'>Our</span> Products
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default Products;