import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await axios.get("/notes-app/user/logout");
      dispatch({ type: "isLogin", payload: false });
      navigate("/login");
    };
    logout();
  }, [dispatch, navigate]);
};

export default Logout;
