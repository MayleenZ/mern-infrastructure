//* We will use this file to organize functions used to signup, login and logout etc

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

import * as usersApi from "./users-api";

//* get token function
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export async function signUp(userData) {
  // use the SignUp users-api function
  console.log("[From signUp function]", userData);
  const token = await usersApi.signUp(userData);
  localStorage.setItem("token", token);
  //only going to be saved in local storage (localhost:3000)
  return getUser();
}

//* Logout
export function logOut() {
  localStorage.removeItem("token");
}

//* Loging
export async function logIn() {}
