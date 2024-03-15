import React, { createContext, useState, useEffect, useReducer } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
const initialState = false;

const reducer = (state, action) => {
  if (action.type === "isLogin") {
    return action.payload;
  }
  return state;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const login = (token, userData) => {
  //   localStorage.setItem("token", token);
  //   setUser(userData);
  // };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   setUser(null);
  // };

  // // const updateUser = (userData) => {
  // //   setUser(userData);
  // // };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedUser = jwtDecode(token);
  //     // console.log("decoded Token");
  //     // console.log(decodedUser.userId);
  //     setUser(decodedUser.userId);
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
