const express = require("express");
const passport = require("passport");
const Router = express.Router();
const {loginUser, registerUser} = require("../controllers/user");

Router.route("/login").post(loginUser);

Router.route("/register").post(registerUser);

module.exports = Router;