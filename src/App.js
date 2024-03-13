import Home from "./components/Home";
import "./App.css";
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { AuthContext, AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
