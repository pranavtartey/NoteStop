import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };


    try {
      await axios.post("/notes-app/user/register", data);
      console.log("User is created Successfully");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          <b>User Name: </b>
          <input
            placeholder="Username"
            name="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <b>Email: </b>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <b>Password: </b>
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
