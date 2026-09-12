import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetAllRecipe = () => {

  const [recipes, setRecipes] = useState([])

  const allRecipe = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/recipe/getAllRecipe"
      )

      setRecipes(res.data.recipe || [])
    } catch (err) {
      console.log(err.response?.data || err.message)
    }
  }

  useEffect(() => {
    allRecipe()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        🍽️ All Recipes
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found</p>
      ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {recipes.map((item) => {

            return (
                <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                
                <h2 className="text-xl font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  🍳 {item.ingredients}
                </p>

                {/* Buttons */}
                <div className="flex justify-between">
                  
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                    Delete
                  </button>

                </div>

              </div>

            </div>
            )
            
          })}

        </div>
      )}
    </div>
  )
}

export default GetAllRecipe