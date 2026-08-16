import React, { useContext } from 'react'
import { MyCart } from '../context/ProductContext'

const Navbar = () => {

  let { setIsCartOpen } = useContext(MyCart);

  return (
    <div className='flex items-center justify-between bg-black px-10 py-2'>
       <div>logo</div>

       <div className='flex gap-10 text-xl cursor-pointer'>
          <p
           onClick={() => setIsCartOpen(false)}
           className='cursor-pointer'
          >Home</p>
          <p 
           onClick={() => setIsCartOpen(true)}
           className='cursor-pointer'
          >Cart</p>
       </div>
       <button>Login</button>
    </div>
  )
}

export default Navbar
