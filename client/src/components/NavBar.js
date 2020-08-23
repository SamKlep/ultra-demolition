import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar id='navBar' expand='lg'>
        <Link to='/'>
          <Navbar.Brand to='/'>
            <img
              className='nav-logo'
              src='/assets/images/logo-nobg.png'
              alt='ultra demolition logo'
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='nav-link' to='/'>
              <Link to='/'>Home</Link>
            </Nav.Link>

            <Nav.Link to='/about'>
              <Link to='/about'>About</Link>
            </Nav.Link>

            <Nav.Link to='/services'>
              <Link to='/services'>Services</Link>
            </Nav.Link>

            <Nav.Link to='/contact'>
              <Link to='/contact'>Contact </Link>
            </Nav.Link>
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
