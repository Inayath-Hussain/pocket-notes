import { IGroup } from "@/context/groups";

const key = "groups"



/**
 * creates and saves new group in local storage
 */
export const saveNewGroupToLS = (groupName: string, bgColor: string) => {
    const data = getGroups() || [];

    const newGroup: IGroup = {
        groupName,
        bgColor,
        notes: []
    }

    data.unshift(newGroup)

    localStorage.setItem(key, JSON.stringify(data));
}


export const getGroups = (): IGroup[] | null => {
    const data = localStorage.getItem(key);

    if (data === null) return null

    return JSON.parse(data);
}