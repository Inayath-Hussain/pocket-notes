import { Fragment, useContext, useState } from "react";
import "./newGroup.css";
import { saveNewGroupToLS } from "@/utilities/localStorage/group";
import { groupsContext, IGroup } from "@/context/groups";
import useNewGroupModal from "@/hooks/modal/useNewGroupModal";

const NewGroup = () => {

    const colorOptions = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"] as const;

    // states
    const [color, setColor] = useState<typeof colorOptions[number]>("#B38BFA");


    // contexts
    const { setGroups } = useContext(groupsContext);


    // hooks
    const { hideNewGroupFormModal } = useNewGroupModal();


    // prevent modal close when clicked on div containing form
    const preventClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const groupName = formData.get("groupName") as string;
        const bgColor = formData.get("color") as string;

        saveNewGroupToLS(groupName, bgColor);

        setGroups(prev => {
            const newState = [...prev]
            const newGroup: IGroup = { groupName, bgColor, notes: [] }

            newState.unshift(newGroup)

            return newState;
        })

        hideNewGroupFormModal();

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

                                <label htmlFor={c} role="radio" aria-label={c}
                                    className={`color-label ${color === c ? "color-label-checked" : ""}`} style={{ background: c }}>

                                    <input type="radio" name="color" value={c} id={c} checked={c === color} onChange={() => setColor(c)} />

                                </label>

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