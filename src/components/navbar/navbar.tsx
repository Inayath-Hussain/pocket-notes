import { useState } from "react";
import { useLocation, Link } from "react-router-dom"
import "./navbar.css";
import { homeRoute } from "@/route";
import NavIcon from "./navicon";

interface Igroup {
    groupName: string
    bgColor: string
}

const testData: Igroup[] = [
    { groupName: "Python Notes", bgColor: "yellow" },
    { groupName: "SQL Notes", bgColor: "blue" },
    { groupName: "Journal", bgColor: "orange" }
]

const NavBar = () => {

    const [groups, setGroups] = useState<Igroup[]>(testData);

    const { pathname } = useLocation();

    console.log(pathname)

    const shouldDisplay = pathname === homeRoute
    console.log(shouldDisplay)

    return (
        <div className={`navbar-layout ${shouldDisplay ? "" : ""}`}>

            <h1>Pocket Notes</h1>

            {/* map icons and grpName */}
            {groups.length > 0 && groups.map(g => (
                <Link to={g.groupName} key={g.groupName} className="link">
                    <NavIcon groupName={g.groupName} bgColor={g.bgColor} />
                    <p>{g.groupName}</p>
                </Link>
            ))}

            <button className="add-grp-btn">
                &#43;
            </button>

        </div>
    );
}

export default NavBar;