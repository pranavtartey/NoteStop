import {Link, useNavigate} from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  // const addNewHandler = async() => {
  //   navigate("/newnnote");
  // }

  return (
    <div>
      <h1>This is home page</h1>
      {/* <button onClick={addNewHandler}>Add Note</button> */}
      <Link to="/newnote">Add Note</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Home;
