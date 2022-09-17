import React from 'react';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import { useHover } from './Hooks.js';


export const StyledArrow = styled.div`

.link {

  font-family: 'Aldrich';
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transform: rotate(-90deg) translate3d(-70%, 0, 0);

  &_arrow {

    display: inline-flex;

    span {
      width: 14px;
      height: 2px;
      background: #BEBDBE;

      &:nth-child(1) {
        transform-origin: left bottom;
        transform: rotate(45deg) translate3d(10px, -10px, 0);
      }

      &:nth-child(2) {
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }
    }
  }

  &_text {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    text-shadow: -0.2px 0 black, 0 -0.2px black, 0.2px 0 black, 0 -0.2px black;
  }

}
  .line {
    margin-left: -14px;
    margin-right: 10px;
    width: 150px;
    height: 2px;
    background: #BEBDBE;
    z-index: 1;

  }

`;


export const ArrowLong = () => {

  const [hoverRef, isHovered] = useHover();

  return (
      <StyledArrow>
        <a class="link" href="#">
          <span class="link_arrow">
            <span></span>
            <span></span>
          </span>
          <span class="line"></span>
          <span class="link_text">Projects</span>
        </a>
      </StyledArrow>
  )
}

export default ArrowLong;