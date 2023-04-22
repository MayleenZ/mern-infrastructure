const User = require("../../models/user");
const jwt = require('jsonwebtoken')

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    console.log(user);
    const token = createJWT(user);
    res.json(token)
//this new code i just added, creates the user if there is no error and if there is an error it will catch it and respond with a status of 400 with the format of json

  } catch (error) {
    res.status(400).json(error);
  }
}


async function login(req,res) {
  try {
    const loggedUser = await login(req.body);
    console.log(loggedUser);
    const token = createJWT(loggedUser)
    res.json(token)
    
  } catch (error) {
    res.status(400).json(error);
  }
}






function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }
    //* creating a new jwt, puts user in object then pass secret keyword and expiration of token is 24hrs


module.exports = {
  create, login
};

//We are separating it for scalability and organization.
//We are having our callback function here, where we are exporting it and putting it in our routes/api/users to create using our user object from the request the user put in from the submit handler which is in our res.json
