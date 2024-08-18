import './Navigation.css';


export default function () {
    return (
        <nav id="my-nav" className="">
            <ul className="nav-flex">
                <li className={"li-style"}><a href="">Gallery</a></li>
                <li className={"li-style"}><a href="">About us</a></li>
                <li className={"li-style"}><a href="">Home</a></li>
                <li className={"li-style"}>
                    <a href="">Tours</a>
                </li>
                <li className={"li-style"}><a href="">Contacts</a></li>
            </ul>
        </nav>
    )
}
