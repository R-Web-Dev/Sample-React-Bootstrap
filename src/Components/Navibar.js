
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NaviBar= () => {
    return (
     <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
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
        </Navbar>
     </>
    )
}

export default NaviBar;