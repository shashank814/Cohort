import React, { useRef, useState } from 'react'

const Form = () => {

    let formRef = useRef({})
//   const [formData, setFormData] = useState({})

  const [product, setProduct] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    let obj = {
        pName: formRef.current.productName.value,
        price: formRef.current.price.value,
        pCategory: formRef.current.category.value,
        pImage: formRef.current.image.value,
    }

    console.log(obj);
    
    setProduct(obj)
  }

  return (
    <div className='p-5'>
        <h1>Hey this is a form.</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 px-3 py-5 mt-3 bg-white outline-none'>

        <input
        ref={(e) => formRef.current.productName = e} 
        // onChange={(e) => setFormData({...formData, productName: e.target.value})} 
        type="text" placeholder='Product Name' className='border border-gray-400 px-2 py-1 rounded'/>

        <input
        ref={(e) => formRef.current.price = e} 
        // onChange={(e) => setFormData({...formData, price: e.target.value})}
         type="text" placeholder='Price' className='border border-gray-400 px-2 py-1 rounded'/>

        <span>Select Category:</span>  
        <select
        ref={(e) => formRef.current.category = e} 
        // onChange={(e) => setFormData({...formData, category: e.target.value})}
        className='border border-gray-400 px-2 py-1 rounded'>
            <option value="Mens">Mens</option>
            <option value="Kids">Kids</option>
            <option value="Womens">Womens</option>
        </select>
        <input
        ref={(e) => formRef.current.image = e} 
        // onChange={(e) => setFormData({...formData, image: e.target.value})}
        type="text" placeholder='image' className='px-2 py-1 border border-gray-400 rounded'/>
        <button className='bg-blue-600 rounded py-1 border-gray-400'>Create</button>
      </form>

      {product && (
        <div>
            <p>{product.pName}</p>
            <p>{product.price}</p>
            <p>{product.pCategory}</p>
            <img src={product.pImage} alt="" />
        </div>
      )}
    </div>
  )
}

export default Form
