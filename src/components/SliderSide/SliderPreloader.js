import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const PreloaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;

  & > img {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    z-index: 2;
  }

  & > i {
    font-size: 10rem;
    position: absolute;
    z-index: 1;
    animation: ${rotate} 2s linear infinite;
  }

  /* React transiton animation */
  &.sliderAnimation-enter {
    transform: translateX(-100%);
  }

  &.sliderAnimation-enter-active {
    transform: translateX(0);
    transition: 2s 0.5s linear;
  }

  &.sliderAnimation-exit-active {
    transform: translateX(100%);
    transition: 2s 0.5s linear;
  }
`;

function Preloader(props) {
  const handleLoad = (event) => (event.target.style.display = 'block');

  return (
    <PreloaderStyled>
      <i className='fas fa-spinner'></i>
      <img onLoad={handleLoad} src={props.src} alt={props.alt} />
    </PreloaderStyled>
  );
}

export default Preloader;
