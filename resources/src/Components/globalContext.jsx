import {  createContext, useState } from "react";

export const GlobalContext = createContext()


export default function GlobalStateProvider({ children }){
    const [name, setName] = useState("");
    return (
        <GlobalContext.Provider value={{
            name,
            setName
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


