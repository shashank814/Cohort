import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("register", data);
    
  };

  const loginForm = async (data) => {
    
    try {

        dispatch(loginUserAction(data))
        
      
    } catch (error) {
        console.log("login api error", error);
    }
    
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
