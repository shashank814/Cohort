import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/MyContext";

export const useAuth = () => {

  const {registerUsers, loggedInUser, setLoggedInUser, setRegisterUsers} = useContext(Auth)

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginFormSubmit = (data) => {
    let user = registerUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found or invalid credentials");
      reset();
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user loggedin");

    reset();
  };

  let registerFormSubmit = (data) => {
    let arr = [...registerUsers, data]
    setRegisterUsers()
    alert("User registered successfully")
    setLoggedInUser(data)
    localStorage.setItem("loggedInUser", JSON.stringify(data))
    localStorage.setItem("registeredUsers", JSON.stringify(arr)) 
    navigate('/main')
    reset()
  }

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  }
};
