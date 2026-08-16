import React, { useRef, useState } from 'react'
import {useForm} from "react-hook-form"

const RHF = () => { 

    let {
        register,
        handleSubmit, 
        reset,  
        formState: {errors},
    } = useForm()

  return (
    <div className='p-5'>
        <h1>Hey this is a form.</h1>
      <form onSubmit={handleSubmit
        ((data) => {
           console.log(data);
         })}
       className='flex flex-col gap-5 px-3 py-5 mt-3 bg-white outline-none'>

        <input
        {...register("productName")}
        type="text" placeholder='Product Name' className='border border-gray-400 px-2 py-1 rounded'/>

        <input
        {...register("price")}
         type="text" placeholder='Price' className='border border-gray-400 px-2 py-1 rounded'/>

         <input
         {...register("category")}
         type="text" placeholder='category' className='border border-gray-400 px-2 py-1 rounded'/>

        <input
        {...register("image")}
        type="text" placeholder='image' className='px-2 py-1 border border-gray-400 rounded'/>

        <button className='bg-blue-600 rounded py-1 border-gray-400'>Create</button>
      </form>

      
    </div>
  )
}

export default RHF
