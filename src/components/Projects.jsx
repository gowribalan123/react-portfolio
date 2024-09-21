import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <Container id="projects" >
      <br />
      <h2>Projects</h2>
<br />
      <Row>
        <Col>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="kerala.jpeg" height={150}/>
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
       <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="profilecard.jpeg" height={150}/>
      <Card.Body>
        <Card.Title>Profile Card</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body  >
        <Card.Link href="https://gowribalan123.github.io/ProfileCard/" >Profile Card</Card.Link>
        
      </Card.Body>
    </Card>
       </Col>
       <Col>
       <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="entri.jpeg" height={150}/>
      <Card.Body>
        <Card.Title>Entri Academia</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/EntriAcademia/">Entri Academia</Card.Link>
        
      </Card.Body>
    </Card>

       </Col>

      </Row>
    </Container>
  );
};

export default Projects;
