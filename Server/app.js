const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 8080;

app.use("/notes-app/user",userRoutes);

// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.send("You are logged in successfullly");
// });

// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.send("User Registered Successfully");
// });

app.get("/", (req, res) => {
  res.send("This app is working fine ;)");
});

app.listen(PORT, (PORT) => {
  console.log(`listening on port: ${PORT}`);
});
