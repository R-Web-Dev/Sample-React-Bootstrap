
import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../home.jpg';


const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{height: '600px'}}>
                    <img
                        className='d-block w-100'
                        src={home}
                        alt='First slider'
                    />
                    <Carousel.Caption>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: '600px'}}>
                    <img
                        className='d-block w-100'
                        src={home}
                        alt='Second slider'
                    />
                    <Carousel.Caption>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: '600px'}}>
                    <img
                        className='d-block w-100'
                        src={home}
                        alt='Third slider'
                    />
                    <Carousel.Caption>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Slider;