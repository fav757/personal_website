import React from 'react';
import styled from 'styled-components';
import slideHome from './slide_home.jpg';

function SliderSide() {
  return (
    <div>
      <div>
        <img src={slideHome} alt='slide'></img>
      </div>
    </div>
  );
}

export default SliderSide;
