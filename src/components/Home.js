import {Link, useNavigate} from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {

  const navigate = useNavigate();

  const addNewHandler = async() => {
    navigate("/newnote");
  }


  return (
    <div>
      <Navigation />
      <h1>This is home page</h1>
      <button onClick={addNewHandler}>Add Note</button>
      {/* <Link to="/newnote">Add Note</Link> */}
      {/* <Link to="/logout">Logout</Link> */}
    </div>
  );
};

export default Home;
