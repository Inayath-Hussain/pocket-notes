import { useRef, useEffect } from "react";
import { Inote } from "@/utilities/localStorage/notes";
import "./notesList.css";
import NoteCard from "./noteCard";

interface Iprops {
    notes: Inote[]
}

const NotesList: React.FC<Iprops> = ({ notes }) => {

    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // auto scroll to the latest note when user component is loaded or when new note is added
        cardRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [notes])

    return (
        <div className="notes-list-layout custom-grey-bg-scrollbar">


            {notes.map(n => (
                <NoteCard note={n} ref={cardRef} key={n.creationDate.toString()} />
            ))}


        </div>
    );
}

export default NotesList;