import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Projects from "./pages/Projects/ProjectsPage";

import "./index.css";

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
    </div>
    <Footer />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
