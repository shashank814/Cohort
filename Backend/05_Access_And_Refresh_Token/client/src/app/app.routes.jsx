import { createBrowserRouter } from "react-router"
import Register from "../pages/register"
import Profile from "../pages/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />
    },
    {
        path: "/profile",
        element: <Profile />
    }
])

export default router