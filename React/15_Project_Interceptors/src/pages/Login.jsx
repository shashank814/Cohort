import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  let { register, reset, loginFormSubmit, handleSubmit, navigate, errors } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(loginFormSubmit)} className="space-y-4">
          
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="text-blue-500 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")} className="text-blue-500 cursor-pointer hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;