const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    console.log(user);
    const token = createJWT(user);
    res.json(token);
    //this new code i just added, creates the user if there is no error and if there is an error it will catch it and respond with a status of 400 with the format of json
  } catch (error) {
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    //find the user by email
    const user = await User.findOne({ email: req.body.email });
    console.log("[user found]:", user);
    if (!user) throw new Error();

    //if user exists compare password
    const matched = await bcrypt.compare(req.body.password, user.password);
    if (!matched) throw new Error();

    //if password is a match, create a token
    const token = createJWT(user);
    console.log(token);
    res.json(token);
  } catch {
    res.status(400).json("Check Credentials");
  }
}
//if user exists and passwords match we create a jwt token using createJWT function and return it to client

async function checkToken(req, res) {
  console.log(req.user);
  console.log(req.exp);
  res.json(req.exp)
  //these two are being created in our middleware 
  //middleware runs between req and response cycle
}

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
//* creating a new jwt, puts user in object then pass secret keyword and expiration of token is 24hrs

module.exports = {
  create,
  login,
  checkToken,
};

//We are separating it for scalability and organization.
//We are having our callback function here, where we are exporting it and putting it in our routes/api/users to create using our user object from the request the user put in from the submit handler which is in our res.json
