import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/MyContext'

const PublicRoute = () => {

   const { loggedInUser } = useContext(Auth)


   if(loggedInUser) {
      return <Navigate to={"/main"} />
   }
   return <Outlet />
}

export default PublicRoute
