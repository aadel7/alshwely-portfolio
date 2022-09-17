import React from "react"
import styled from 'styled-components';
import { keyframes } from "styled-components"
import bg7 from '../assets/background-17.jpg';
import { CardColumns, Card } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import ArrowScroll from './ArrowScroll.js';
import Scrollchor from 'react-scrollchor';
import cube from '../assets/logo-cube-transparent.png';
import { useHover } from './Hooks.js';
import { Zoom } from 'react-reveal';
import Image from 'react-bootstrap/Image'


const startButton = keyframes`

0% {

  visibility: hidden;
  opacity: 0;

}

100% {

    visibility: visible;
    opacity: 1;

  }
`;

const changeFont = keyframes`

    0% {
      text-transform: capitalize;
      font-family: 'Turret Road';
    }

    .5% {
      font-family: "Libre Barcode 128";
    }

    2.5% {
      text-transform: lowercase;
      font-family: "Libre Barcode 128";
    }

    3% {
      text-transform: none;
    }

    10.5% {
      text-transform: uppercase;
      font-family: 'Turret Road';
    }

    10.6% {
      text-transform: lowercase;
      font-family: 'Turret Road';
    }

    18.5% {
      text-transform: capitalize;
      font-family: 'Turret Road';
    }
`;

const changeSize = keyframes`

  0.1% {
    transform: scaleX(-1);
    font-family: "Bungee Hairline";
  }

  0.2% {
    transform: scaleX(1);
    font-family: "Press Start 2P";

  }

  0.3% {
    transform: scaleX(-1);
    text-transform: lowercase;

  }

  0.4% {
    transform: scaleX(1);
    text-transform: capitalize;
    font-family: "Press Start 2P";

  }

`;

const changeBackground = keyframes`


0% {

  background-position: 0% 0%;

}

100% {

  background-position: 75% 75%;

}

`;

const scrollButton = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  `;

const Styles = styled.div`

article {
  padding-top: 20%;
  color: grey;
  width: inherit;
}

article::before {

  display: flex;
  animation: ${changeBackground} 20s ease-in-out infinite alternate;
  background: url("${bg7}");
  background-size: cover;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%; 
  opacity: 1; 
  content: "";
  z-index: -2;
}

h1 {

  animation: ${changeSize} 1s steps(1) infinite alternate;

}

h2 {
  width: 100%;
  animation: ${changeFont} 4s steps(1) infinite alternate;
  filter: blur(0px);
  color: white;
  
  
}

name {

  color: #905ACD;
  font-family: 'Press Start 2P';
  font-size: 3rem;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  
  text-align: justify;
  }


img {

  width: 180px;
  height: 180px;
  filter: grayscale(50);
  margin-left: 50%;
}

.start {

  animation: ${startButton} 1s steps(2) infinite alternate;

}

`;

const StyledCard = styled(Card)`


`;

const StyledCol = styled(Col)`

`;

const styles = {

  group: {


  },

  columns: {

    display: 'flex',


  },

  cardImage: {

    marginTop: '1rem'

  },

  cardImageOverlay: {
    display: 'flex',
    textAlign: 'right',
    width: '100%',
    height: '100%',
  },

  card: {

    display: 'flex',
    width: '100%',
    height: '160%',
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, .67)',


  },

  body: {


  },

  text: {

    textAlign: 'left',

  },

  col: {

  },

  row: {

    opacity: '1',
    height: 'inherit',
    paddingTop: '30px',


  },

  textStart: {
    paddingTop: '5%',
    fontSize: '3rem',
    fontFamily: 'VT323',
    opacity: '1',
    width: '100%',
    height: '100%',
    color: 'white',
    // filter: 'invert(38%) sepia(96%) saturate(513%) hue-rotate(228deg) brightness(90%) contrast(86%)',
    textShadow: '-1px 0 white, 0 1px black, 1px 0 black, 0 -1px white',

  },

  arrow: {
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '50px',
  },

  container: {
    height: '150px'
  }

};

const StyledScrollchor = styled(Scrollchor)`

text-decoration: none;

&:focus, &:visited, &:link, &:active {
    text-decoration: none;
    color: #FFF;
}

&:hover {
    color: #111;
}
`;

function Intro(props) {

  const [hoverRef, isHovered] = useHover();
  let nombre = 'Ali Al Shwely';

  return (

    <Styles>
      <div className="top"></div>
      <article>
        <Zoom top cascade>
          <Row style={styles.row}>
            <Col xs={8} className="mx-auto">
              <h2> Hello there! I'm</h2>
              <name> {nombre}</name>
              <h2> I'm a SAP engineer. </h2>
            </Col>
            <Col className="mx-auto"><Image src={cube} style={styles.cardImage} />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row styles={styles.row}>
            <StyledScrollchor className="mx-auto" to="about" animate={{ offset: -70, duration: 100 }}>
              <ArrowScroll />
            </StyledScrollchor>
          </Row>
        </Zoom>
        <br />
        <br />
        <br />
        <div className='start' style={styles.textStart}>
          Press Start
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* <div ref={hoverRef} style={styles.textStart}>
          {isHovered ? '' : 'Press Start'}
          <br />
        </div> */}
      </article>
    </Styles>
  );
}

export default Intro;