import { useState } from "react";
import { children, createContext } from "react";

export const MyCart = createContext()

export const MyCartContextProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    return <MyCart.Provider value={{isCartOpen, setIsCartOpen, cartItems, setCartItems}}>
        {children}
    </MyCart.Provider>
}