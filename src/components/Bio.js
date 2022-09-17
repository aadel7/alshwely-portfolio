import React from "react"
import styled from 'styled-components';
import me from '../assets/me-1.jpg';


import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import ArrowScroll from './ArrowScroll.js';
import Scrollchor from 'react-scrollchor';
import { Container, Row, Col } from "react-bootstrap";

const Styles = styled.div`

article {

  padding-top: 5%

}

article::before {
  background: url("${me}");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%; 
  opacity: .8; 
  content: "";
}

h1 {
  color: black;
}

h4 {

}

`;

const styles = {

  card: {

    width: '100%',
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, .8)',

  },

  body: {

    textAlign: 'justify',
    fontSize: '20px',
    fontFamily: 'Turret Road',


  },

  text: {

  },

  arrow: {
    margin: 'auto',
    marginTop: '30px',
  },

  container: {
    height: '150px'
  },

  containerBig: {
    width: 'inherit'
  }

};

const StyledButton = styled(Button)`




`;

const StyledCard = styled(Card)`

opacity: 1;

`;



export const Bio = () => (
  <Container style={styles.containerBig}>
    <Styles>
      <article id="bio">
        <Col>
          <Card className="mx-auto" style={styles.card}>
            <h1>Full Bio</h1>
            <Card.Body className="mx-auto" style={styles.body}>
              <Card.Text className="mx-auto" styles={styles.text}>
                <h4>
                  <br />
                After completing my training as a <keyword> Software Developer </keyword> I decided to move forward in other areas as well such as Customer Experience and Sales.
                <br /> <br />
                My willingness to enrich myself made me step outside the <keyword> comfort zone </keyword> by moving to <keyword>London - UK</keyword> looking for new challenges.
                This period working in a multicultural environment changed my perception of the world and forced me to <keyword>evolve and reinvent</keyword> myself.
                <br /> <br />
                After this IT career break, an opportunity came up to work as a <keyword> SAP Consultant</keyword>, following my passion for technology I decided to take advantage of it.
                <br /> <br />
                Since then, I've worked for both small-big enterprises, <keyword> Fortune 500 </keyword> companies such as Telefonica or BASF, mostly as a <keyword> Technical Consultant</keyword>,
                in a wide variety of SAP projects across <keyword> EU, UK, US and LATAM </keyword>
                involving different SAP modules such as <keyword> FI, MM, SD, PP and VIM </keyword>.
              </h4>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Row styles={styles.row}>
            <div style={styles.arrow}>
              <Scrollchor to="skills" animate={{ offset: -70, duration: 100 }}>
                <Container style={styles.container}>
                  <ArrowScroll />
                </Container>
              </Scrollchor>
            </div>
          </Row>
        </Col>
      </article>
      <br />
      <br />
      <br />
    </Styles>
  </Container>
)
export default Bio;
