"use client";

import {useModalContext} from "@/providers/modal";

export default function () {
    const {setShow} = useModalContext();
    return (
        <button type="button" className="btn btn-outline-secondary" onClick={() => setShow(true)}>
            Registration
        </button>
    );
}