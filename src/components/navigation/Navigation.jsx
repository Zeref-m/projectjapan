import "./Navigation.css";
import {getUser} from "../../app/lib/dal.js";

export default async function () {
    return (
        <nav className="my-nav">
            <div className="logo"></div>
            <ul className="nav-flex">
                <a href="" className="a-nav">
                    <li className={"li-style"}>Gallery</li>
                </a>
                <a href="#about_us" className="a-nav">
                    <li className={"li-style"}>About us</li>
                </a>
                <a href="#header" className="a-nav">
                    <li className={"li-style"}>Home</li>
                </a>
                <a href="#gallery" className="a-nav">
                    <li className={"li-style"}>Tours</li>
                </a>
                {/* <a href="" className="a-nav"> */}
                {/* <li className={"li-style"} > */}
                <button
                    type="button"
                    className={"btn btn-primary"}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>

                {/* </li> */}
                {/* </a> */}
            </ul>
            <div>
                <div
                    type="button"
                    className="registration"
                    data-bs-toggle="modal"
                    data-bs-target="#registrationModal"
                >
                    registration
                </div>
                <div>{await getUser()}</div>
                <div className="profile"></div>
            </div>
        </nav>
    );
}
