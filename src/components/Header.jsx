import React from 'react';
import { Nav,Button} from 'react-bootstrap';

 
const Header = () => {
  return (
    <Nav class="navbar navbar-expand-lg bg-body-tertiary text-light "> 
    <div class="container bg-dark   ">
      <a class="navbar-brand text-light " href="#">
        Gowri Balan
      <img src="vite.svg" width="30" height="30" class="d-inline-block align-top " alt="Profile logo" />
      </a>
      <Button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </Button>
      <div class="collapse navbar-collapse justify-content-end  " id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light " href="#contact">
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
