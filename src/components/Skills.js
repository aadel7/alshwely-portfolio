import React from "react"
import styled from 'styled-components';
import bg9 from '../assets/background-16.jpg';
import { keyframes } from "styled-components";
import Button from 'react-bootstrap/Button';
import Scrollchor from 'react-scrollchor';
import { CardColumns, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ArrowLong from './ArrowLong.js';
import { Container, Row, Col } from "react-bootstrap";

const Styles = styled.div`

article {

  padding-top: 5%;
  color: grey;
  width: inherit;
  
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

h3 {
  padding-bottom: 10px;
}

h4 {

  text-align: center;
  line-height: 150%;;

}

h6 {
  padding-bottom: 10px;
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

}

  }

`;

const styles = {

  button: {

    minWidth: '120px',
    minHeight: '50px',
    fontSize: '20px',
    fontFamily: 'Bungee',
    height: 'inherit',

  },

  card: {

    width: '100%',

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

  listGroup: {

    justifyContent: 'center',
    fontSize: '20px',
    height: 'inherit',

  },

  listItem: {

    backgroundColor: 'rgba(52, 52, 52, 1)',
    borderStyle: 'dotted',
    height: 'inherit',

  },

  divButton: {

    height: 'inherit',

  },

  divList: {

    paddingTop: '5%',

    height: 'inherit',
  },

  row: {
    height: 'inherit',

  },

  container: {
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

export const Skills = () => (

  <Styles>
    <article id="skills">
      <CardColumns className="mx-auto" style={styles.columns}>
        <Col>
          <Card className="mx-auto" style={styles.card}>
            <h1>Look What I Can Do </h1>
            <div style={styles.divList}>
              <h3>SAP SKILLS</h3>
              <h6>Working Knowledge Skills</h6>
              <ListGroup horizontal='sm' style={styles.listGroup}>
                <ListGroup.Item style={styles.listItem}>ABAP</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>Web Dynpro ABAP</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>ABAP Web Services</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>Batch Data Communication</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>SAP Script</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>Smart Forms</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>SAP DMEE</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>SAP Customizing</ListGroup.Item>
              </ListGroup>
            </div>
            <div style={styles.divList}>
              <h3>BONUS TRACK</h3>
              <ListGroup horizontal='sm' style={styles.listGroup}>
                <ListGroup.Item style={styles.listItem}>Java</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>JavaScript</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>React JS</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>HTML5</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>CSS3</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>AWS</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>PL / SQL</ListGroup.Item>
                <ListGroup.Item style={styles.listItem}>Visual Basic .NET</ListGroup.Item>
              </ListGroup>
              <StyledScrollchor to="projects" animate={{ offset: -70, duration: 100 }}>
                <ArrowLong />
              </StyledScrollchor>
            </div>
          </Card>
        </Col>
      </CardColumns>
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
export default Skills;
