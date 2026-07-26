import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
        <Outlet />
      <h1>Auth Layout</h1>
    </div>
  )
}

export default AuthLayout
