const express = require("express");
const passport = require("passport");
const Router = express.Router();
const {loginUser, registerUser, logout} = require("../controllers/user");

Router.route("/login").post(loginUser);

Router.route("/register").post(registerUser);

Router.route("/logout").get(logout)

module.exports = Router;