import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {

  let limit = 10;

  const [products, setProducts] = useState(null)
  const [page, setPage] = useState(0)

  const getAllProducts = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`);
      setProducts(res.data)
      
    } catch (error) {
      console.log("api error", error);
    }
  };

  useEffect(() => {
    getAllProducts()
  }, [page])

  let totalPages = Math.ceil(products?.total / limit);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="p-5 w-full grid sm:grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {products?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex gap-5">
        <button 
        disabled={page === 0} 
        onClick={() => setPage(page-1)} className="px-3 py-2 bg-red-700 text-white rounded">Prev</button>

        <p className="py-2 text-xl">Page {page+1} of {totalPages}</p>

        <button
        disabled={page >= totalPages - 1} 
        onClick={() => setPage(page+1)} 
        className="px-3 py-2 bg-red-700 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default App;
