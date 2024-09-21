import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact">
      <Row>
        <Col>
        <h2>Contact Me</h2>  
        <p>Email: gowribalan@example.com
          <br />
        Phone no : 0480-2345676</p> 
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;