import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar>
         <Navbar.Brand href="#home">
            <img
              src="gb.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Profile logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href='#mentor'>Mentorship</Nav.Link>
          <Button variant='outline-primary'>Say Hello</Button>
          </Nav>
    </Navbar>
  )
}

export default Navigation;