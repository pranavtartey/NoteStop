import React, { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token,userData) => {
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token) {
        const decodedUser = jwtDecode(token);
        // console.log("decoded Token");
        // console.log(decodedUser.userId);
        setUser(decodedUser.userId);
    }
  },[])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
