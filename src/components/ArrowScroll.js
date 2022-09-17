
import React from 'react';
import styled from 'styled-components';
import { keyframes } from "styled-components";
const arrowScroll = keyframes`

  0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px,-20px);
  }
  50%{
      opacity: 1;
  }
  100%{
      opacity: 0;
      transform: rotate(45deg) translate(20px,20px);
  }
}

`;

export const StyledArrow = styled.div`

.arrow span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #905ACD;
  border-right: 5px solid #905ACD;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${arrowScroll} 2s infinite;
}

.arrow span:nth-child(2){
  animation-delay: -0.2s;
}

.arrow span:nth-child(3){
  animation-delay: -0.4s;
}

`;

export const ArrowScroll = () => (

  <StyledArrow>
    <div class="arrow">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </StyledArrow>
)

export default ArrowScroll;