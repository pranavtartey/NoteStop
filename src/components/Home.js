import {Link} from "react-router-dom";

const Home = () => {

  return (
    <div>
      <h1>This is home page</h1>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Home;
