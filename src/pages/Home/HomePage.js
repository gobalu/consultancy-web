import "./HomePage.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";
import Row from "react-bootstrap/Row";
import bgimage from "./Assets/bgimage.jpg";

const HomePage = () => (
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
        <Container fluid className="centerText">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2 className="white centerText">
                Innovitive Start Up Solutions
              </h2>
            </Col>
          </Row>
          <Container className="heroText" fluid>
            <Row>
              <Col className="ptop50">
                <p>
                  We partner with a fantastic variety of clients. Using cutting
                  edge technology, specialist skills and a passion for success,
                  we produce software experiences that look great and deliver on
                  their goals.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Jumbotron>
    </Container>
    <Container fluid className="ptop125 pbottom125 paddinglr">
      <Container fluid className=" ptop125 pbottom125 boxshadow">
        <Row>
          <Col className="paddingLrInner">
            <Jumbotron className="bgColorWhite" fluid>
              <Container fluid>
                <Container fluid>
                  <h1>Us</h1>
                </Container>
                <Container fluid>
                  <p className="ptop paratext">
                    Balu Technologies is a team of award winning designers and
                    software engineers. We work with startups, scaleups and
                    multinational corporates to design, develop and deploy
                    mission-led projects.
                  </p>
                </Container>
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
    </Container>
    <Container fluid className="ptop125 pbottom125 paddinglr">
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
                <Container fluid>
                  <h1>Our People</h1>
                </Container>
                <Container fluid>
                  <p className="ptop paratext">
                    We're a purpose-focused team that works hand-in-hand with
                    our clients to bring their mission to life. We believe
                    small, focused teams can deliver exceptional results, and
                    deliver all our projects with our awesome permanent in-house
                    staff.
                  </p>
                </Container>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </Container>
  </Container>
);

export default HomePage;
