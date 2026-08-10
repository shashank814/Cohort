import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { axiosInstance } from '../config/axiosInstance'

const Product = () => {
    const [productsData, setproductsData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    let getProductsData = async () => {
        try {
            let res = await axiosInstance.get("/products")
            console.log(res);
            setproductsData(res.data)
            setisLoading(false)
        } catch (error) {
            console.log("error in products api", error);
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    if(isLoading) return <h1 className='text-red-800 text-4xl'>Loading Products...</h1>

  return (
    <div className='grid grid-cols-4 gap-5'>
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  )
}

export default Product
