import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Slider from './Slider';
import home from '../home.jpg';



const Home = () => {
    return (
       <>
            <Slider />
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={home}/>
                            <Card.Body>
                                <Card.Title>
                                    Sample bootstrap
                                </Card.Title>
                                <Card.Text>Lorem ipsum dolor amet</Card.Text>
                                <Button variant='primary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={home}/>
                            <Card.Body>
                                <Card.Title>
                                    Sample bootstrap
                                </Card.Title>
                                <Card.Text>Lorem ipsum dolor amet</Card.Text>
                                <Button variant='primary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={home}/>
                            <Card.Body>
                                <Card.Title>
                                    Sample bootstrap
                                </Card.Title>
                                <Card.Text>Lorem ipsum dolor amet</Card.Text>
                                <Button variant='primary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
       </>
    );
}

export default Home;