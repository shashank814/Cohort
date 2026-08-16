import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addUser } from "../features/authSlice";

export const useAuth = () => {

  let dispatch = useDispatch()

  let navigate = useNavigate();
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log(data);
    let arr = [...registerUsers, data];
    setRegisterUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("user registered...")
  };

  const loginForm = (data) => {
    console.log(data);
    let user = registerUsers.find((val) => {
        return val.email === data.email && val.password === data.password;

        if(!user) {
            toast.error("Invalid Something...")
            return
        }

        dispatch(addUser())
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        toast.success("user logged in")
        reset()
    })
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
