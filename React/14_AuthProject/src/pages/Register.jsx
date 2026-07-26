import React, { useContext } from "react";
import { data, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { Auth } from "../context/MyContext";


const Register = () => {

  let { setRegisterUsers, registerUsers } = useContext(Auth)

  let {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm()

  let navigate = useNavigate()

  let formSubmit = (data) => {
    let arr = [...registerUsers, data]
    setRegisterUsers()
    alert("User registered successfully")
    localStorage.setItem("registeredUsers", JSON.stringify(arr)) 
    reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", {
                required: "email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "minimum 6 characters is required",
              }
            })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <button onClick={() => navigate("/")} className="text-green-500 cursor-pointer hover:underline">
            Login
          </button >
        </p>
      </div>
    </div>
  );
};

export default Register;