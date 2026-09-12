import React, { useContext, useEffect } from 'react'
import useApi from '../shared/useApi'
import { useAuthContext } from '../context/AuthProvider'

const Profile = () => {

  const authContext = useAuthContext()
  const api = useApi()

  async function fetchProfile() {
    const res = await api.get("/auth/me")
    console.log(res);
    

    authContext.setUser(res.data.data.user)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {authContext.user?.name}</p>
      <p>Email: {authContext.user?.email}</p>
    </div>
  )
}

export default Profile
