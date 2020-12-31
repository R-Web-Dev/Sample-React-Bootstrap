import react from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import home from '../home.jpg';
import styled from 'styled-components';

const Styles = styled.div `
    .jumbo {
        background: url(${home}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
                <Container>
                    <h1>sample react-bootstrap</h1>
                    <p>
                        Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla. Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla. Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla. Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla.Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla. Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla. Lorem ipsum dolor amet. Lorem ipsum dolor 
                        amet non commodo nulla
                    </p>
                </Container>
            
        </Jumbo>
        </Styles>
    );
}

export default Jumbotron;

