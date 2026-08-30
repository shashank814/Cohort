import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddNewRecipe = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] }); // ✅ file
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("ingredients", form.ingredients);
      formData.append("image", form.image);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:3000/api/recipe/new-recipe",
        formData,
        {
          withCredentials: true
        }
      );

      navigate("/my-recipe");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          🍳 Add New Recipe
        </h2>

        {/* ✅ FIX: onSubmit here */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />

          <textarea
            name="ingredients"
            placeholder="Ingredients"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />

          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewRecipe;
