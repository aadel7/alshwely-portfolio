import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";



const Styles = styled.div`

article {

    color: white;
    background-color: black;
    text-align: right;

  }

  article::before {
    background: black;
    background-size: cover;
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%; 
    opacity: 1; 
    content: "";
    
  }


`;


export const NavigationBarBottom = () => (
    <Styles>
        <article id="navbarbottom">
            <Navbar className="copyright">
                © 2021 Ali Al Shwely - Made by me from scratch :)
            </Navbar>
        </article>
    </Styles>
)

export default NavigationBarBottom;