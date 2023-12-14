import "./navicon.css"

export interface INavIconProps {
    groupName: string
    bgColor: string
}

const NavIcon: React.FC<INavIconProps> = ({ groupName, bgColor }) => {
    const [firstWord, secondWord] = groupName.split(" ");

    return (
        <div className="nav-icon" style={{ backgroundColor: bgColor }} >
            {firstWord[0]}{secondWord && secondWord[0]}
        </div>
    );
}

export default NavIcon;