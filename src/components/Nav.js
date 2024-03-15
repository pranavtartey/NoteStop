import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import Cookies from "js-cookie";
import Home from "./Home";
import Logout from "./Logout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const setLoginSession = () => {
      console.log("running");

      let auth = Cookies.get("Authorization");
      if (auth) {
        dispatch({ type: "isLogin", payload: true });
      } else {
        navigate("login");
        dispatch({ type: "isLogin", payload: false });
      }
    };
    setLoginSession();
  }, [dispatch]);

  return (
    <>
      <Routes>
        {state ? (
          <>
            <Route path="" exact element={<Home />} />
            <Route path="logout" exact element={<Logout />} />
          </>
        ) : (
          <>
            <Route exact path="login" element={<LoginForm />} />
            <Route exact path="register" elemtnt={<RegisterForm />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Nav;
