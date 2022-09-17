import React from "react"
import styled from 'styled-components';
import bg7 from '../assets/background-8.jpg';
import { CardColumns, Card } from 'react-bootstrap';
import { Zoom } from 'react-reveal';



const Styles = styled.div`

article {
  // position: relative;
  // font-family: "Montserrat";
  // font-family: "Press Start 2P";
  // font-family: 'Aldrich';
  padding-top: 20%;
  // text-align: center;
  color: grey;
}

article::before {
  background: url("${bg7}");
  // background-color: black;
  background-size: cover;
  // background-position: center;
  // background-position: 80% 20%;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%; 
  opacity: .7; 
  content: "";
  z-index: -2;
  // filter: grayscale(100%);
}

h1 {
  color: black;

}

// p {
//   color: white;
//   text-align: justify;
// }

name {

  color: #F0A1F3;
  font-size: 3rem;
  } 

`;

const StyledCard = styled(Card)`

color: black;
// font-size: 1rem;
text-align: justify;

`;

const styles = {

  group: {

  },

  columns: {

    display: 'flex',

  },

  card: {

    width: '50%',
    height: '50%',
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, .2)',
    

  },

  body: {

  },

  text: {

  }

};


export const SubIntro = () => (

  <Styles>
    <div className="top"></div>
    <article>
      <Zoom top cascade>
        <CardColumns className="mx-auto" style={styles.columns}>
            <Card className="mx-auto" style={styles.card}>
              <Card.Body className="mx-auto" style={styles.body}>
                <Card.Text className="mx-auto" style={styles.text}>
                  <h2>
                    Hello there! I'm <name>Ali Al Shwely</name>.
                    I'm a SAP engineer.
                  </h2>
                </Card.Text>
              </Card.Body>
            </Card>
        </CardColumns>
      </Zoom>
    </article>
  </Styles>

)

export default SubIntro;