//* Handle user-related communications with the server

const BASE_URL = "/api/users";

export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    //we make the userData into a string using JSON.stringify()
  });

  if (res.ok) {
    return res.json(); //if reuqest is ok (200) we will get a JSON Web Token , parsed to a JS object and expecting the JWT token
  } else {
    throw new Error("Invalid Sign Up");
  }
}

//* Log In
//making http request
export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
  });

  if (res.ok) {
      return res.json();
  } else {
      throw new Error('Invalid Sign In!')
  }
}


//This function creates a POST request to an API endpoint (route) to create a new user account.
//Fnction takes single argument userData which is object containing users info
//function uses fetchAPI to send POST request to endpoint specified in BASE_URL
// request body is the userData object converted into a JSON string using the JSON.stringify meetho
//the request header specifies content type as "aplication/json"
