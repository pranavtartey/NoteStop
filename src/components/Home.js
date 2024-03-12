import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const Home = (props) => {
    const logoutHandler = async() => {
        const response = await axios.post("/notes-app/user/logout");
        console.log(response);
    }
    return (
        <div>
            <LoginForm />
            <RegisterForm />
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default Home;
