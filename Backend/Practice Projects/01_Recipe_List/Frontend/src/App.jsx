// App.jsx
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import AddNewRecipe from "./pages/AddNewRecipe";
import MyRecipe from "./pages/MyRecipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-recipe" element={<AddNewRecipe />} />
        <Route path="/my-recipe" element={<MyRecipe />} />
      </Route>
    </Routes>
  );
}

export default App;
