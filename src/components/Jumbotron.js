import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/background.jpg';

const Styles = styled.div`

    .jumbo {
        background: url("${background}");
        background-size: cover;
        color: #cccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #0000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Ali Al Shwely - Portfolio </h1>
                <p>Lets write something to engage your ass</p>
            </Container>
        </Jumbo>
    </Styles>
)