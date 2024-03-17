import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

const RegisterForm = () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
      <h5 className="m-4">NoteStop</h5>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
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
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      lable="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
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