import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import useApi from '../shared/api'

const Register = () => {

    const auth = useAuth()
    const navigate = useNavigate()
    const api = useApi()
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [ e.target.name ]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        try {

            const response = await api.post("/auth/register", form)

            console.log(response.data);
            
            
        } catch (err) {
            setError(err?.message || "Registration Failed")
        }
    }

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' value={form.name} onChange={handleChange} />

        <input name='email' placeholder='Email' value={form.email} onChange={handleChange} />
        <input name='password' placeholder='Password' value={form.password} onChange={handleChange} />

        <button type='submit'>Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Register
