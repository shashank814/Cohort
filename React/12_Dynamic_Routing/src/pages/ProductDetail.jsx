import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {

    const [singleProductData, setSingleProductData] = useState({})
    console.log(singleProductData);
    

    let { id } = useParams()

    let getSingleProductData = async () => {
        try {

            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleProductData(res.data)
            
        } catch (error) {
            console.log("Detail api error",error);
        }
    }

    useEffect(() => {
        getSingleProductData()
    }, [])
    
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="w-80 h-80 object-contain rounded-xl hover:scale-105 transition"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">

          <div>
            {/* Category */}
            <p className="text-sm text-gray-500 uppercase mb-2">
              {singleProductData.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                ⭐ {singleProductData.rating?.rate}
              </span>
              <span className="text-gray-500 text-sm">
                ({singleProductData.rating?.count} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-green-600 mb-4">
              ₹{singleProductData.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {singleProductData.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail
