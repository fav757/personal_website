import React, { useState } from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { Link } from 'react-router-dom';

const NavModalMenuStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.1rem 0 0 -0.89rem;
  position: absolute;
  color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
  background: ${(props) => (props.theme.mode === 'dark' ? 'white' : '#37354d')};

  & > li {
    padding: 0.5rem 1.2rem;

    &:not(:last-child) {
      border-bottom: ${(props) =>
        '1px solid ' + (props.theme.mode === 'dark' ? '#37354d' : 'white')};
    }
  }
`;

function NavModalMenu() {
  return (
    <NavModalMenuStyled>
      {routes.map((route) => (
        <li key={route}>
          <Link to={'/' + route}>{route}</Link>
        </li>
      ))}
    </NavModalMenuStyled>
  );
}

export default NavModalMenu;
