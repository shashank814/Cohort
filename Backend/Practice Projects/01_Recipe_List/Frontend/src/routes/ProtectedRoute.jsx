// import { Navigate, Outlet } from "react-router";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return token ? <Outlet /> : <Navigate to="/" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;