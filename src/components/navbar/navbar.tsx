import { useState } from "react";
import { useLocation, Link } from "react-router-dom"
import "./navbar.css";
import { homeRoute } from "@/route";
import NavIcon from "./navicon";
import useNewGroupModal from "@/hooks/modal/useNewGroupModal";

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
    const [currentGroup, setCurrentGroup] = useState("");

    const { pathname } = useLocation();

    const { showNewGroupModal, NewGroupFormPortal } = useNewGroupModal();

    const shouldDisplay = pathname === homeRoute
    console.log(shouldDisplay)

    return (
        <div className={`navbar-layout ${shouldDisplay ? "" : "mobile-hide"}`}>

            <h1>Pocket Notes</h1>

            <div className="links-container">
                {/* map icons and grpName */}
                {groups.length > 0 && groups.map(g => (

                    <Link to={g.groupName} key={g.groupName} onClick={() => setCurrentGroup(g.groupName)}
                        className={`link ${g.groupName === currentGroup ? "current" : ""}`}>

                        <NavIcon groupName={g.groupName} bgColor={g.bgColor} />
                        <p>{g.groupName}</p>

                    </Link>

                ))}

                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
                <Link to={"/"} onClick={() => setCurrentGroup("React Native Notes")}
                    className={`link ${"React Native Notes" === currentGroup ? "current" : ""}`}>

                    <NavIcon groupName={"React Native Notes"} bgColor={"red"} />
                    <p>{"React Native Notes"}</p>

                </Link>
            </div>




            <button onClick={() => { showNewGroupModal(); console.log("hello ...") }} className="add-grp-btn">
                &#43;
            </button>

            {NewGroupFormPortal()}
        </div>
    );
}

export default NavBar;