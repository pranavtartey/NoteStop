import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = async () => {
      const response = await axios.post("/notes-app/user/login", formData);
      console.log(response.data);
      console.log(formData);
    };
    postData();
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          <b>User Name:</b>
        </label>
        <input placeholder="Username" name="username" type="text" onChange={changeHandler} />
        <label htmlFor="password">
          <b>Password:</b>
        </label>
        <input placeholder="Password" type="password" name="password" onChange={changeHandler} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;