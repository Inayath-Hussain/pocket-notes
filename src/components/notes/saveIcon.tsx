interface Iprops {
    disabled: boolean
}

const SaveIcon: React.FC<Iprops> = ({ disabled }) => {
    return (
        <svg width="25" height="25" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 17.6842V11.0526L8.8421 8.84211L0 6.63158V0L21 8.84211L0 17.6842Z"
                fill={disabled ? "#5C5C5C" : "#001F8B"} />
        </svg>

    );
}

export default SaveIcon;