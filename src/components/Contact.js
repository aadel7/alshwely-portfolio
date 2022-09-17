import React from "react"
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { CardColumns, CardGroup, Card } from 'react-bootstrap';
import { Container, Col } from "react-bootstrap";


const Styles = styled.div`


article {

  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;

}

article::before {
  background: linear-gradient(74deg, rgba(0,0,0,1) 18%, rgba(110,94,117,1) 100%);
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


p {

  color: black;
  text-align: center;

}

`;

const StyledIcon = styled(FaLinkedin)`

color: white;

&:hover {
    color: #905ACD;
}
`;

const StyledIcon2 = styled(AiFillMessage)`

color: white;

&:hover {
    color: #905ACD;
}
`;

const styles = {

  card: {

    color: 'white',
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
  },

  body: {


  },

  text: {
    textAlign: 'center'
  },

  col: {
    height: '100%',
    width: '100%',
  }

};

export const Contact = () => (
  <Styles>
    <article id="contact">
      <h1>Let's Connect</h1>
      <br />
      <br />
      <br />
      <Container style={styles.container}>

        <h2>Give me a <keyword>shout</keyword>.
        Feel free to drop me a line through LinkedIN or by email.<br />
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardGroup>
          <CardColumns className="mx-auto">
            <Col style={styles.col}>
              <Card className="mx-auto" style={styles.card}>
                <Card.Title className="mx-auto"><h3>LinkedIN</h3></Card.Title>
                <a href="http://www.linkedin.com/in/ali-al-shwely/"> <StyledIcon size='6em' /> </a>
              </Card>
              <Card className="mx-auto" style={styles.card}>
                <Card.Title className="mx-auto"><h3>E-Mail</h3></Card.Title>
                <a href="mailto:info@alshwely.com"> <StyledIcon2 size='5em' /> </a>
              </Card>
            </Col>
          </CardColumns>
        </CardGroup>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </article>
  </Styles>
)

export default Contact;