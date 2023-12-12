export const homeRoute = "/"

export const groupRoute = "/notes/:id"
export const customGroupRoute = (id: string) => {
    return `/notes/${id}`;
}