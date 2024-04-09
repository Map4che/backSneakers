const express = require("express");
const mongoose = require("mongoose");
const config = require("./config.js");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const app = express();

const sneakers = require("./routes/sneakerRoutes.js");
const users = require("./routes/userRoutes.js");

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => console.log(err.message));

app.use("/", sneakers);
app.use("/", users);

app.listen(config.api.port, () =>
  console.log("Started on port ", config.api.port)
);
