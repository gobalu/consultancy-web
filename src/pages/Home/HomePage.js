import "./HomePage.css";

import React, { Fragment } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const HomePage = () => (
  <>
    <Col className="pnone">
      <Jumbotron className="bgLightGrey" fluid>
        <Container className="bgLightGrey">
          <Row>
            <Col className="pnone" sm={2}>
              <Image
                className="center"
                src="https://rocketmakers-cosmos-api.herokuapp.com/upload/340d2e8e-9c5a-429b-a1ce-ddf857de8bf7"
                roundedCircle
              />
            </Col>
            <Col sm={8}>
              <Jumbotron className="bgLightGrey" fluid>
                <Container>
                  <h1 className="white">Bespoke Software Development</h1>
                  <p className="white ptop">
                    We partner with a fantastic variety of clients. Using
                    cutting edge technology, specialist skills and a passion for
                    success, we produce software experiences that look great and
                    deliver on their goals.
                  </p>
                  <Button className="buttonBespoke" variant="light">
                    Projects
                  </Button>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Col>

    <Container>
      <Row>
        <Col>
          <Jumbotron className="bgColorWhite" fluid>
            <Container>
              <h1>Introduction</h1>
              <p className="ptop">
                Balu Technologies is a team of award winning designers and
                software engineers. We work with startups, scaleups and
                multinational corporates to design, develop and deploy
                mission-led projects.
              </p>
              <Button className="buttonBespoke" variant="dark">
                Tech
              </Button>
            </Container>
          </Jumbotron>
        </Col>
        <Col>
          <Image
            src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4178&q=80"
            rounded
          />
        </Col>
      </Row>
    </Container>
    <Container className="py-5">
      <Row>
        <Col>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80"
            rounded
          />
        </Col>
        <Col>
          <Jumbotron className="bgColorWhite" fluid>
            <Container>
              <h1>Our People</h1>
              <p className="ptop">
                We're a purpose-focused team that works hand-in-hand with our
                clients to bring their mission to life. We believe small,
                focused teams can deliver exceptional results, and deliver all
                our projects with our awesome permanent in-house staff.
              </p>
              <Button className="buttonBespoke" variant="dark">
                People
              </Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </>
);

export default HomePage;
