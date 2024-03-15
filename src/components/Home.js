import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import NewNoteForm from "./NewNoteForm";

const Home = (props) => {
  const [hasAccount, setHasAccount] = useState(false);
  const [isNewNote, setIsNewNote] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = async () => {
    await axios.post("/notes-app/user/logout");
    logout();
  };

  const signupHandler = () => {
    setHasAccount(false);
  };

  const signinHandler = () => {
    setHasAccount(true);
  };

  const cancelHandler = () => {
    setIsNewNote(false);
  };

  const addNoteHandler = () => {
    setIsNewNote(true);
  };

  const newNoteSubmitHandler = () => {
    // updateUser(userData);
    setIsNewNote(false);
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
          {isNewNote ? (
            <div>
              <NewNoteForm onSubmit={newNoteSubmitHandler} />
              <button onClick={cancelHandler}>Cancel</button>
            </div>
          ) : (
            <div>
              <button onClick={addNoteHandler}>Add Note</button>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          )}
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
