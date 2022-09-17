// Menu.styled.js
import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import Scrollchor from 'react-scrollchor';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from "react-bootstrap";

export const StyledMenu = styled.nav`
  height: 100vh;
  width: 100%;
  text-align: left;
  position: absolute;
  top: 80px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  // background-color: black;
  background: linear-gradient(74deg, rgba(0,0,0,1) 18%, rgba(110,94,117,1) 100%);
  // justify-content: left;

  a {
    font-size: 2rem;
    padding: 2rem;
  }

  img {
    width: 10%;
    opacity: .2;
  }


`;

const StyledScrollchor = styled(Scrollchor)`

text-decoration: none;

&:focus, &:visited, &:link, &:active {
    text-decoration: none;
    color: #FFF;
}

&:hover {
    color: #F0A1F3;
    font-family: 'Bungee Hairline';
    font-size: 2rem;
    font-weight: bold;

}
`;

const StyledModal = styled(Modal.Dialog)`

height: 100%;
// width: 120%;

`;

const StyledContainer = styled(Container)`

// background: linear-gradient(74deg, rgba(0,0,0,1) 18%, rgba(110,94,117,1) 100%);
// background-size: cover;
justify-content: left;

`;

const styles = {

  button: {

    // minWidth: '120px',
    // minHeight: '50px',
    fontSize: '15px',
    fontFamily: 'Bungee',

  },

  card: {

    display: 'flex',
    // justifyContent: 'left',

  },

  container: {

    textAlign: 'left',
    // position: 'absolute',
    // backgroundColor: 'black',
    // width: '100%',
    // height: '100%',
    position: 'absolute',
    justifyContent: 'left',
    display: 'block',
    paddingTop: '40px',
  },

  body: {

    justifyContent: 'left',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    width: '100%',
    height: '100%',

  },

  columns: {

    display: 'flex',

  },

  text: {

    minWidth: '120px',
    minHeight: '50px',
    fontSize: '30px',
    fontFamily: 'IBM Plex Mono',

  },

  row: {

    paddingTop: '40px',

  }

};

export const Menu = ({ open, setOpen }) => {

  return (

    <StyledMenu open={open}>
      <Container style={styles.container}>
        <Row style={styles.row}>
          <Col>
            <StyledScrollchor to="" animate={{ offset: -70, duration: 100 }}>
              {/* <span role="img" aria-label="home">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span> */}
              <text style={styles.text} open={open} onClick={() => setOpen(!open)}> Home</text>
            </StyledScrollchor>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <StyledScrollchor to="about" animate={{ offset: -70, duration: 100 }}>
              {/* <span role="img" aria-label="about">&#x1f4b8;</span> */}
              <text style={styles.text} open={open} onClick={() => setOpen(!open)}> About</text>
            </StyledScrollchor>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <StyledScrollchor to="bio" animate={{ offset: -70, duration: 100 }}>
              {/* <span role="img" aria-label="contact">&#x1f4e9;</span> */}
              <text style={styles.text} open={open} onClick={() => setOpen(!open)}> Full Bio</text>
            </StyledScrollchor>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <StyledScrollchor to="skills" animate={{ offset: -70, duration: 100 }}>
              {/* <span role="img" aria-label="contact">&#x1f4e9;</span> */}
              <text style={styles.text} open={open} onClick={() => setOpen(!open)}> Skills</text>
            </StyledScrollchor>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <StyledScrollchor to="projects" animate={{ offset: -70, duration: 100 }}>
              {/* <span role="img" aria-label="projects">&#x1f4e9;</span> */}
              <text style={styles.text} open={open} onClick={() => setOpen(!open)}>Projects</text>
            </StyledScrollchor>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <StyledScrollchor to="contact" animate={{ offset: -70, duration: 100 }}>
              {/* <span role="img" aria-label="contact">&#x1f4e9;</span> */}
              <text style={styles.text} open={open} onClick={() => setOpen(!open)}> Contact</text>
            </StyledScrollchor>
          </Col>
        </Row>
      </Container>
    </StyledMenu >
  )
}
Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Menu;