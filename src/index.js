import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// NAVIGATION
import Navigation from "./components/Navigation";
import StaticNavigation from "./components/StaticNavigation";
// PAGES
import Home from "./pages/Home/HomePage";
import Team from "./pages/TheTeam/TheTeamPage";
import Contact from "./pages/Contact/ContactPage";
import Projects from "./pages/Projects/ProjectsPage";

import "./index.css";
import { Container } from "react-bootstrap";

const App = () => {
  const location = useLocation();
  const navigation =
    location.pathname === "/" || location.pathname === "/projects" ? (
      <Navigation />
    ) : (
      <StaticNavigation />
    );
  return (
    <>
      {navigation}
      <Container className="pnone" fluid>
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <div>
          <Footer />
        </div>
      </Container>
    </>
  );
};

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
