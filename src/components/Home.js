import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const Home = (props) => {
    return (
        <div>
            <LoginForm />
            <RegisterForm />
        </div>
    );
};

export default Home;
