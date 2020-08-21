import React from 'react';
import styled from 'styled-components';

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & > h2 {
    margin: 0 0 0 1rem;
  }
`;

function Navigation() {
  return (
    <NavigationStyled>
      <i className='fas fa-arrow-left'></i>
      <h2>Home</h2>
    </NavigationStyled>
  );
}

export default Navigation;
