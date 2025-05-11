import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="my-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col md={8} className="mx-auto">
          <p className="lead">
            Welcome to my portfolio! I'm Gowri, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
          </p>
          <h4>Technologies I Use:</h4>
          <ul className="list-bullet">
            <li>C, C++, Java</li>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Redux</li>
            <li>Node.js, Express</li>
            <li>MongoDB, SQL</li>
            <li>Bootstrap, Tailwind CSS</li>
          </ul>
          <p className="mt-4">
            Fun Fact: I love exploring new technologies and continuously learning to improve my skills!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
