import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const addNewHandler = async () => {
    navigate("/newnote");
  };

  useEffect(() => {
    try {
      const getCurrentUser = async () => {
        const currentUser = await axios.get("/notes-app/user/currentuser");
        setUser(currentUser.data);
      };
      getCurrentUser();
    } catch (error) {
      console.error("Error fetching currentuser", error);
    }
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Welcome, Mr. {user.username}</h1>
      <br />
      <p>Now you can find all your notes in one place hassel free</p>
      <p>
        Feel free to add new notes in your account so that you can never leave
        them behind
      </p>
      <button onClick={addNewHandler}>Add Note</button>
      {/* <Link to="/newnote">Add Note</Link> */}
      {/* <Link to="/logout">Logout</Link> */}
    </div>
  );
};

export default Home;
