import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// NAVIGATION
import Navigation from './components/Nav/Navigation';
import StaticNavigation from './components/StaticNav/StaticNavigation';
// PAGES
import Home from './pages/Home/Home';

import './index.scss';

const App = () => {
  const location = useLocation();
  // const navigation =
  //   location.pathname === "/" ? (
  //     <Navigation /> || location.pathname === "/tech"
  //   ) : (
  //     <StaticNavigation />
  //   );
  return (
    <>
      {/* {navigation} */}
      <div>
        <Route exact={true} path="/" component={Home} />
        {/* <Route exaxt path="/team" component={Team} /> */}
        {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/tech" component={Tech} /> */}
        <div></div>
      </div>
    </>
  );
};

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
