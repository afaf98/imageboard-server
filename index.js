const express = require("express");

const app = express();

const PORT = 4000;

app.get("/Hello", (req, res, next) => {
  res.send("Hello");
});

app.listen(PORT);
