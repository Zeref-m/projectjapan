"use client";

import React, {createContext, useContext, useState} from "react";

const GalleryContext = createContext({
    show: false, setShow: (show) => {}
});

export const GalleryProvider = ({children}) => {
    const [show, setShow] = useState(false);
    return (<GalleryContext.Provider value={{show, setShow}}>{children}</GalleryContext.Provider>);
}

export const useGalleryContext = () => useContext(GalleryContext);
