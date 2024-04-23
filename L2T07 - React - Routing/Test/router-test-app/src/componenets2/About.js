import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About</h1>
          <p>Add content for about page</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Figure>
            <Figure.Image
              width={200}
              height={200}
              alt="Store Logo"
              src="https://via.placeholder.com/200"
            />
            <Figure.Caption>Store Logo</Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Figure>
            <Figure.Image
              width={200}
              height={200}
              alt="Store Image"
              src="https://via.placeholder.com/200"
            />
            <Figure.Caption>Store Image</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure>
            <Figure.Image
              width={200}
              height={200}
              alt="Store Image"
              src="https://via.placeholder.com/200"
            />
            <Figure.Caption>Store Image</Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>Contact Us: example@example.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
