import './Header.css';
import Navigation from "../navigation/Navigation";

export default function () {
    return (
        <div className="header">
            <Navigation />
            <div className="w-100 text-center">
                <h1 className="">TOURS TO</h1>
                <h2 className="fs-1 text-danger">JAPAN</h2>
            </div>
        </div>
    )
}