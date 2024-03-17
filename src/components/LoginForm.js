import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";

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
    navigate("/register");
  };

  return (
    <MDBContainer>
      <h1 className="m-4">NoteStop</h1>
      <h3>Login</h3>
      <div className="boxes mt-5 mb-5">
        <div className="heading-login">Sign into your NoteStop account
        </div>
        <form onSubmit={submitHandler}>
          <div className="login-form">
            <MDBInput
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-100 mb-4 p-2"
              id="form1"
            />
            <MDBInput
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-100 mb-4 p-2"
              id="form2"
            />
            </div>
          <button type="submit" className="login-button">
            Sign in
          </button>
          <p className="text-center m-4">
            Don't have an account
            <button onClick={createAccountHandler}>Create Account</button>
            <Link to="/register">Create Account</Link>
          </p>
        </form>
      </div>
    </MDBContainer>
  );
};

export default LoginForm;