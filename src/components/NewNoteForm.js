import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const NewNoteForm = (props) => {
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
      await axios.post("/notes-app/note/new-note", data);
      console.log("The note was created successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>New Note</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="subject">
          <b>Subject: </b>
        </label>
        <textarea
          name="subject"
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
          onChange={(e) => setNote(e.target.value)}
          rows={5}
          cols={50}
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default NewNoteForm;
