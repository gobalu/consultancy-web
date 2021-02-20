import "./HomePage.css";

import React, { Fragment } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import bgimage from "./Assets/bgimage.jpg";

const HomePage = () => (
  <>
    <div className=" pbottom125">
      <Jumbotron
        className="height"
        fluid
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
        }}
      >
        <Container className="centerText">
          <h2 className="white centerText">Innovitive Start Up Solutions</h2>
          <div>
            <p className="heroText">
              We partner with a fantastic variety of clients. Using cutting edge
              technology, specialist skills and a passion for success, we
              produce software experiences that look great and deliver on their
              goals.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
    <div className="paddinglr">
      <Container fluid className=" ptop125 pbottom125 boxshadow">
        <Row>
          <Col className="paddingLrInner">
            <Jumbotron className="bgColorWhite" fluid>
              <Container fluid>
                <div>
                  <h1>Introduction</h1>
                </div>
                <div>
                  <p className="ptop paratext">
                    Balu Technologies is a team of award winning designers and
                    software engineers. We work with startups, scaleups and
                    multinational corporates to design, develop and deploy
                    mission-led projects.
                  </p>
                </div>
              </Container>
            </Jumbotron>
          </Col>

          <Col className="paddingLrInner">
            <Image
              src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4178&q=80"
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="paddinglr ptop125 pbottom125">
      <Container fluid className=" ptop125 pbottom125 boxshadow">
        <Row>
          <Col className="paddingLrInner">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80"
              rounded
            />
          </Col>
          <Col className="paddingLrInner">
            <Jumbotron className="bgColorWhite" fluid>
              <Container fluid>
                <div>
                  <h1>Our People</h1>
                </div>
                <div>
                  <p className="ptop paratext">
                    We're a purpose-focused team that works hand-in-hand with
                    our clients to bring their mission to life. We believe
                    small, focused teams can deliver exceptional results, and
                    deliver all our projects with our awesome permanent in-house
                    staff.
                  </p>
                </div>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default HomePage;
