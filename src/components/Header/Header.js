import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Controlls from './Controlls';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: ${(props) =>
    props.theme.mode === 'dark' ? '1px solid white' : '1px solid black'};

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    position: sticky;
    z-index: 998;
    top: 0;
    background: ${(props) =>
      props.theme.mode === 'dark'
        ? 'linear-gradient(90deg, #373648 0%, #3b3667 100%)'
        : 'white'} ;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Navigation />
      <Controlls />
    </HeaderStyled>
  );
}

export default Header;
