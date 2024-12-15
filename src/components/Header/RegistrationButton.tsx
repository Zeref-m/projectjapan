"use client";

import {useRegistrationContext} from "@/providers/RegistrationContextProvider";

export default function () {
    const {setShow} = useRegistrationContext();
    return (
        <button type="button" className="btn btn-outline-secondary" onClick={() => setShow(true)}>
            Registration
        </button>
    );
}