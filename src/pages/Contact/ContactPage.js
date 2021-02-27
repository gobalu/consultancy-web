import React from "react";
import { Button, Form, Container, Row, Col, Image } from "react-bootstrap";
import Mail from "../../assets/mail.svg";
import "./ContactPage.css";

const ContactPage = () => (
  <Container style={{ paddingTop: "150px", paddingBottom: "150px" }}>
    <Row>
      <Col>
        <Form className="form">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col>
        <Image src={Mail} rounded />
      </Col>
    </Row>
  </Container>
);

export default ContactPage;
