import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 625;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className="nav"
      variant="dark"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#000" : "transparent",
        color: navBackground ? "#000" : "#fff",
      }}
    >
      <Navbar.Brand>
        <NavLink className="linkItems" to="/">
          Balu Technologies
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Nav.Link className="linkItems">
          <NavLink
            className="linkItems"
            activeClassName="active"
            to="/projects"
          >
            Projects
          </NavLink>
        </Nav.Link>
        <Nav.Link className="linkItems">
          <NavLink className="linkItems" activeClassName="active" to="/team">
            The Team
          </NavLink>
        </Nav.Link>
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
