const express = require("express");
const passport = require("passport");
const Router = express.Router({ mergeParams: true });
const {verifyUser} = require("../verifyUser");
const {
  loginUser,
  registerUser,
  logout,
  getCurrentUser,
} = require("../controllers/user");

Router.route("/login").post(loginUser);

Router.route("/register").post(registerUser);

Router.route("/logout").get(logout);

Router.route("/currentuser").get(verifyUser, getCurrentUser);

module.exports = Router;
