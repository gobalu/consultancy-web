import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./StaticNavigation.scss";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="nav" variant="dark">
      <Navbar.Brand>
        <NavLink className="linkItems" to="/">
          Balu Technologies
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {/* <Nav.Link className="linkItems">
          <NavLink
            className="linkItems"
            activeClassName="active"
            to="/projects"
          >
            Projects
          </NavLink>
        </Nav.Link> */}
        {/* <Nav.Link className="linkItems">
          <NavLink className="linkItems" activeClassName="active" to="/team">
            The Team
          </NavLink>
        </Nav.Link> */}
        <Nav.Link className="linkItems">
          <NavLink className="linkItems" activeClassName="active" to="/tech">
            Tech
          </NavLink>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
