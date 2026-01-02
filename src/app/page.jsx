import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black flex-1">
      <main className="max-w-7xl mx-auto px-5 py-2 bg-base-100">
        <Banner></Banner>
        <Suspense
          fallback={
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          }
        >
          <Products />
        </Suspense>
      
      </main>
    </div>
  );
}
