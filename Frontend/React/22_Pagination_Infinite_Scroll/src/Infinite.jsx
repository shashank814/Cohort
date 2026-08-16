
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProductsForInfiniteScroll } from './api/productApi'
import ProductCard from './components/ProductCard';

const Infinite = () => {

    let limit = 10;

    let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["products"],
        queryFn: ({ pageParam }) => getAllProductsForInfiniteScroll(limit, pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPage) => {
            let loadedData = allPage.length * limit;
            if(loadedData < lastPage.total) return loadedData;
            return undefined;
        }
    })

    if(isPending) return <h1>Loading data...</h1>
    console.log(data);

    let allProducts = data?.pages?.flatMap((val) => val.products) ?? []
    
    
  return (
    <div className="flex flex-col gap-6 items-center">
      <div
      className="p-5 w-full grid sm:grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
      {
        allProducts.map((val) => (
            <ProductCard key={val.id} product={val} />
        ))
      }
      </div>
      {
        hasNextPage && (
            <button onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading.." : "Load more"}</button>
        )
      }
    </div>
  )
}

export default Infinite