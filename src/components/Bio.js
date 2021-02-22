import "./Bio.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import React from "react";
import Row from "react-bootstrap/Row";
import github from "../assets/github-icon.png";
import linkedin from "../assets/linkedin-icon.png";
import strava from "../assets/strava-icon.png";

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
              <img style={styles.bioProfile} src={props.person.profilePicture} />
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
              <a href={props.person.github}><Image src={github} style={styles.bioLinks} /></a>
              <a href={props.person.linkedin}><Image src={linkedin} style={styles.bioLinks} /></a>
              {props.person.strava && <a href={props.person.strava}><Image src={strava} style={styles.bioLinks} /></a>}
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

const styles = {
  bioLinks: {
    maxWidth: 24,
    marginLeft: 8,
    marginRight: 8
  },
  bioProfile: {
    maxWidth: 128,
    borderRadius: 64,
  }
}

export default Bio;