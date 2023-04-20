

function create(req,res){
    // console.log(['From POST handler'], req.body);
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
        // The controller function extracts data from the request object (name and email) and uses it to create a new user object
        //It then sends a JSON response containing newly created user back to client 
        //This handles incoming POST requests
    })
}


module.exports = {
    create
}

//We are separating it for scalability and organization. 
//We are having our callback function here, where we are exporting it and putting it in our routes/api/users to create using our user object from the request the user put in from the submit handler which is in our res.json 