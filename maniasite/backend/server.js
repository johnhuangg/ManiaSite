const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); //this configs so env variables will be in .dmv file

const app = express(); //sets up express server
const port = process.env.PORT || 5000; //sets the port

app.use(cors()); //this is getting our middleware
app.use(express.json()); //allows to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

//connects to database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
