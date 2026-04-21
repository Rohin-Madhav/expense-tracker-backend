require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
