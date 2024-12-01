import React from "react";
import { useState } from "react";
export const Context = React.createContext(null);
export default function({ children}){
    const [show, setShow] = useState(false);
    const ModalContext = createContext({
        show: false, setShow: (show) => {
        }
    });
    return (
        <Context.provider value={{show, setShow}}>
            {children}
        </Context.provider>
    );
}
