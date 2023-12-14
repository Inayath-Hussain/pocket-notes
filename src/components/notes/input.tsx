import { useState } from "react";
import "./input.css";
import SaveIcon from "./saveIcon";

interface Iprops {
    save: (noteContent: string) => void
}

const NotesInput: React.FC<Iprops> = ({ save }) => {

    const [inputValue, setInputValue] = useState("");

    const isDisabled = inputValue === ""


    const handleSave = () => {

        save(inputValue);

        setInputValue("");
    }

    return (
        <div className="notes-input-layout">

            <div className="notes-input-container">


                {/* user input */}
                <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    className="custom-grey-bg-scrollbar" placeholder="Enter your text here..........." />

                {/* save button */}
                <button disabled={isDisabled} onClick={handleSave} >
                    <SaveIcon disabled={isDisabled} />
                </button>


            </div>

        </div>
    );
}

export default NotesInput;