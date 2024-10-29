"use client";

import "./Navigation.css";
// import {getUser} from "@/lib/dal.ts";
import Link from "next/link.js";
import {useModalContext} from "@/providers/modal";

export default function () {
    const {setShow} = useModalContext();
    function handleShow () {
        setShow(true);
    }
    return (
        <nav className="my-nav">
            <div className="logo"></div>
            <ul className="nav-flex">
                <li className="li-style"><Link href="/" className="a-nav">Gallery</Link></li>
                <li className="li-style"><Link href="#header" className="a-nav">Home</Link></li>
                <li className="li-style"><Link href="#about_us" className="a-nav">About us</Link></li>
                <li className="li-style"><Link href="#gallery" className="a-nav">Tours</Link></li>
                <li className="li-style">
                    <button type="button" className="btn btn-outline-secondary" onClick={handleShow}>
                        Registration
                    </button>
                </li>
            </ul>
            <div>
                {/*<div>User: {await getUser()}</div>*/}
                <div className="profile"></div>
            </div>
        </nav>
    );
}
