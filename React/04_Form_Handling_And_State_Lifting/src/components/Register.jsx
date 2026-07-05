import React, { useState } from 'react'

const Login = ({setToggle}) => {

    const [formData, setFormData] = useState({})
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData]) 
        setFormData({
          name: "",
          email: "",
          password: "",
        })    
    }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg px-8 py-6 w-full max-w-sm'>
        
        <h2 className='text-2xl font-semibold text-center mb-4'>Register</h2>

        <input
          value={formData.name}
          required
          name='name'
          onChange={handleChange}
          type="text"
          placeholder='Name'
          className='w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <input
          value={formData.email}
          required
          name='email'
          onChange={handleChange}
          type="email"
          placeholder='Email'
          className='w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <input
          value={formData.password}
          required
          name='password'
          onChange={handleChange}
          type="password"
          placeholder='Password'
          className='w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>
          Login
        </button>

        <p className='text-sm text-center mt-4'>
          Already have an account?{' '}
          <span onClick={() => setToggle((prev) => !prev)} className='text-blue-500 cursor-pointer hover:underline'>
            Login here
          </span>
        </p>

      </form>
    </div>
  )
}

export default Login