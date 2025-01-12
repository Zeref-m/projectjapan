import "./Navigation.css";
import Link from "next/link.js";
import Profile from "@/components/Header/Profile";

export default function () {
    return (
        <nav className="my-nav">
            <div className="logo"></div>
            <ul className="nav-flex">
                
                <li className="li-style"><Link href="@/components/Header/Navigation/Navigation#header" className="a-nav">Home</Link></li>
                <li className="li-style"><Link href="@/components/Header/Navigation/Navigation#about_us" className="a-nav">About us</Link></li>
                <li className="li-style"><Link href="@/components/Header/Navigation/Navigation#gallery" className="a-nav">Tours</Link></li>
                <li className="li-style"><Profile /></li>
            </ul>
        </nav>
    );
}
