import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { GoTrash } from "react-icons/go";
import { VscEdit } from "react-icons/vsc";

const ViewNote = () => {
  const [note, setNote] = useState({
    subject: "",
    note: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const getNote = async () => {
      const Note = await axios.get(`/notes-app/note/${id}`);
      setNote(Note.data);
      console.log(Note.data);
    };
    getNote();
  }, []);
  return (
    <>
      <Navigation />
      <div>
        <h1>View Note</h1>
        <h2>{note.subject}</h2>
        <b>{note.note}</b>
      </div>
      <div>
        <NavLink to={`/editnote/${note._id}`}>
        <VscEdit title="Edit" className="mx-1 text-dark" size={"1.2rem"} />
        </NavLink>
        <NavLink to={`/deletenote/${note._id}`}>
        <GoTrash title="Delete" className="mx-1 text-dark" size={"1.2rem"} />
        </NavLink>
      </div>
    </>
  );
};

export default ViewNote;
