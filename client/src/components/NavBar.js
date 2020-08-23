import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar id='navBar' expand='lg'>
        <Navbar.Brand href='/'>
          <img
            className='nav-logo'
            src='/assets/images/logo-nobg.png'
            alt='ultra demolition logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='nav-link' href='/'>
              Home
            </Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>

            <Nav.Link href='/services'>Services</Nav.Link>

            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <p className=''>
              <Link to='/contact'>
                <Button variant='primary' size='small'>
                  Get a free Quote!
                </Button>
              </Link>
            </p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
