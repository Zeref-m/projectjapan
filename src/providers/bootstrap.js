"use client";

import React, { createContext } from "react";
import * as BS from "bootstrap/dist/js/bootstrap.bundle.min.js"

const Context = createContext(undefined);

export default function Providers({ children }) {
    return <Context.Provider value={BS}>{children}</Context.Provider>;
}

