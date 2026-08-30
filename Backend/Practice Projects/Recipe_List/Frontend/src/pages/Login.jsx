import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router"

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      form,
      {
         withCredentials: true, // ✅ REQUIRED
      }
    );

    localStorage.setItem("token", res.data.token);

    navigate("/home");
    console.log(form);
    
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")} className="text-blue-500 cursor-pointer">Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;