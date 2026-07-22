import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseQuantity = (id) => {
     setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? {...val, quantity: val.quantity+1} : val;
      })
     })
  };

  const decreaseQuantity = (id) => {
  setCartItems((prev) => {
    return prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // ✅ remove when 0
  });
};

  return (
    <MyStore.Provider
      value={{ 
        isCartOpen, setIsCartOpen, cartItems, setCartItems,
        increaseQuantity, decreaseQuantity
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
