import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layout/MainLayout'
import ProtectedRoute from './ProtectedRoute'

const AppRoute = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },
        {
            path: "/main",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <MainLayout />
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoute
