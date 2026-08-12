import React from "react";
import ProductCard from "../components/ProductCard";
import { useProductApi } from "../hooks/productHooks";
import Filters from "../components/Filters";

const ShopPage = () => {
  let { isPending, data, error, filteredProducts } = useProductApi();

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="min-h-screen bg-black p-8">
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCard key={index} />
            ))
          : filteredProducts?.map((val) => {
              return <ProductCard key={val.id} product={val} />;
            })}
      </div>
    </div>
  );
};

export default ShopPage;
