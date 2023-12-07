import { useLocation } from "react-router-dom"
import "./navbar.css";
import { homeRoute } from "../../route";

const NavBar = () => {

    const { pathname } = useLocation();

    console.log(pathname)

    const shouldDisplay = pathname === homeRoute
    console.log(shouldDisplay)

    return (
        <div className={`navbar-layout ${shouldDisplay ? "" : "hide"}`}>

            <h1>Pocket Notes</h1>

        </div>
    );
}

export default NavBar;