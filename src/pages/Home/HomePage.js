import "./HomePage.css";

import React, { Fragment } from "react";

import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

const HomePage = () => (
  <>
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Jumbotron className="bgColorWhite" fluid>
            <Container>
              <h1>Bespoke Software Development</h1>
              <p className="ptop">
              We partner with a fantastic variety of clients. Using cutting edge technology, specialist skills and a passion for success, we produce software experiences that look great and deliver on their goals.
              </p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    <Container className="pt-5">
      <Row>
        <Col>
          <Jumbotron className="bgColorWhite" fluid>
            <Container>
              <h1>Introduction</h1>
              <p className="ptop">
              Balu Technologies is a team of award winning designers and software engineers. We work with startups, scaleups and multinational corporates to design, develop and deploy mission-led projects.
              </p>
            </Container>
          </Jumbotron>
        </Col>
        <Col>
          <Image src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4178&q=80" rounded />
        </Col>
      </Row>
    </Container>
    <Container className="pt-5">
      <Row>
        <Col>
          <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80" rounded />
        </Col>
        <Col>
          <Jumbotron className="bgColorWhite" fluid>
            <Container>
              <h1>Our People</h1>
              <p className="ptop">
              We're a purpose-focused team that works hand-in-hand with our clients to bring their mission to life. We believe small, focused teams can deliver exceptional results, and deliver all our projects with our awesome permanent in-house staff.
              </p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </>
);

export default HomePage;
