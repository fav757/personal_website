import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Controlls from './Controlls';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 1rem 2rem;
  border-bottom: ${(props) =>
    props.theme.mode === 'dark' ? '1px solid white' : '1px solid black'};
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
