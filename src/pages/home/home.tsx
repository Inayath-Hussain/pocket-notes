import homePageImage from "@/assets/images/home-page-image.png"
import lockIcon from "@/assets/icons/lock.svg";
import "./home.css";

const HomePage = () => {
    return (
        <div className="home-page-layout">

            <img src={homePageImage} alt="" />

            <h1 className="text-center app-name">Pocket Notes</h1>

            <p className="text-center">Send and receive messages without keeping your phone online.<br />
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>


            <footer>
                <img src={lockIcon} alt="" />
                <p>end-to-end encrypted</p>
            </footer>
        </div>
    );
}

export default HomePage;