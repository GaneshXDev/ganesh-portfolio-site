const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./client/dist/ganesh-portfolio-site"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: ".client/dist/ganesh-portfolio-site/" });
});

app.listen(process.env.PORT || 8080);
