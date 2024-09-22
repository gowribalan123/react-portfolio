import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <Container id="footer">
        <Row>
          <Col>
          
        
            <p>© {new Date().getFullYear()} Gowri . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
