import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`

.container {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  margin-top: 0px;
}



`;

export const Layout = (props) => (
  <Styles>
    <Container fluid>
      {props.children}
    </Container >
  </Styles>
)

export default Layout;