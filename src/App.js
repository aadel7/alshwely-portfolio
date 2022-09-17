import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        // Set up the Router
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/" className="item">Articles</Link>
            <Link to="/" className="item">About</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
