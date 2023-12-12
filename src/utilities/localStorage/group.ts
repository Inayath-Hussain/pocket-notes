import { IGroup } from "@/context/groups";

const key = "groups"



/**
 * creates and saves new group in local storage
 */
export const saveNewGroupToLS = (groupName: string, bgColor: string) => {
    const data = getGroupsFromLS() || [];

    const newGroup: IGroup = {
        groupName,
        bgColor,
        notes: []
    }

    data.unshift(newGroup)

    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * 
 * @returns user saved groups and their notes from local storage
 */
export const getGroupsFromLS = (): IGroup[] | null => {
    const data = localStorage.getItem(key);

    if (data === null) return null

    return JSON.parse(data);
}