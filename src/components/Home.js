import { Row, Col } from "react-bootstrap";
import React from "react"
import styled from 'styled-components';
import FullHeight from "react-full-height";
import { Fade, Zoom } from 'react-reveal';

import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import Intro from './Intro.js';
import Bio from './Bio.js';
import Skills from './Skills.js';
import Layout from './Layout.js';
import NavigationBarBottom from './NavigationBarBottom.js';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`

.row {

  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  
}

.col {

  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  margin-top: 0px;
  
}

`;



export const Home = () => (

  <Layout>

    <Zoom>
      <Row className="row">
        <Col className="col">
          <Intro />
        </Col>
      </Row>
    </Zoom>

    <Fade>
      <Row className="row">
        <Col className="col">
          <About />
        </Col>
      </Row>
    </Fade>

    <Fade>
      <Row className="row">
        <Col className="col">
          <Zoom top cascade>
            <Bio />
          </Zoom>
        </Col>
      </Row>
    </Fade>

    <Fade>
      <Row className="row">
        <Col className="col">
          <Zoom top cascade>
            <Skills />
          </Zoom>
        </Col>
      </Row>
    </Fade>

    <Fade>
      <Row className="row">
        <Col className="col">
          <Zoom top cascade>
            <Projects />
          </Zoom>
        </Col>
      </Row>
    </Fade>

    <Fade>
      <Row className="row">
        <Col className="col">
          <Contact />
        </Col>
      </Row>
    </Fade>
    
    <Row className="row">
      <Col className="col">
        <NavigationBarBottom />
      </Col>
    </Row>
  </Layout>

)

export default Home;