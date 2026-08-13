import React from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {

  let { navigate, register, handleSubmit, errors, loginForm } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
            {...register("username", {
              required: "username is required"
            })}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
            {...register("password", {
              required: "email is required",
              minLength: {
                value: 8,
                message: "minimum 8 characters are required",
              }
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;