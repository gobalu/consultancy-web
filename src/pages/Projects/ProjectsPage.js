import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import bgimage from "../Home/Assets/bgimage.jpg";
import powerful from "../../assets/powerful.svg";
import businessdeal from "../../assets/businessdeal.svg";
import coffee from "../../assets/coffee.svg";

const ProjectPage = () => (
  <Container fluid style={{ padding: 0 }}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "700px" }}
          src={bgimage}
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
          style={{ height: "700px" }}
          src={bgimage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src={bgimage}
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
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col sm={4}>
          <Container>
            <Image src={coffee} rounded />
          </Container>
        </Col>
        <Col sm={8}>
          <Container>
            <h1>What is Balu?</h1>
          </Container>
          <Container>
            Balu is an application which is aiming to bring you the services you
            require effortlessly all at the few touches of a button.
          </Container>
        </Col>
      </Row>
    </Container>
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col sm={4}>
          <Container>
            <Image src={powerful} rounded />
          </Container>
        </Col>
        <Col sm={8}>
          <Container>
            <h1>Why Balu?</h1>
          </Container>
          <Container>
            Ever needed a service you were unfamiliar with and didn't want to
            sift through pages of reviews to find the services you need? no
            longer will that be an issue, with personal reviews from real users
            you can find safe, professional services with ease. <br />
            <br />
            On the other hand are you a worker without a platform to get your
            business out there? now you have a platform not just to manage your
            schedule, providing you a platform to list your business, find
            clientelle & manage the payments for you. leaving you hassle free to
            tackle the working week
          </Container>
        </Col>
      </Row>
    </Container>
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col sm={4}>
          <Container>
            <Image src={businessdeal} rounded />
          </Container>
        </Col>
        <Col sm={8}>
          <Container>
            <h1>Our hopes with Balu</h1>
          </Container>
          <Container>
            We hope to bring users and workers together with a professional,
            intuative & easy to use app to revolutionise small businesses hoping
            to get their name out there and providing users a safe, easy and
            quick way to find services they need
          </Container>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default ProjectPage;
