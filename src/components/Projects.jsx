import React from 'react';
import { Container, Row, Col, Card ,Image} from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects">
      <h2>Projects</h2>

      <Row>
        <Col>
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="kerala.jpeg" />
      <Card.Body>
        <Card.Title>Kerala Tourism</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/KeralaTourismNew/">Kerala Tourism</Card.Link>
        
      </Card.Body>
    </Card>
        

       </Col>

       <Col>
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="kerala.jpeg" />
      <Card.Body>
        <Card.Title>Kerala Tourism</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/KeralaTourismNew/">Kerala Tourism</Card.Link>
        
      </Card.Body>
    </Card>
        

       </Col>
       <Col>
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="kerala.jpeg" />
      <Card.Body>
        <Card.Title>Kerala Tourism</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/KeralaTourismNew/">Kerala Tourism</Card.Link>
        
      </Card.Body>
    </Card>
        

       </Col>

      </Row>
    </Container>
  );
};

export default Projects;
