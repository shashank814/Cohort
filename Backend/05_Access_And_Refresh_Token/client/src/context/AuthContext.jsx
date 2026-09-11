import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [loading, setLoading] = useState(true)

    const value = {
        user, setUser, accessToken, setAccessToken, loading, setLoading
    }

    return (
        <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error("useauth must be used within authProvider")
    }

    return context
}

export default AuthContext