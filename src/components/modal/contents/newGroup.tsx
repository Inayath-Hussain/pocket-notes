import { Fragment, useState } from "react";
import "./newGroup.css";

const NewGroup = () => {

    const colorOptions = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"] as const;

    const [color, setColor] = useState<typeof colorOptions[number]>("#B38BFA");

    const preventClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div onClick={preventClose} className="new-grp-form-container">

            <form action="" onSubmit={handleFormSubmit}>
                <h1>Create New group</h1>

                <div className="form-input-container">

                    <label htmlFor="grpName">Group Name</label>
                    <input type="text" id="grpName" name="groupName" placeholder="Enter group name" required />

                </div>



                <div role="radiogroup" aria-label="choose background color for group photo" aria-required="true"
                    className="form-input-container">
                    <label>Choose colour</label>

                    <div className="radio-btns-container">

                        {colorOptions.map(c => (
                            <Fragment key={c}>

                                <label htmlFor={c} tabIndex={0} role="radio" aria-label={c}
                                    className={`color-label ${color === c ? "color-label-checked" : ""}`} style={{ background: c }} />
                                <input type="radio" name="color" value={c} id={c} checked={c === color} onChange={() => setColor(c)} />

                            </Fragment>
                        ))}

                    </div>

                </div>


                <div className="create-btn-container">
                    <button className="create-btn">Create</button>
                </div>

            </form>

        </div>
    );
}

export default NewGroup;