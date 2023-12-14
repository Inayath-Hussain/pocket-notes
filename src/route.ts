export const homeRoute = "/"

export const groupNotePrefix = "/notes/"
export const groupRoute = `${groupNotePrefix}:id`
export const customGroupRoute = (id: string) => {
    return `${groupNotePrefix}${id}`;
}

/**
 * Used in navbar component. Navbar isn't inside routes element so useParams(to get the groupName from url) returns undefined.
 * @returns param(group name) from the url
 */
export const getGroupRouteParam = (path: string) => {
    const startIndex = groupNotePrefix.length
    const param = path.substring(startIndex);

    return decodeURIComponent(param)
}