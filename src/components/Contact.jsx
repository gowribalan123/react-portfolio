import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" style={{ margin: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>Get in Touch</Card.Title>
              <Card.Text>
                <p>Email: <a href="mailto:gowribalan@example.com">gowribalanak@gmail.com</a></p>
                <p>Phone: <a href="tel:+918943153347">91-8943153347</a></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
