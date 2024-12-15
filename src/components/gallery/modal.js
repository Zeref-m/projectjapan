// "use client";

// import React, {createContext, useContext, useState} from "react";

// const ModalContext = createContext({
//     show: false, setShow: (show) => {
//     }
// });

// export const ModalProvider = ({children}) => {
//     const [show, setShow] = useState(false);
//     return (<ModalContext.Provider value={{show, setShow}}>{children}</ModalContext.Provider>);
// }

// export const useModalContext = () => useContext(ModalContext);
import React from 'react';
import { useModalContext } from '../../providers/GalleryContextProvider'; 

const Modal = () => {
    const { show, setShow } = useModalContext();
    if (!show) return null;

    return (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
            <button onClick={() => setShow(false)}>Close</button>
        </div>
    </div>
    );
};

export default Modal;