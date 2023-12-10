import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IContextValue {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}

/**
 * context api for status of newGroup Form modal display
 */
export const newGroupModalContext = createContext<IContextValue>({ showModal: false, setShowModal: () => undefined });


/**
 * context api provider for {@link newGroupModalContext}
 */
const NewGroupModalContext = ({ children }: React.PropsWithChildren) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <newGroupModalContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </newGroupModalContext.Provider>
    )
}

export default NewGroupModalContext;