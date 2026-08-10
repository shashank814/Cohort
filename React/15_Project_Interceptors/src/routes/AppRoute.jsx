import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Product from "../pages/Product";

const AppRoute = () => {

  console.log("public route rendering...");
  
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "products",
              element: <Product />,
            },
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;
