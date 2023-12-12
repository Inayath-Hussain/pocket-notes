import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom"
import { groupsContext } from "@/context/groups";
import useNewGroupModal from "@/hooks/modal/useNewGroupModal";
import { getGroups } from "@/utilities/localStorage/group";
import { homeRoute } from "@/route";
import NavIcon from "./navicon";
import "./navbar.css";


const NavBar = () => {

    // const [groups, setGroups] = useState<IGroup[]>([]);
    const [currentGroup, setCurrentGroup] = useState("");
    const { groups, setGroups } = useContext(groupsContext)

    const { pathname } = useLocation();

    const { showNewGroupModal, NewGroupFormPortal } = useNewGroupModal();

    useEffect(() => {
        // grab all groups here
        const groups = getGroups();

        setGroups(groups || [])
    }, [])

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