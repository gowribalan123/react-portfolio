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
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="kerala.jpeg" height={100}/>
      <Card.Body>
        <Card.Title>Kerala Tourism</Card.Title>
        <Card.Text>
         Skills used :-
         HTML5 , Javascript , CSS3 , Bootstrap5 ,  Git
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/KeralaTourismNew/">Kerala Tourism</Card.Link>
        
      </Card.Body>
    </Card>
        

       </Col>

       <Col>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="profilecard.jpeg" height={100}/>
      <Card.Body>
        <Card.Title>Profile Card</Card.Title>
        <Card.Text>
        Skills used :-
        HTML5 , Javascript , CSS3 , Bootstrap5 ,  Git
        </Card.Text>
      </Card.Body>
      
      <Card.Body  >
        <Card.Link href="https://gowribalan123.github.io/ProfileCard/" >Profile Card</Card.Link>
        
      </Card.Body>
    </Card>
       </Col>
       <Col>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="entri.jpeg" height={100}/>
      <Card.Body>
        <Card.Title>Entri Academia</Card.Title>
        <Card.Text>
        Skills used :-
        HTML5 , Javascript , CSS3 , Bootstrap5 , Git
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/EntriAcademia/">Entri Academia</Card.Link>
        
      </Card.Body>
    </Card>

       </Col>

     

      </Row>
      <br />
     < Row>
     <Col>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="inquire mart.jpeg" height={100}/>
      <Card.Body>
        <Card.Title>Inquire Mart</Card.Title>
        <Card.Text>
        Skills used :-
        HTML5 , Javascript , CSS3 , Bootstrap5 , React.js , Express.js , Node.js , Git
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/react-productinquiryform/">Inquire Mart</Card.Link>
        
      </Card.Body>
    </Card>

       </Col>


       <Col>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="weather dashboard.jpeg" height={100}/>
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
        Skills used :-
        HTML5 , Javascript , CSS3 , Bootstrap5  , React.js , Node.js , Git
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://gowribalan123.github.io/react-weather-dashboard/">Weather Dashboard</Card.Link>
        
      </Card.Body>
    </Card>

       </Col>
       
     </Row>

    </Container>
  );
};

export default Projects;
