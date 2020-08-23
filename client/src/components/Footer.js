import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import ScrollUpButton from "react-scroll-up-button";

const Footer = () => {
  return (
    <div>
      <Nav className='justify-content-center' activeKey='/home'>
        <Nav.Item>
          <Navbar.Brand href='#home'>
            <img
              className='nav-logo'
              src='/assets/images/logo-nobg.png'
              alt='ultra demolition logo'
            />
          </Navbar.Brand>
        </Nav.Item>
        <div className='footer-container'>
          <Navbar.Text>
            <ul>
              <li>
                <a href='mailto:ultrademolitiontx@gmail.com'>
                  <i className='fab fa-google'></i>
                </a>
              </li>
              <li>
                <a href='tel:409-812-6292'>
                  <i className='fas fa-phone'></i>
                </a>
              </li>
              <li>
                <a href='https://facebook.com/ultrademolition'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
            </ul>
          </Navbar.Text>
          <Navbar.Text></Navbar.Text>
        </div>
      </Nav>
      <h3 className='text-center mt-4 mb-4'>Xavier Chavarria – June Jones</h3>
      <h4 className='text-center justify-content-center'>Owner & Operator</h4>
      <Nav className='text-center justify-content-center'>
        <Nav.Item>
          <Navbar.Text>
            <ul>
              <li>
                <h5>409-812-6292</h5>
              </li>
              <li>
                <h5>409-504-2241</h5>
              </li>
            </ul>
          </Navbar.Text>
        </Nav.Item>

        <ScrollUpButton />
      </Nav>
    </div>
  );
};

export default Footer;
