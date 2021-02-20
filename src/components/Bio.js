import "./Bio.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import React from "react";
import Row from "react-bootstrap/Row";
import github from "../assets/github-icon.png";
import linkedin from "../assets/linkedin-icon.png";

const Bio = (props) => {
  return (
    <>
      <Container className="bio">
        <Row className="justify-content-xs-center">
          <Col xs={3} style={{
            display: "flex",
            alignItems: "center",
          }}>
            <Container style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <Image style={{ maxWidth: 128, }} src={props.person.profilePicture} roundedCircle />
            </Container>
          </Col>
          <Col xs={4} style={{
            paddingTop: 25,
            paddingBottom: 25
          }}>
            <Container>
              <h2>{props.person.name}</h2>
              <p style={{
                paddingTop: 10,
                paddingBottom: 25
              }}>{props.person.description}</p>
            </Container>
            <Container style={{
              display: "flex",
              alignItems: "center"
            }}>
              <a href={props.person.github}><Image src={github} style={{ maxWidth: 32, marginRight: 10 }} /></a>
              <a href={props.person.linkedin}><Image src={linkedin} style={{ maxWidth: 32 }} /></a>
            </Container>
          </Col>
          <Col xs={5} style={{
            display: "flex",
            alignItems: "center",
          }}>
            <Container style={{
              display: "flex",
              alignItems: "center",
            }}>
              <Image src={props.person.sideImage} rounded />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Bio;