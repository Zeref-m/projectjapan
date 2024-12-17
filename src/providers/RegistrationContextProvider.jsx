"use client";

import React, {createContext, useContext, useState} from "react";

const RegistrationContext = createContext({show: false, setShow: () => {}});

export const RegistrationProvider = ({children}) => {
    const [show, setShow] = useState(false);
    return (<RegistrationContext.Provider value={{show, setShow}}>{children}</RegistrationContext.Provider>);
}

export const useRegistrationContext = () => useContext(RegistrationContext);