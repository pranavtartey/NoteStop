import Home from "./components/Home";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
