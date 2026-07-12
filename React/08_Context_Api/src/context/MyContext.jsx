import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    const [centralValue, setCentralValue] = useState("I am from context")
    return <MyStore.Provider value={centralValue}>
        {children}
    </MyStore.Provider>
}