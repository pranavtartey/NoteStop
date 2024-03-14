import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../AuthContext";
const Home = (props) => {
  const [hasAccount, setHasAccount] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = async () => {
    const response = await axios.post("/notes-app/user/logout");
    logout();
  };

  const signupHandler = () => {
    setHasAccount(false);
  }

  const signinHandler = () => {
    setHasAccount(true);
  }

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  });

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome,{user.username}</p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <div>
          {!hasAccount ? (
            <div>
              <RegisterForm />
              <p>Already have an account?</p>
              <button onClick={signinHandler}>Sign In</button>
            </div>
          ) : (
            <div>
              <LoginForm />
              <p>Create Account</p>
              <button onClick={signupHandler}>Sign up</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
