import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// NAVIGATION
import Navigation from "./components/Navigation";
// PAGES
import Home from "./pages/Home/HomePage";
import Team from "./pages/TheTeam/TheTeamPage";
import Contact from "./pages/Contact/ContactPage";
import Projects from "./pages/Projects/ProjectsPage";
import Tech from "./pages/Technology/TechnologyPage";

import "./index.css";
import { Container } from "react-bootstrap";

const App = () => (
  <>
    <Navigation />
    <Container className="pnone" fluid>
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/team" component={Team} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/tech" component={Tech} />

      <div>
        <Footer />
      </div>
    </Container>
  </>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
