import React from "react";
import {useState} from "react";
export const Context = React.createContext(null);
export default function({ children}) {
    const [show, setShow] = useState(false);
    return (
        <Context.Provider value={{show, setShow}}>
            {children}
        </Context.Provider>
    );
}