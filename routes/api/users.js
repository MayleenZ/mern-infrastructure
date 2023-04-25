const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')


//Router will have a post method 
router.post('/', usersCtrl.create)
//we pass it to our callback function which is in anther file (our controllers/usrs file)


//here we are receiving the router.post for the req and res objects and process the request and send a response back to client
//we are calling the function called .login
router.post('/login', usersCtrl.login)
//we use userCtrl.login bc we are going inside the userCtrl which is from the controllers api users and selecting the .login which is the function within the ctrl file 

module.exports = router


//* Routing Logic 
//only handling the routing from the backend api endpoint , passing the requests coming in from the endpoint and passing it to correct function 