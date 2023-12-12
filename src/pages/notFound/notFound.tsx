import { Link } from "react-router-dom";
import "./notFound.css";
import { homeRoute } from "@/route";

const PageNotFound = () => {
    return (
        <div className="not-found-layout">
            <h1>Group Not Found</h1>

            <p className="pc-only-text">Please Select group from navbar.</p>
            <p className="mobile-only-text">Return to <Link to={homeRoute}>Home</Link></p>
        </div>
    );
}

export default PageNotFound;