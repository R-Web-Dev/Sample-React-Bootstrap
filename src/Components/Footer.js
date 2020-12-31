import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
                <Container style={{display: 'flex', justifyContent: 'center', padding: '5px'}}>
                    <p>Sample react-bootstrap</p>
                </Container>
                <div style={{display: 'flex', paddingBottom: '10px', justifyContent: 'center'}}>
                    <div style={{padding: '5px'}}><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></div>
                    <div style={{padding: '5px'}}><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></div>
                    <div style={{padding: '5px'}}><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    </div>
            </Container>
        </>
    );
}

export default Footer;