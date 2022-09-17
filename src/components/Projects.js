import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import styled from 'styled-components';
import '../App.css';
import bg7 from '../assets/background-17.jpg';
import { Zoom } from 'react-reveal';
import { CardColumns, CardGroup, Card } from 'react-bootstrap';
import { Container, Col } from "react-bootstrap";
import Scrollchor from 'react-scrollchor';

import { keyframes } from "styled-components";

import {
  GiGamepad
} from "react-icons/gi";

const changeFont = keyframes`

    0% {
      text-transform: capitalize;
    }

    .5% {
      // text-transform: lowercase;
    }

    .7% {
    }
`;

const changeSize = keyframes`

  // 0% {
  //   transform: scaleX(-1);
  // }

  // .1% {

  //   transform: scaleX(1);

  // }

`;

const changeBackground = keyframes`

  0% {

    background-position: 0% 0%;

  }

  100% {

    background-position: 75% 75%;

  }

`;

const Styles = styled.div`

article {

  font-weight: bold;
  // height: 100%;
  width: 100%;
}

article::before {
  // overflow: hidden;
  animation: ${changeBackground} 20s ease-in-out infinite alternate;
  background: url("${bg7}");
  background-size: cover;
  // background-position: 50% 25%;
  // background-color: white;
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

// padding-bottom: 20%;

}

h2 {
  color: white; 
}

h3 {
  color: white;
  animation: ${changeFont} 2s steps(1) infinite alternate;
}

h4 {
  color: white; 
  animation: ${changeFont} 6s steps(1) infinite alternate;
}

h5 {
  color: white; 
  animation: ${changeFont} 10s steps(1) infinite alternate;
}

.div1 {
  animation: ${changeSize} 4s steps(1) infinite;
}

.div2 {
  animation: ${changeSize} 6s steps(1) infinite;
}

.div3 {
  animation: ${changeSize} 8s steps(1) infinite;
}

.div4 {
  animation: ${changeSize} 10s steps(1) infinite;
}

.div5 {
  animation: ${changeSize} 12s steps(1) infinite;
}

.div6 {
  animation: ${changeSize} 14s steps(1) infinite;
}

.div7 {
  animation: ${changeSize} 14s steps(1) infinite;
}

.div8 {
  animation: ${changeSize} 14s steps(1) infinite;
}

.div9 {
  animation: ${changeSize} 14s steps(1) infinite;
}

.div10 {
  animation: ${changeSize} 14s steps(1) infinite;
}

.div11 {
  animation: ${changeSize} 14s steps(1) infinite;
}

`;

const styles = {

  container: {

    // height: '100%',
    // width: '100%',

  },

  card: {

    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, .2)',
  },

  body: {


  },

  text: {
    textAlign: 'center'
  },

  arrow: {
    margin: 'auto',
  },

  arrowContainer: {
    height: '150px'
  },

  col: {
    margin: 'auto',
  }

};

const StyledCard = styled(Card)`

color: black;
font-size: 1rem;

`;

const StyledScrollchor = styled(Scrollchor)`

text-decoration: none;
text-align: = center; 
height: 100%;

&:focus, &:visited, &:link, &:active {
    text-decoration: none;
    color: #FFF;
}

&:hover {
    color: #111;
}
`;

export const Projects = () => (
  // Render a Thumbnail component
  <Styles>
    <article id="projects">
      <Container style={styles.container}>
        <CardGroup>
          <Card.Title className="mx-auto"><h1>Projects</h1></Card.Title>
          <CardColumns>
            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <Thumbnail
                        icon={<GiGamepad size="50px" />}
                        title="Work Shifts Automation"
                        category="SD + MM + HCM"
                        technology="ABAP"
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>

            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div2">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Custom SAP Transport Management System"
                          category="ABAP"
                          technology="Web Dynpro ABAP"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>

            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div3">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Dashboard Progress Reports"
                          category="SD"
                          technology="ABAP"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>

            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div4">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="OpenText Invoice Approval App"
                          category="VIM"
                          technology="ABAP + Fiori"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div5">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="ECC OpenText xECM Data Exchange"
                          category="OpenText xECM"
                          technology="ABAP"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div6">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="SAP ArchiveLink Invoice Archiving"
                          category="SD"
                          technology="ABAP"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>

            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div7">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Production Planning - UK + US"
                          category="PP + MM + SD + FI"
                          technology="ABAP"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>

            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div8">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Bank Transfer Files Automation - UK"
                          category="FI"
                          technology="ABAP + DMEE"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Zoom>
            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div9">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Live Invoice Reporting - Chile"
                          category="SD + FI"
                          technology="ABAP + Web Services"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div10">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Make Tax Digital - Tax Return - UK"
                          category="FI"
                          technology="ABAP + Web Services"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
            <Zoom top cascade>
              <Col>
                <Card style={styles.card}>
                  <Card.Body styles={styles.body}>
                    <Card.Text style={styles.text}>
                      <div className="div11">
                        <Thumbnail
                          icon={<GiGamepad size="50px" />}
                          title="Logistics Planning - UK + US"
                          category="SD + MM"
                          technology="ABAP"
                        />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          </CardColumns>
          {/* <div style={styles.arrow}>
            <StyledScrollchor to="contact" animate={{ offset: -70, duration: 100 }}>
              <Container style={styles.arrowContainer}>
                <ArrowScroll />
              </Container>
            </StyledScrollchor>
          </div> */}
        </CardGroup>
      </Container>
    </article>
  </Styles >
)

export default Projects;