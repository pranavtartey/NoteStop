import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../AuthContext";

const RegisterForm = () => {
  const { user, login } = useContext(AuthContext);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

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
    // const RegisterUser = async () => {
    //   const response = await axios.post("/notes-app/user/register", formData);
    //   const decodedUser = jwtDecode(response.data.token);
    //   login(response.data.token, decodedUser.userId);
    //   // console.log(user.username);
    // };
    // RegisterUser();
    try {
      await axios.post("/notes-app/user/register", data);
      console.log("User is created Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     console.log(user.username);
  //   }
  // });

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
