
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
    color:#adb1b8;
    &:hover {
        color: white;
    }
    }
`

const NaviBar= () => {
    return (
     <>
      <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand>Sample react-bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/about'>About Us</Link></Nav.Link>
                    <Nav.Link><Link to='/contacts'>Contacts</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant='primary' className='mr-2'>Log in</Button>
                    <Button variant='primary'>Sign out</Button>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
     </>
    )
}

export default NaviBar;