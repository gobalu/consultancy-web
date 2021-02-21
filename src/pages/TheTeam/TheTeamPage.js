import React, { Fragment } from "react";

import Bio from "../../components/Bio";
import profiles from "../../assets/profiles";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bgimage from "../Home/Assets/bgimage.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Programmer from "../../assets/undraw_programmer_imem.svg";
import CodeReview from "../../assets/codereview.svg";

import "./TeamPage.css";

const bios = profiles.map((profile) => <Bio person={profile} />);

const TheTeamPage = () => {
  return (
    <>
      <Container fluid className="plr0">
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
                <h2 className="white centerText">Meet the team</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
      <Container style={{ paddingTop: "100px" }}>
        <Row>
          <Col sm={4}>
            <Container>
              <Image src={Programmer} rounded />
            </Container>
          </Col>
          <Col sm={8}>
            <Container>
              <Container>
                <h1>Who are we?</h1>
              </Container>
              <Container>
                We're a purpose-focused team that works hand-in-hand with our
                clients to bring their mission to life. We believe small,
                focused teams can deliver exceptional results, and deliver all
                our projects with our awesome permanent in-house staff.
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingTop: "100px" }}>
        <Row>
          <Col sm={4}>
            <Container>
              <Image src={CodeReview} rounded />
            </Container>
          </Col>
          <Col sm={8}>
            <Container>
              <h1>Tech we use</h1>
            </Container>
            <Container>
              We use the latest proven technologies in our projects. We know
              these will deliver on the scalability, reliability, performance
              and security needs of our customers.
            </Container>
          </Col>
        </Row>
      </Container>

      <Container>
        <Col>
          <Row className="paddingTop">{bios}</Row>
        </Col>
      </Container>
    </>
  );
};

export default TheTeamPage;
