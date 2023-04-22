require('dotenv').config()
require('./config/database') //connect to db
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;


//port number being passed through environment variable

const app = express();

//* === Config
// Logger middleware
app.use(logger("dev"));

//Json payload middleware (for data coming from frontend funtions)
app.use(express.json());

//This is joinging name of folder (mer-infrastructure), name build folder and name of file
//resulting value would be
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

//Static folder that will serve the build folder not the public folder
app.use(express.static(path.join(__dirname, "build")));

//* === Routes
app.use('/api/users', require('./routes/api/users'))

app.use('/api/users/login', require('./routes/api/users'))

//* === Catch All Route
//This method is useful for sending files
//look for file called build and index.html
//this is a catch all and if it doesnt match our routes it will send the following file
//will send the html file within the build
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//* === Listening PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
