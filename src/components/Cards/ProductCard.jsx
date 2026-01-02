import React from "react";
import Link from "next/link";
import Image from "next/image";


const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl">
      <figure className="px-4 pt-4 w-75 h-45 overflow-hidden">
        <Image
          src={product?.image}
          alt={product?.bangla || "product image"}
          width={300}
          height={180}
          className="rounded-lg object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="font-semibold text-lg line-clamp-2">{product.bangla}</h2>

        <p className="text-sm text-gray-500">
          ⭐ {product.ratings} | বিক্রি হয়েছে {product.sold}+
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          <span className="line-through text-gray-400 text-sm">
            ৳{product.price}
          </span>
          <span className="badge badge-error badge-sm">
            -{product.discount}%
          </span>
        </div>

        <div className="card-actions mt-4">
          <Link
            href={`/products/${product._id}`}
            className="btn btn-primary btn-sm w-full"
          >
                      {/* বিস্তারিত দেখুন */}
                      View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
