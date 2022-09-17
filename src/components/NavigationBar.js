import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';

import styled from 'styled-components';
import background from '../assets/background.jpg';
import list from '../assets/logo-cube-transparent_2.png';
import { Link as LinkScroll, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Burger } from './Burger.js';
import { Menu } from './Menu.js';
import { bool, func } from 'prop-types';
import { useState, useRef } from 'react';
import { useOnClickOutside } from './Hooks.js';

// Get scrollPosition
import { withTheme } from './ThemeProvider'

const Styles = styled.div`

    .navbar {
        // background: url("${background}");
        background-color: rgba(0, 0, 0);
        padding: 0;
        height: 80px;
    }

`;

const StyledLink = styled(Link)`

    text-decoration: none;
    text-align: = right; 

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
        color: #FFF;
    }

    &:hover {
        color: #111;
    }
`;

const StyledScrollchor = styled(Scrollchor)`

text-decoration: none;
text-align: = right;

&:focus, &:visited, &:link, &:active {
    text-decoration: none;
    color: #FFF;
}

&:hover {
    color: #111;
}

.img {
    position: fixed;
    
}

`;

const StyledLinkScroll = styled(LinkScroll)`

text-decoration: none;
text-align: = right; 

&:focus, &:visited, &:link, &:active {
    text-decoration: none;
    color: #FFF;
}

&:hover {
    color: #111;
}
`;

function NavigationBar(props) {

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <Styles>
        <div>
            <Navbar fixed="top">
                {/* <Navbar.Brand> */}
                <StyledScrollchor to="" animate={{ offset: -70 }}>
                    <Container >
                        <img id="logo"
                            src={list}
                        />
                    </Container >
                </StyledScrollchor>
                {/* </Navbar.Brand> */}

                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Item className="px-2">
                            <Burger open={open} setOpen={setOpen} />
                            <Menu open={open} setOpen={setOpen} />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </Styles >
    )
}

const Container = withTheme(styled.div`

    #logo {
        width: 60px;
        height: 60px;
        transform: rotateZ(${props => props.scrollPosition / 20}deg)
    }

`)

NavigationBar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

// export default NavigationBar;
export default withTheme(NavigationBar);