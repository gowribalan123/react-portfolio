import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#69f094', color: 'black', textAlign: 'center', padding: '20px 0' }}>
      <Container id="footer">
        <Row>
          <Col>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Gowri. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;