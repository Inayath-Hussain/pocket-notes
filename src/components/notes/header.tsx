import { memo } from "react";
import { Link } from "react-router-dom";
import backIcon from "@/assets/icons/go-back-icon.svg";
import { homeRoute } from "@/route";
import NavIcon, { INavIconProps } from "../navbar/navicon";
import "./header.css";

interface Iprops extends INavIconProps { }

const NotesHeader: React.FC<Iprops> = ({ bgColor, groupName }) => {

    return (
        <div className="notes-header-layout">

            {/* back button */}
            <Link to={homeRoute} className="notes-back-button mobile-only">
                <img src={backIcon} alt="go back" />
            </Link>


            {/* group icon */}
            <NavIcon bgColor={bgColor} groupName={groupName} />


            {/* group name */}
            <p className="notes-header-group-name">{groupName}</p>

        </div>
    );
}

// memo is used to re-render only when props are changed. In this case group name or background color.
// This is done to avoid unnecessary re-render when notes are added
export default memo(NotesHeader);