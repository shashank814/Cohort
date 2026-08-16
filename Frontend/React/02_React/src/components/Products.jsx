import React, { useState } from 'react'

const Products = ({product, del}) => {

  return (
    <div className='px-5 py-5'>
       <div className='p-4 border flex flex-col gap-2'>
        <img src={product.image} alt="" className='h-40'/>

       <h2>{product.title.substring(0, 10)}</h2>
       <p>{product.category}</p>
       <p className='text-green-400 font-bold'>{product.price}</p>
       <button className='border bg-red-400' onClick={() => del(product.id)}>Delete</button>
       </div>
    </div>
  )
}

export default Products
