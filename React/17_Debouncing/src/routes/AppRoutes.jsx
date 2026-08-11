import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from '../layout/MainLayout'
import App from '../App'
import { lazy } from 'react'
import { Suspense } from 'react'
import { getUsers } from '../apis/UsersApi'
let About = lazy(() => import("../pages/About"))
let Contact = lazy(() => import('../pages/Contact'))

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <App />
                },
                {
                    path: "about",
                    element: (
                        <Suspense fallback={<h1>Loading About</h1>}>
                            <About />
                        </Suspense>
                    ),
                    loader: getUsers,
                    hydrateFallbackElement: <h1>Loading users data</h1>
                },
                {
                    path: "contact",
                    element: <Contact />
                }
            ]
        },
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes
