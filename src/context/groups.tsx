import { createContext, useState, Dispatch, SetStateAction } from "react"
import { getGroupsFromLS, IGroup } from "@/utilities/localStorage/group"

interface IContext {
    groups: IGroup[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>
}

/**
 * context api to store all the groups and their notes
 */
export const groupsContext = createContext<IContext>({ groups: [], setGroups: () => { } });


/**
 * Context Provider for {@link groupsContext}
 */
const GroupsContextProvider = ({ children }: React.PropsWithChildren) => {

    // grab all user saved groups and set as initial value
    const userGroups = getGroupsFromLS() || []

    const [groups, setGroups] = useState<IGroup[]>(userGroups);

    return (
        <groupsContext.Provider value={{ groups, setGroups }}>
            {children}
        </groupsContext.Provider>
    )
}

export default GroupsContextProvider;