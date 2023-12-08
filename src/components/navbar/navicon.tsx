import "./navicon.css"

interface Iprops {
    groupName: string
    bgColor: string
}

const NavIcon: React.FC<Iprops> = ({ groupName, bgColor }) => {
    const [firstWord, secondWord] = groupName.split(" ");

    return (
        <div className="nav-icon" style={{ backgroundColor: bgColor }} >
            {firstWord[0]}{secondWord && secondWord[0]}
        </div>
    );
}

export default NavIcon;