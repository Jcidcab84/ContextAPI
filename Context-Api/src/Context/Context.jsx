import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [data, setData] = useState([]);

    return(
        <Context.Provider value = {{data, setData}}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;
