import { createAndSaveNotesToLS } from "./notes";

const key = "groups"

export interface IGroup {
    groupName: string
    bgColor: string
}



/**
 * creates and saves new group in local storage
 */
export const saveNewGroupToLS = (groupName: string, bgColor: string) => {
    const data = getGroupsFromLS() || [];

    const newGroup: IGroup = {
        groupName,
        bgColor
    }

    data.unshift(newGroup)

    localStorage.setItem(key, JSON.stringify(data));

    createAndSaveNotesToLS(groupName);
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