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

app.get("/", (req, res) => {
  res.send("This app is working fine ;)");
});

app.listen(PORT, (PORT) => {
  console.log(`listening on port: ${PORT}`);
});
