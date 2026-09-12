import { createBrowserRouter } from "react-router"
import Profile from "../pages/Profile"
import Register from "../pages/Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <Profile />
    }
])

export default router