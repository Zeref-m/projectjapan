"use client";

import React, {createContext, useContext, useState} from "react";

const RegistrationContext = createContext({
    show: false, setShow: (show) => {
    }
});

export function RegistrationProvider({children}) {
    const [show, setShow] = useState(false);
    return (<RegistrationContext.provider value={{show, setShow}}>{children}</RegistrationContext.provider>);
}

export const useRegistrationContext = () => useContext(RegistrationContext);