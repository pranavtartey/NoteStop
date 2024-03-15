const jwt = require("jsonwebtoken");
const User = require("../models/user");
const passport = require("passport");

module.exports.registerUser = async (req, res, next) => {
  // console.log(req.body);
  // res.send("User is registered Successfully");
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, function (err) {
      if (err) return next(err);
      const token = jwt.sign({ userId: registeredUser }, "thisismysecret");
      res.json({ token, registeredUser });
    });
  } catch (err) {
    console.log("error", err.message);
    res.send("User was not registered");
  }
};

module.exports.loginUser = async (req, res) => {
  const user = req.user; //the user in req.user was created for us by passport.authenticate middleware that we have used in the routes section for this callback
  const token = jwt.sign({ userId: user }, "thisismysecret");
  res.json({ token, user });
};

module.exports.logout = async (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    // console.log(req.user);
    res.send("Logout was succcessfull");
  });
};
