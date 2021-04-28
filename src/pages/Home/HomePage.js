import "./HomePage.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import bgimage from "./Assets/bgimage.jpg";
import { NavLink } from "react-router-dom";

const words = ["The Future", "Balu"];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <Container className="plr0" fluid>
      <Container fluid className="pbottom125 plr0">
        <Jumbotron
          className="height"
          fluid
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
          }}
        >
          <Container fluid className="align">
            <Row className="justify-content-md-center">
              <Col>
                <h1 className="animated-h1">
                  Welcome to{" "}
                  {`${words[index].substring(0, subIndex)}${blink ? "" : " "}`}
                </h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
      <div class="split-pane split-pane-copy" data-alternate="true">
        <div class="split-pane-inner">
          <div class="split-pane-left split-pane-copy-copy">
            <div class="split-pane-copy-copy-inner">
              <div class="rm-markdown">
                <h3 style={{ fontWeight: "bold" }}>Introduction</h3>
                <p>
                  Balu Technologies is a close knit team of software engineers.
                  We work with startups, scaleups and multinational corporates
                  to develop and deploy projects.
                </p>
                <NavLink
                  className="linkItems"
                  activeClassName="active"
                  to="/projects"
                >
                  <button
                    data-is-icon-button="false"
                    data-danger-level="1"
                    type="button"
                    name="Our People"
                    aria-label="Our People"
                    data-variant="brand-secondary"
                    class="btn"
                  >
                    <p>More about us</p>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="split-pane-right split-pane-copy-image">
            <span class="lazy-image-wrapper">
              <picture class="" data-loaded="true">
                <img
                  alt="home"
                  class=""
                  src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </picture>
            </span>
          </div>
        </div>
      </div>
      <div
        class="split-pane split-pane-copy ptop125 pbottom125"
        data-alternate="true"
      >
        <div class="split-pane-inner">
          <div class="split-pane-left split-pane-copy-copy">
            <div class="split-pane-copy-copy-inner">
              <div class="rm-markdown">
                <h3 style={{ fontWeight: "bold" }}>Our people</h3>
                <p>
                  We're a purpose-focused team that works hand-in-hand with our
                  clients to bring their mission to life. We believe small,
                  focused teams can deliver exceptional results, and deliver all
                  our projects with our awesome permanent in-house staff.
                </p>
                <NavLink
                  className="linkItems"
                  activeClassName="active"
                  to="/team"
                >
                  <button
                    data-is-icon-button="false"
                    data-danger-level="1"
                    type="button"
                    name="Our People"
                    aria-label="Our People"
                    data-variant="brand-secondary"
                    class="btn"
                  >
                    <p>Our People</p>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="split-pane-right split-pane-copy-image">
            <span class="lazy-image-wrapper">
              <picture class="" data-loaded="true">
                <img
                  alt="home"
                  class=""
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </picture>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
