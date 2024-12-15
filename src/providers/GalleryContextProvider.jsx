"use client";

import React, {createContext, useContext, useState} from "react";

const ModalContext = createContext({
    show: false, setShow: (show) => {}
});

export const ModalProvider = ({children}) => {
    const [show, setShow] = useState(false);
    return (<ModalContext.Provider value={{show, setShow}}>{children}</ModalContext.Provider>);
}

export const useModalContext = () => useContext(ModalContext);
