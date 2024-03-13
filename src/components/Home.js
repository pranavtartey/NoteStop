import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../AuthContext";
const Home = (props) => {
    const {user, logout} = useContext(AuthContext);
    const logoutHandler = async() => {
        const response = await axios.post("/notes-app/user/logout");
        logout();
    }

    useEffect(()=>{
        console.log(user);
    })

    return (
        <div>
            <LoginForm />
            <RegisterForm />
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default Home;
