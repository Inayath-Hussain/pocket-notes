export interface Inote {
    content: string
    creationDate: Date
}

/**
 *  
 * @returns all user saved notes from local storage or null if group doesn't exist
 */
export const getNotesFromLS = (id: string): Inote[] | null => {
    const notes = localStorage.getItem(id);

    if (notes === null) return null

    return JSON.parse(notes);
}


/**
 * creates and saves empty notes array to local storage with groupName as key
 */
export const createAndSaveNotesToLS = (id: string) => {
    const notes: Inote[] = []

    localStorage.setItem(id, JSON.stringify(notes))
}