require('dotenv').config()
require('./config/database') //connect to db
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
//port number being passed through environment variable

const app = express();

//* === Config (Middleware) ============
// Logger middleware | log https requests and responses in console
  //*middleware runs between req and response cycle
//logs http method, url, status code, response time and other info for each req and res that passes through. helps monitor app and debug
app.use(logger("dev"));

//Json payload middleware (for data coming from frontend funtions) used to parse incoming JSON payloads in the req body of HTTP POST and PUT requests. simplifies processof parsing incoming json payloads. 
//this parses json payloads and parses them to Javascript objects to be used in an app
//useful in REST APIs, where data is often sent and receivied in json format 
app.use(express.json());

//serve the favicon icon of the application
//instructured to serve the favicon.ico file from the build directory of the application, little icon next to the window on the browser
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

//Static folder that will serve the build folder not the public folder
app.use(express.static(path.join(__dirname, "build")));

//checks if token was sent and sets  userData on the req (req.user)
app.use(require('./config/checkToken'))

//* === Routes =================================
//mounting function for the path /api/users that will pass through the middleware function 
//second argument is a middleware function which in this case is being imported from './routes/api/users module 
//any incoming http request for the 'api/users' path will be handled by the middleware function that is exported from the 'routes/api/users module
app.use('/api/users', require('./routes/api/users'))



//we mount a middleware function that will handle http requests to the path '/api/user/login'. 
//the middleware function is created by calling require() to load the module defined in './routes/api/users', which exports a function that handles requests to this path 
app.use('/api/users/login', require('./routes/api/users'))


//This method is useful for sending files
//look for file called build and index.html
//this is a catch all and if it doesnt match our routes it will send the html file within the build folder
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});




//* === Listening PORT ===============
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
