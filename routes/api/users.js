

const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

//Router will have a post method 
router.post('/', usersCtrl.create)
//we pass it to our callback function which is in anther file (our controllers/usrs file)

module.exports = router


//* Routing Logic 
//only handling the routing from the backend api endpoint , passing the requests coming in from the endpoint and passing it to correct function 