const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.send("post request");
});

app.put("/user", (req, res) => {
  res.send("put request");
});

app.delete("/user", (req, res) => {
  res.send("delete request");
});

app.listen(port, () => {
  console.log("app is listening on port 5000");
});
