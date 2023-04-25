
//Implementing middleware to protect server-side routes 
//any route/controller action that acesses req.user needs to ensure the request is coming from a logged user

module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next();
  };