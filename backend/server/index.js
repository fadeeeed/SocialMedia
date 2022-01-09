const express = require("express");

const port = process.env.port || 3001;

const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "hello from server!" });
});

const users = require("../src/routes/users");

app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
