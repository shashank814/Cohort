import React from 'react'
import { useProductApi } from '../hooks/productHooks'

const Filters = () => {

    let { filterproducts } = useProductApi()

  return (
    <div className='p-3 mb-5 border-2 border-gray-500 flex gap-5'>
       <div className='flex w-full gap-8'>
        <input 
        onChange={(e) => filterproducts(e.target.value)}
        className='p-2 outline-0 border-2 w-full rounded'
        type="text" placeholder='search products...' />
        <button className='p-2 bg-white text-black rounded border-0'>Search</button>
       </div>

       <div className=''>
        <span>Select Categories</span>
         <select className='p-1 bg-white text-black border-0 outline-0 rounded'>
            <option value="groceries">Groceries</option>
            <option value="beauty">Beauty</option>
            <option value="furniture">Furniture</option>
         </select>
       </div>
    </div>
  )
}

export default Filters
