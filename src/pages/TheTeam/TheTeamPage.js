import React, { Fragment } from "react";

import Bio from '../../components/Bio/Bio';
import profiles from "../../assets/profiles";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from "react-bootstrap/Image";
import CodeReview from "../../assets/codereview.svg";

import "./TeamPage.css";

const bios = profiles.map((profile) => <Bio person={profile} />);

const TheTeamPage = () => {
  return (
    <>
      <Container style={{ paddingTop: "180px" }}>
        <Row>
          <Col sm={4}>
            <Container>
              <Image src={CodeReview} rounded />
            </Container>
          </Col>
          <Col sm={8}>
            <Container>
              <Container>
                <h1>Who are we?</h1>
              </Container>
              <Container style={{ paddingTop: "1rem" }}>
                We're a purpose-focused team that works hand-in-hand with our
                clients to bring their mission to life. We believe small,
                focused teams can deliver exceptional results, and deliver all
                our projects with our awesome permanent in-house staff.
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingBottom: "100px" }}>
        <Col>
          <Row className="paddingTop">{bios}</Row>
        </Col>
      </Container>
    </>
  );
};

export default TheTeamPage;
