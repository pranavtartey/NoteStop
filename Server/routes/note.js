const express = require("express");
const Router = express.Router({ mergeParams: true });
const { createNote } = require("../controllers/note");

Router.route("/new-note").post(createNote);

module.exports = Router;
