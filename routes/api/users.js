const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

//*our middlewware that ensures a route doesn't get "logged in" without authorization
const ensureLoggedIn = require('../../config/ensureLoggedIn')
//we have now protected this route from unauthorized users (users must be signedup and logged in)- can redirect them to sign in - if they make req with no token (that is unauthorized) or (token has expired)

//======
//Router will have a post method 
router.post('/', usersCtrl.create)
//we pass it to our callback function which is in anther file (our controllers/usrs file)


//here we are receiving the router.post for the req and res objects and process the request and send a response back to client
//we are calling the function called .login
router.post('/login', usersCtrl.login)
//we use userCtrl.login bc we are going inside the userCtrl which is from the controllers api users and selecting the .login which is the function within the ctrl file 



router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)



module.exports = router


//* Routing Logic 
//only handling the routing from the backend api endpoint , passing the requests coming in from the endpoint and passing it to correct function 