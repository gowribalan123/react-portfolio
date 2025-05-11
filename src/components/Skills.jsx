import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <div>
          <Container id="skills" >
      <br />
       <h2>Skills</h2>
      <Row>
        <Col >
 
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
    </div>
  )
}

export default Skills