import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../AuthContext";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const {user,login} = useContext(AuthContext);
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
    const LoginUser = async () => {
      const response = await axios.post("/notes-app/user/login", formData);
      const decodedUser = jwtDecode(response.data.token);
      login(response.data.token,decodedUser.userId);
    };
    LoginUser();
  };

  useEffect(()=>{
    if(user){
      console.log(user.username)
    }
  })

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