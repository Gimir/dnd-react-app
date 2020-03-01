import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';

const ExButton = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  position: relative;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 50%;
    margin-left: -50%;
    top: 50%;
    margin-top: -1px;
    transform: rotate(45deg);
    background-color: ${colors.input_background};

    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      left: 50%;
      margin-left: -50%;
      top: 50%;
      margin-top: -1px;
      transform: rotate(-90deg);
      background-color: ${colors.input_background};
    }
  }
`;

const CloseBtn = ({ onClick, position, size }) => (
  <ExButton onClick={onClick} style={position} size={size}>
    <span></span>
  </ExButton>
);

export default CloseBtn;
