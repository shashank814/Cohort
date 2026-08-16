import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "../pages/About";
import Services from "../pages/Services";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";

const AppRoute = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
