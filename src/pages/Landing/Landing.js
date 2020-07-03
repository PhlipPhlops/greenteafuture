import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Landing.scss';

function Landing() {

    return (
        <Container className='fill-window Landing'>
            <Col>
                <h1 className='title-text'>
                    greentea
                </h1>
                <input type='submit' value='Submit'/>
            </Col>
        </Container>
    )
}

export default Landing;