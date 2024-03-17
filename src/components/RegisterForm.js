import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const RegisterForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      await axios.post("/notes-app/user/register", data);
      console.log("User is created Successfully");
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
      <h1 className="m-4">NoteStop</h1>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h3" className="mb-0">
                Register
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form onSubmit={submitHandler}>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="Username"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      id="form1"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="form2"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      type="password"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-100 mb-4 p-2"
                      id="form3"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn size="lg" type="submit">
                  Signup
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default RegisterForm;
