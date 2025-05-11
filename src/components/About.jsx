import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="my-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col md={10} className="mx-auto">
          <p className="lead">
            Welcome to my portfolio! I'm Gowri, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
          </p>
       
        </Col>
      </Row>
    </Container>
  );
};

export default About;
