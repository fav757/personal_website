import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Controlls from './Controlls';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
