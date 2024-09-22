import React from 'react';
import { Nav,Button} from 'react-bootstrap';

 
const Header = () => {
  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary text-light "> 
    <div className="container bg-dark   ">
      <a className="navbar-brand text-light " href="#">
        Gowri Balan
      <img
              src="vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top "
              alt="Profile logo" 
              
            />
      </a>
      <Button
        className="navbar-toggler bg-light"
        type="button" 
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </Button>
      <div className="collapse navbar-collapse justify-content-end  " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light " href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
  
  );
}

export default Header;
