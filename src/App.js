// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Nav />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
