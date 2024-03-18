import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";

const EditForm = (props) => {
  const { id } = useParams();
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const data = {
    subject: subject,
    note: note,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/notes-app/note/${id}/update-note`, data);
      console.log("The note was edited successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getNote = async () => {
      const Note = await axios.get(`/notes-app/note/${id}`);
      setSubject(Note.data.subject);
      setNote(Note.data.note);
    };
    getNote();
  }, []);

  return (
    <div>
      <Navigation />
      <h2>Edit Note</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="subject">
          <b>Subject: </b>
        </label>
        <textarea
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          rows={5}
          cols={50}
        />
        <br />
        <label htmlFor="note">
          <b>Note: </b>
        </label>
        <textarea
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={5}
          cols={50}
        />
        <button type="submit">Edit Note</button>
      </form>
    </div>
  );
};

export default EditForm;
