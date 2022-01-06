const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/client/dist/ganesh-portfolio-site"));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/client/dist/ganesh-portfolio-site/index.html")
  );
});

app.listen(process.env.PORT || 8080);
