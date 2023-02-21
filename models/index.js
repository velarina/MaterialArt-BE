const express = require("express");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const materi = require("../materi");

app.listen(PORT, () => {
  console.log(`server is running out:` + PORT);
});
