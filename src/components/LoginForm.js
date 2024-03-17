import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      await axios.post("/notes-app/user/login", data);
      dispatch({ type: "isLogin", payload: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const createAccountHandler = () => {
    navigate("/register")
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          <b>User Name:</b>
        </label>
        <input
          placeholder="Username"
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">
          <b>Password:</b>
        </label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account
          <button onClick={createAccountHandler}>Create Account</button>
          <Link to="/register">Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
