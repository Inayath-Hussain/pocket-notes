export interface Inote {
    content: string
    creationDate: Date
}

/**
 *  
 * @returns all user saved notes from local storage or null if group doesn't exist
 */
export const getNotesFromLS = (groupName: string): Inote | null => {
    const notes = localStorage.getItem(groupName);

    if (notes === null) return null

    return JSON.parse(notes);
}


/**
 * creates and saves empty notes array to local storage with groupName as key
 */
export const createAndSaveNotesToLS = (groupName: string) => {
    const notes: Inote[] = []

    localStorage.setItem(groupName, JSON.stringify(notes))
}