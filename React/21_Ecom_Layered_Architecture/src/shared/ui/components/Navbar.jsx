import React from 'react'
import { NavLink } from 'react-router'
import { Box, ShoppingCart } from "lucide-react"

const Navbar = () => {
  return (
    <div className='px-10 py-4 bg-yellow-600 flex justify-between'>
      <h1>Logo</h1>

      <div className='flex gap-7'>
        <NavLink to={"/main"} 
        className={({isActive}) => isActive ? "text-red-800 font-semibold" : ""} end>Home</NavLink>

        <NavLink to={"/main/product"} className={({isActive}) => isActive ? "text-red-800 font-semibold" : ""}>Shop</NavLink>

        <NavLink to={"/main/about"} className={({isActive}) => isActive ? "text-red-800 font-semibold" : ""}>About</NavLink>
      </div>

      <div className='flex gap-5'>
        <NavLink to={"/main/cart"}>
            <ShoppingCart />
        </NavLink>

        <NavLink to={"/main/order"}>
            <Box />
        </NavLink>

        <button className='border border-gray-400 px-3 py-1 rounded outline-0 bg-red-700 cursor-pointer'>Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
