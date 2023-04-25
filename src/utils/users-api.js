//* Handle user-related communications with the server

import { getToken } from "./user-services";

const BASE_URL = '/api/users';

//* Sign Up
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

//* Login
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}


//* Check Token
export function checkToken(){
  return sendRequest(`${BASE_URL}/check-token`)
}


//*--- Helper Functions ---*/
//we are using the helper function to keep the code DRY (Dont Repeat Yourself)
//we are streamlining our code and making it easier to read


async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken()
  if (token) {
    //headers only created when there is a payload
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`
    // Add token to an Authorization Header
    //Prefacing with 'Bearer' is recommended
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
// Note: The sendRequestfunction always returns a promise and we are passing that promise to the caller of checkToken.







//----
//This function creates a POST request to an API endpoint (route) to create a new user account.
//Fnction takes single argument userData which is object containing users info
//function uses fetchAPI to send POST request to endpoint specified in BASE_URL
// request body is the userData object converted into a JSON string using the JSON.stringify meetho
//the request header specifies content type as "aplication/json"



