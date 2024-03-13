import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../AuthContext";

const RegisterForm = () => {
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
    const RegisterUser = async () => {
      const response = await axios.post("/notes-app/user/register", formData);
      const decodedUser = jwtDecode(response.data.token);
      login(response.data.token,decodedUser.userId);
      console.log(user.username);
    };
    RegisterUser();
  };

  useEffect(()=>{
    if(user){
      console.log(user.username);
    }
  })

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          <b>User Name: </b>
        </label>
        <input
          placeholder="Username"
          name="username"
          type="text"
          onChange={changeHandler}
        />
        <label htmlFor="email">
          <b>Email: </b>
        </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <label htmlFor="password">
          <b>Password: </b>
        </label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={changeHandler}
        />
        <label htmlFor="confirmpassword">
          <b>Confirm Password: </b>
        </label>
        <input
          placeholder="Confirm Password"
          type="password"
          name="confirmpassword"
          onChange={changeHandler}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
