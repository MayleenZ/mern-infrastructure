import { useState } from "react";
import { signUp } from "../utils/user-services";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  //These are controlled forms by react so we have to handle change so we can type into the inputs
  const disable = formData.password !== formData.confirm;
  //switch using a boolean and basically a toggle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      //Passing these values in the UserData object to the backend that only has what we need when user submits form
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      //return a token (yay) with the userData
      const user = await signUp(userData);
      console.log(user);
    } catch (error) {
      setFormData({ ...formData, error: "Sign up failed - Try Again! " });
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, error: "" });
    // we are spreading the formData, retrieving the name attribute that we set and set it to the event value the user is typing, when user has an error we set it to empty string
    // The spread is important becuase it gives a copy of the formData object as state should be immutage and never updated directly, instead new copies of stat should be created with updated values
    //the spread operator is used so we can keep updating all the values that we initialized within useState
  };
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* autocomplete is off bc its sensitive info so you dont see the previous values  */}
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={formData.confirm}
          name="confirm"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={disable}>
          Sign Up
        </button>
      </form>
      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm;
