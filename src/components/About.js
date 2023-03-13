import React from "react"
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Scrollchor from 'react-scrollchor';
import ArrowScroll from './ArrowScroll.js';
import { CardColumns, Card, Col, Row } from 'react-bootstrap';

const Styles = styled.div`

article {

  padding-top: 5%;
  color: grey;
  width: inherit;
  height: 150%;
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
}

h1 {
  color: black;

}

h4 {

  text-align: center;
  line-height: 150%;;

}

p {
  color: black;
  text-align: justify;
}

.btn {

font-family: "Bungee";
font-size: 20px;

&:hover {

font-family: "Bungee";
// text-decoration-line: line-through;

}

  }

`;

const styles = {

  button: {

    minWidth: '120px',
    minHeight: '50px',
    fontSize: '20px',
    fontFamily: 'Bungee',

  },

  card: {

    width: '90%',
    height: '100%',
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, .2)',
    paddingTop: '10px',
    paddingBottom: '10px',

  },

  body: {
    height: 'inherit',

  },

  text: {
    height: 'inherit',
  },

  columns: {

    display: 'flex',
    height: 'inherit',

  },

  container: {
    height: 'inherit',
  },

  row: {

    height: 'inherit',

  }

};

const StyledButton = styled(Button)`

}

`;

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

export const About = () => (

  <Styles>
    <article id="about">
      <CardColumns className="mx-auto" style={styles.columns}>
        <Col>
          <Card className="mx-auto" style={styles.card}>
            <h1>About </h1>
            <br />
            <br />
            <h4>
              Toronto-based <keyword>SAP Software Engineer</keyword>. <br />
              Enjoying world wide web since 2000.<br />
              Focused on innovation, quality and user experience.
            </h4>
            <br />
            <br />
          </Card>
        </Col>
      </CardColumns>
      <br />
      <br />
      <br />
      <Row styles={styles.row}>
        <StyledScrollchor className="mx-auto" to="bio" animate={{ offset: -70, duration: 100 }}>
          <ArrowScroll />
        </StyledScrollchor>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
    </article>
  </Styles>
)
export default About;
