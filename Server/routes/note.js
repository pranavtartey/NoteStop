const express = require("express");
const { verifyUser } = require("../verifyUser");
const Router = express.Router({ mergeParams: true });
const { createNote, getNote, updateNote, deleteNote } = require("../controllers/note");

Router.route("/new-note").post(verifyUser, createNote);

Router.route("/:noteid").get(verifyUser, getNote);

Router.route("/:noteid/update-note").post(verifyUser, updateNote);

Router.route("/:id/deletenote").delete(verifyUser,deleteNote);

module.exports = Router;
