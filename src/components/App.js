import React from 'react';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import NoMatch from './NoMatch.js';
import Bio from './Bio.js';
import Skills from './Skills.js';
import NavigationBar from './NavigationBar.js';

import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll'

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MetaTags from 'react-meta-tags';

const GlobalStyle = styled.div`

div {

  font-family: 'Aldrich';

}

h1 {

  color: white;
  font-family: 'Major Mono Display';
  font-size: 4rem;
  
  }

h2 {

    font-family: 'Turret Road';
    
  }

h4 {

    font-family: 'Turret Road';
    // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    
  }

.copyright {

  font-size: 8px;
  font-family: 'Press Start 2P';
  text-align: justify;


}

a {

  font-family: 'Press Start 2P';

}

keyword {

  color: #5421DD;
  color: #B89DD6;
  color: #905ACD;
  // font-size: 2rem;
  font-family: "Days One";
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;


  } 

navigation {

padding: 2;

}

`;

const styles = {

  global: {

    width: '100%',

  },

};

const StyledLinkScroll = styled(LinkScroll)`

text-decoration: none;
text-align: = right; 

&:focus, &:visited, &:link, &:active {
    text-decoration: none;
    color: #FFF;
}

&:hover {
    color: #111;
    cursor: pointer;
}
`;

function App(props) {

  return (

    <div class="wrapper">
      <MetaTags>
        <title>Ali Al Shwely - Web</title>
        <meta id="meta-description" name="Ali Al Shwely - Personal Web Site" content="" />
        <meta id="og-title" property="og:title" content="MyApp" />
        <meta id="og-image" property="og:image" content="/assets/logo-cube-transparent_2.png" />
      </MetaTags>
      <div class="content"> Some Content </div>
    </div>,
    <GlobalStyle >
      <GoogleFontLoader
        fonts={[
          {
            font: 'Press Start 2P',
          },
          {
            font: 'Aldrich',
          },
          {
            font: 'Orbitron',
          },
          {
            font: 'VT323',
          },
          {
            font: 'Expletus Sans',
          },
          {
            font: 'Faster One',
          },
          {
            font: 'Alfa Slab One',
          },
          {
            font: 'Monoton',
          },

          {
            font: 'Bungee',
          },

          {
            font: 'Bungee Inline',
          },

          {
            font: 'Bungee Shade',
          },

          {
            font: 'Bungee Outline',
          },

          {
            font: 'Bungee Hairline',
          },

          {
            font: 'Wallpoet',
          },

          {
            font: 'Nova Square',
          },

          {
            font: 'Geo',
          },

          {
            font: 'Zilla Slab Highlight',
          },

          {
            font: 'Major Mono Display',
          },

          {
            font: 'Turret Road',
          },

          {
            font: 'Geostar Fill',
          },

          {
            font: 'Audiowide',
          },

          {
            font: 'Rubik Mono One',
          },

          {
            font: 'Days One',
          },

          {
            font: 'IBM Plex Mono',
          },

          {
            font: 'Libre Barcode 128 Text',
          },

          {
            font: 'Libre Barcode 128',
          },


        ]}
      />
      <BrowserRouter>
        <NavigationBar />
        <div className="App">
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/bio" component={Bio} />
            <Route path="/skills" component={Skills} />
            <Route path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalStyle>

  );

}

export default App;