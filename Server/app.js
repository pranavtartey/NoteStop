require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const connect = require("./db/connection");
const passport = require("passport");
const passportLocal = require("passport-local")
const User = require("./models/user");
const session = require("express-session");
////////////////

const PORT = 8080;
const dbUrl = process.env.DBURL;

//Session config
const sessionConfig = {
  secret : "thisismysecret",
  resave : false,
  saveUninitialized : false,
  cookie : {
    httpOnly : true,
    expires : Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge : 1000 * 60 * 60 * 24 * 7
  }
}


//DataBase connection

const connectDb = async () => {
  await connect(dbUrl);
};

connectDb();
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open", () => {
  console.log("Database Connected Successfully");
})
////////

//Middleware used


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/////////

//Routes Specified
app.use("/notes-app/user", userRoutes);

app.get("/", (req, res) => {
  res.send("This app is working fine ;)");
});

app.use((err,req,res,next) => {
  const {statusCode = 500} = err;
  if(!err.message){
    err.message = "aww snap something went wrong"
  };
  console.log(err.message);
})
///////////


app.listen(PORT, (PORT) => {
  console.log(`listening on port: ${PORT}`);
});
