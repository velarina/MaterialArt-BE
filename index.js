const express = require("express");
const router = require("./router/router");
const bodyParser = require("body-parser");

const PORT = 3000;
const IP = "10.212.64.146";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static("image"));
app.use("/videos", express.static("videos"));

app.use(router);
app.listen(PORT, IP, () => {
  console.log(`server is running out:` + PORT);
});
