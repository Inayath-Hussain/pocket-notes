import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom"
import { groupsContext } from "@/context/groups";
import useNewGroupModal from "@/hooks/modal/useNewGroupModal";
import { customGroupRoute, getGroupRouteParam, groupNotePrefix, homeRoute } from "@/route";
import NavIcon from "./navicon";
import "./navbar.css";


const NavBar = () => {

    // state
    // used for adding css class which contains different background property to differentiate from other groups
    const [currentGroup, setCurrentGroup] = useState("");

    // context
    // contains all user saved groups and their notes
    const { groups } = useContext(groupsContext);

    // hooks
    const { pathname } = useLocation();

    const { showNewGroupModal, NewGroupFormPortal } = useNewGroupModal();

    useEffect(() => {

        // if url is a groupNote route then get groupName param and update currentGroup.
        // this is done to update the current group UI when user searchs the group from browser search bar.
        const param = pathname.includes(groupNotePrefix) ? getGroupRouteParam(pathname) : "";
        setCurrentGroup(param);

    }, [pathname])


    // displays this component if user is in home page.
    // this is used for mobile view, if user is in any other page than home then this component
    // will be hidden and the respective page will be displayed.
    const shouldDisplay = pathname === homeRoute
    console.log(shouldDisplay, currentGroup)

    return (
        <div className={`navbar-layout ${shouldDisplay ? "" : "mobile-hide"}`}>

            <h1>Pocket Notes</h1>

            <div className="links-container">

                {/* all user saved groups */}
                {groups.length > 0 && groups.map(g => (

                    <Link to={customGroupRoute(g.groupName)} key={g.groupName} onClick={() => setCurrentGroup(g.groupName)}
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



            {/* button to open modal containing form to add new group */}
            <button onClick={() => { showNewGroupModal(); console.log("hello ...") }} className="add-grp-btn">
                &#43;
            </button>

            {/* this function appends modal to DOM */}
            {NewGroupFormPortal()}
        </div>
    );
}

export default NavBar;