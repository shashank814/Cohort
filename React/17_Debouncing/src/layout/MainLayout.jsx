import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav className='flex gap-5 text-3xl text-red-800'>
        <NavLink to={"/"}>App</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout
