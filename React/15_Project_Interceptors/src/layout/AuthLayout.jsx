import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  console.log("auth rendering...");

  return (
    <div>
        <Outlet />
      <h1>Auth Layout</h1>
    </div>
  )
}

export default AuthLayout
