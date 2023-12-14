import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import NotesHeader from "@/components/notes/header";
import { groupsContext } from "@/context/groups"
import { Inote, getNotesFromLS, addNoteToLS } from "@/utilities/localStorage/notes";
import PageNotFound from "../notFound/notFound";
import "./notes.css";
import NotesList from "@/components/notes/notesList";
import NotesInput from "@/components/notes/input";

const NotesPage = () => {

    // state
    const [notes, setNotes] = useState<Inote[]>([]);

    // context
    const { groups } = useContext(groupsContext);

    // hooks
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        if (groupExists) {

            if (!id) throw Error("param is undefined");

            const groupNotes = getNotesFromLS(id);

            // when a new group is created then a key value pair with id of group to empty array is saved so when groupNotes is null then it means group doesn't exist.
            // although this check is unnecessary and I have done this for type safety
            if (groupNotes === null) {
                console.error("group doesnt exist");

                navigate("not found")
                return
            }

            setNotes(groupNotes);
        }

    }, [id]);



    const getGroupInfo = () => {
        return groups.find(grp => grp.id === id);
    }

    const groupInfo = useMemo(getGroupInfo, [id]);

    const groupExists = groupInfo !== undefined

    const saveNote = (noteContent: string) => {

        let creationDate = new Date()

        const note: Inote = { content: noteContent, creationDate }

        // if id is undefined then this component wont render in the first place so string type assertion for id is valid here.
        addNoteToLS(id as string, note);

        setNotes(prev => [...prev, note])

    }



    if (!groupExists) return <PageNotFound />

    return (

        <div className="notes-page-layout">
            {groupInfo && <NotesHeader bgColor={groupInfo?.bgColor} groupName={groupInfo?.groupName} />}

            <NotesList notes={notes} />

            <NotesInput save={saveNote} />
        </div>
    );
}

export default NotesPage;