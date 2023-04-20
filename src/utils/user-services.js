//* We will use this file to organize functions used to signup, login and logout etc

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

import * as usersApi from './users-api'


export async function signUp (userData){
    // use the SignUp users-api function 
    console.log('[From signUp function]', userData);
    const token = await usersApi.signUp(userData)
    return token
}