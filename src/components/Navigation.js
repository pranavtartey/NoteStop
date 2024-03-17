import React from "react";
import { MDBContainer, MDBNavbar, MDBTooltip } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Navigation = () => {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBTooltip tag="a" title="logout">
            {""}
            <NavLink to="/logout">
              <BiLogOut className="mx-1 text-dark" size={"1.5rem"} />
            </NavLink>
          </MDBTooltip>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navigation;