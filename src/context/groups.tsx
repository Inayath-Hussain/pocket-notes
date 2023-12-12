import { createContext, useState, Dispatch, SetStateAction } from "react"

interface Inote {
    content: string
    creationDate: Date
}

export interface IGroup {
    groupName: string
    bgColor: string
    notes: Inote[]
}

interface IContext {
    groups: IGroup[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>
}

/**
 * context api to store all the notes groups
 */
export const groupsContext = createContext<IContext>({ groups: [], setGroups: () => { } });


/**
 * Context Provider for {@link groupsContext}
 */
const GroupsContextProvider = ({ children }: React.PropsWithChildren) => {
    const [groups, setGroups] = useState<IGroup[]>([]);

    return (
        <groupsContext.Provider value={{ groups, setGroups }}>
            {children}
        </groupsContext.Provider>
    )
}

export default GroupsContextProvider;