import React, { useState } from 'react'
import useApi from '../shared/useApi'
import { useAuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router'

const Register = () => {

  const api = useApi()
  const authContext = useAuthContext()

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await api.post("/auth/register", {
      name, email, password
    })

    console.log(res.data);
    
    authContext.setAccessToken(res.data.accessToken)
    authContext.setUser(res.data.data.user)

    navigate("/profile")
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>

        <button>
          Register
        </button>

      </form>
    </main>
  )
}

export default Register
