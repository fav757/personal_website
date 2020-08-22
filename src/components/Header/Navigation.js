import React, { useState } from 'react';
import styled from 'styled-components';
import routes from '../../routes';

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & h2 {
    margin: 0 0 0 1rem;
  }
`;

const NavModalMenuStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.1rem 0 0 0;
  position: absolute;
  background: #37354d;

  & > li {
    padding: 0.5rem 1rem;

    &:not(:last-child) {
      border-bottom: 1px solid white
    }
  }
`;

function NavModalMenu() {
  return (
    <NavModalMenuStyled>
      {routes.map((route) => (
        <li key={route}>{route}</li>
      ))}
    </NavModalMenuStyled>
  );
}

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
