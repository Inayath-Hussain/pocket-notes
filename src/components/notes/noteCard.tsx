import { forwardRef } from "react";
import { getDate } from "@/utilities/dateTime/date";
import { getTime } from "@/utilities/dateTime/time";
import { Inote } from "@/utilities/localStorage/notes";
import "./noteCard.css";

interface Iprops {
    note: Inote
}

const NoteCard = forwardRef<HTMLDivElement, Iprops>(({ note }, ref) => {

    return (
        <div ref={ref} className="note-card-layout">

            <p className="note-card-content">{note.content}</p>

            <p className="note-card-date">
                {getDate(note.creationDate)} <span></span> {getTime(note.creationDate)}
            </p>

        </div>
    );
})

export default NoteCard;