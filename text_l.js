const { urlencoded } = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));
app.use(morgan("tiny"));
app.use((req, res, next) => {
  console.log(`${req.method},${req.originalUrl},${new Date().toISOString()}`);
  next();
});

app.post("/home", (req, res) => {
  console.log(req.body);
  res.json({ javascript: "object", body: req.body });
});

/* app.post("/home", (req, res) => {
  res.send("post request");
});

app.delete("/home", (req, res) => {
  res.send("delete request");
});

app.use((req, res) => {
  res.send("midleware request");
});
 */
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a server launch", error);
  }
  console.log(`Server works on port ${PORT}`);
});
