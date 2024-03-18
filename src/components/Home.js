import { useNavigate, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";

const Home = () => {
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const navigate = useNavigate();

  const addNewHandler = async () => {
    navigate("/newnote");
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await axios.get("/notes-app/user/currentuser");
        console.log(currentUser.data);
        setUser(currentUser.data);
        setNotes(currentUser.data.notes);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUser();
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
      <br />
      <h3>Your notes...</h3>
      <div>
        {notes.map((note) => {
          return (
            <div key={note._id}>
              <p>
                {note.subject}
                <NavLink to={`viewnote/${note._id}`}>
                  <GoLinkExternal className="mx-1 text-dark" size={"1rem"} />
                </NavLink>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
