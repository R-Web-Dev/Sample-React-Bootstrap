
import React, {useState} from 'react';
import { Navbar, Nav, Button, Container, Form, Modal } from 'react-bootstrap';
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

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Button variant='primary' className='mr-2' onClick={handleShow}>Log in</Button>
                    <Button variant='primary' onClick={handleShow}>Sign out</Button>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                <Modal.Title>
                    Log in
                </Modal.Title>
                <Modal.Body>
                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text className="text-muted">We`ll never share your email</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter email'/>
                        </Form.Group>
                        <Form.Group controlId='fromBasicCheckbox'>
                            <Form.Check type='checkbox' label='Remember me'/>
                        </Form.Group>
                </Modal.Body>
            </Modal.Header>
      </Modal>
     </>
    );
}

export default NaviBar;