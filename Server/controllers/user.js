const jwt = require("jsonwebtoken");
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

module.exports.registerUser = async (req, res, next) => {
  try {
    let { username, password, email } = req.body;
    const usernameAlreadyPresent = await User.findOne({ username: username });
    if (usernameAlreadyPresent)
      return res
        .status(401)
        .json({ message: "Given Username Already Exists :(((" });

    const emailAlreadyExists = await User.findOne({ email: email });
    if (emailAlreadyExists)
      return res
        .status(401)
        .json({ message: "Given Email Already Exists : (((" });

    let salt = await bcrypt.genSaltSync(13);
    let hashpassword = await bcrypt.hash(password, salt);

    let newUser = new User({
      username: username,
      email: email,
      password: hashpassword,
    });

    await newUser.save().then(() => {
      console.log("User was created successfully");
    });

    res.status(201).json({ message: "User was created successfully" });
  } catch (err) {
    console.log("error", err.message);
    res.send("User was not registered");
  }
};

module.exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username });
  if (!user) return res.status(401).json({ message: "Invalid Username" });

  let isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(401).json({ message: "Invalid Password" });

  const token = jwt.sign({ userId: user._id }, "thisismysecret");
  res
    .status(201)
    .cookie("Authorization", token)
    .header("Authorization", token)
    .send(token);
};

module.exports.logout = async (req, res, next) => {
  res.clearCookie("Authorization", { path: "/" });
  res.status(200).send("logout");
};
