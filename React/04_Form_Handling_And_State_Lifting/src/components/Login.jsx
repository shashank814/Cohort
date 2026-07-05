import React from 'react'

const Register = ({setToggle}) => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg px-8 py-6 w-full max-w-sm'>
        
        <h2 className='text-2xl font-semibold text-center mb-4'>Login</h2>

        <input
          type="email"
          placeholder='Email'
          className='w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <input
          type="password"
          placeholder='Password'
          className='w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>
          Register
        </button>

        <p className='text-sm text-center mt-4'>
          Don’t have an account?{' '}
          <span onClick={() => setToggle((prev) => !prev)} className='text-blue-500 cursor-pointer hover:underline'>
            Register here
          </span>
        </p>

      </div>
    </div>
  )
}

export default Register