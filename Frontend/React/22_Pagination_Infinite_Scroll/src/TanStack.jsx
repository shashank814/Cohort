import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getAllProducts } from './api/productApi'
import ProductCard from './components/ProductCard'

const TanStack = () => {
    
    let limit = 10;
    const [page, setPage] = useState(0)

    let { data, isPending, isError, isPlaceholderData } = useQuery({
        queryKey: ["products", page],
        queryFn: () => getAllProducts(limit, page),
        placeholderData: keepPreviousData,
    })

    if(isPending) return <h1>Loading...</h1>
    if(isError) return <h1>Something went wrong...</h1>

   let totalPages = Math.ceil(data.total / limit);
    
  return (
    <div className="flex flex-col gap-6 items-center">
      <div
      style={{ opacity: isPlaceholderData ? 0.3 : 1}}
      className="p-5 w-full grid sm:grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {data?.products?.map((product) => (
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
  )
}

export default TanStack
