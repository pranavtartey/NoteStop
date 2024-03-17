const express = require("express");
const { verifyUser } = require("../verifyUser");
const Router = express.Router({ mergeParams: true });
const { createNote, getCurrentUser } = require("../controllers/note");

Router.route("/new-note").post(verifyUser, createNote);

module.exports = Router;
