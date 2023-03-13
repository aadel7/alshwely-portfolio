import React from "react";
import styled from "styled-components";
import { CardColumns, Card, Button } from "react-bootstrap";
import Scrollchor from "react-scrollchor";
import ArrowScroll from "./ArrowScroll";

const Styles = styled.div`
  article {
    padding-top: 5%;
    color: grey;
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: #212529;
    text-align: center;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 150%;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #212529;
    text-align: justify;
  }

  .card {
    width: 90%;
    height: 100%;
    color: white;
    background-color: rgba(52, 52, 52, 0.8);
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .btn {
    font-family: "Bungee";
    font-size: 1.5rem;

    &:hover {
      font-family: "Bungee";
      text-decoration: underline;
    }
  }
`;

const StyledButton = styled(Button)`
  min-width: 120px;
  min-height: 50px;
  font-size: 1.5rem;
  font-family: "Bungee";
`;

const StyledScrollchor = styled(Scrollchor)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    color: #111;
  }
`;

const About = () => {
  return (
    <Styles>
      <article id="about">
        <CardColumns>
          <Card className="mx-auto">
            <h1>About</h1>
            <h4>
              Toronto-based SAP Software Engineer. Enjoying world wide web
              since 2000. Focused on innovation, quality and user experience.
            </h4>
            <StyledButton>Download CV</StyledButton>
          </Card>
        </CardColumns>
        <StyledScrollchor
          className="mx-auto"
          to="bio"
          animate={{ offset: -70, duration: 100 }}
        >
          <ArrowScroll />
        </StyledScrollchor>
      </article>
    </Styles>
  );
};

export default About;