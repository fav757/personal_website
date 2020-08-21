import React from 'react';
import styled from 'styled-components';
import slideHome from './slide_home.jpg';

const SliderSideStyled = styled.div`
  overflow: hidden;
  flex: 1;
  height: 100%;

  & > div {
    height: 100%;
  }

  & img {
    height: 100%;
  }
`;

function SliderSide() {
  return (
    <SliderSideStyled>
      <div>
        <img src={slideHome} alt='slide'></img>
      </div>
    </SliderSideStyled>
  );
}

export default SliderSide;
