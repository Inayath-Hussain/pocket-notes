import { createAndSaveNotesToLS } from "./notes";

const key = "groups"

export interface IGroup {
    id: string
    groupName: string
    bgColor: string
}



/**
 * creates new group and an empty notes array using id as key for the notes and saves in local storage 
 */
export const saveNewGroupToLS = (groupName: string, bgColor: string, id: string) => {
    const data = getGroupsFromLS() || [];

    const newGroup: IGroup = {
        groupName,
        bgColor,
        id
    }

    data.unshift(newGroup)

    localStorage.setItem(key, JSON.stringify(data));

    createAndSaveNotesToLS(id);
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