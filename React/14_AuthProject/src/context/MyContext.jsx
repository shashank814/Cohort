import { createContext, useState } from "react";

export const Auth = createContext()

export const AuthProvider = ({children}) => {

    const [registerUsers, setRegisterUsers] = useState(JSON.parselocalStorage.getItem("registeredUsers")) || []

    const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("loggedInUser"))
    )

    console.log("registered user -> ", registerUsers);
    console.log("loggedIn user -> ", loggedInUser);
    

    return <Auth.Provider value={{
        registerUsers, 
        setRegisterUsers, 
        loggedInUser,
        setLoggedInUser
        }}>
        {children}
    </Auth.Provider>
}