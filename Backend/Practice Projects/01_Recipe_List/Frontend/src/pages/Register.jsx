// Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router"
import axios from "axios"


const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.post("http://localhost:3000/api/auth/register", form)
    
    localStorage.setItem("token", res.data.token)

    navigate("/home")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <button onSubmit={handleSubmit} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}  className="text-green-500 cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;