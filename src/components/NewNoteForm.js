import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
// import { response } from "express";

const NewNoteForm = (props) => {
    const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    subject: "",
    note: "",
  });

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const createNote = async() => {
    await axios.post(`/notes-app/${user._id}/note/new-note`,formData);
    props.onSubmit();
    }
    createNote();
  }

  return (
    <div>
      <h2>New Note</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="subject">
          <b>Subject: </b>
        </label>
          <textarea name="subject" onChange={changeHandler} rows={5} cols={50} />
        <br />
        <label htmlFor="note">
          <b>Note: </b>
        </label>
          <textarea name="note" onChange={changeHandler} rows={5} cols={50} />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default NewNoteForm;