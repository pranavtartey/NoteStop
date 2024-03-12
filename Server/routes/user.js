const express = require("express");
const passport = require("passport");
const Router = express.Router();
const {loginUser, registerUser, logout} = require("../controllers/user");

Router.route("/login").post(passport.authenticate("local",{failureFlash : true, failureRedirect : "/blogs/user/login",keepSessionInfo : true}),loginUser);

Router.route("/register").post(registerUser);
Router.route("/logout").post(logout);

module.exports = Router;