import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/MyContext'

const ProtectedRoute = () => {

   const { loggedInUser } = useContext(Auth)


   if(!loggedInUser) {
      return <Navigate to={"/"} />
   }
   return <Outlet />
}

export default ProtectedRoute
