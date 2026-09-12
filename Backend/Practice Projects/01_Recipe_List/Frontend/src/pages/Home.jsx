import React from 'react'
import { NavLink, useNavigate } from "react-router";
import GetAllRecipe from './GetAllRecipe'
import axios from 'axios';

const Home = () => {

  const navigate = useNavigate()

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        {
          withCredentials: true // ✅ IMPORTANT
        }
      )

      navigate("/") // redirect to login
    } catch (err) {
      console.log(err.response?.data || err.message)
    }
  }

  return (
    <div>
      <div className='flex justify-between gap-10 p-10'>
        
        <div className='flex gap-10'>
          <NavLink to={"/add-recipe"}>Add New Recipe</NavLink>
          <NavLink to={"/my-recipe"}>My Recipes</NavLink>
        </div>

        {/* ✅ attach logout */}
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Logout
        </button>

      </div>

      <GetAllRecipe />
    </div>
  )
}

export default Home
