import React, { useState } from 'react';
import styled from 'styled-components';
import NavModalMenu from './NavModalMenu';

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & h2 {
    margin: 0 0 0 1rem;
  }
`;

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);

  return (
    <NavigationStyled>
      <i className='fas fa-arrow-left'></i>
      <div>
        <h2 onClick={handleClick}>Home</h2>
        {showMenu && <NavModalMenu />}
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
