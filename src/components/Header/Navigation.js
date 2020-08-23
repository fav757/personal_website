import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

const routes = ['home', 'about', 'skills', 'contacts'];

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & h2 {
    margin: 0 0 0 1rem;
  }

  &:hover ul {
    display: block;
  }

  & ul {
    display: none;
    list-style: none;
    padding: 0;
    margin: 0 0 0 -0.89rem;
    position: absolute;
    color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
    background: ${(props) =>
      props.theme.mode === 'dark' ? 'white' : '#37354d'};

    & > li {
      padding: 0.5rem 1.2rem;

      &:not(:last-child) {
        border-bottom: ${(props) =>
          '1px solid ' + (props.theme.mode === 'dark' ? '#37354d' : 'white')};
      }
    }
  }
`;

const pageHistory = [];

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    pageHistory.push(history.location.pathname);
  }, [history.location.pathname]);

  const handleClick = () => setShowMenu(!showMenu);
  const backHistory = () => {
    if (pageHistory[pageHistory.length - 2]) {
      pageHistory.pop();
      history.goBack();
    } else {
      if (window.confirm('Do you want to leave the site?')) {
        history.goBack();
      }
    }
  };

  return (
    <NavigationStyled>
      <i onClick={backHistory} className='fas fa-arrow-left'></i>
      <div>
        <h2 onClick={handleClick}>Home</h2>
        <ul>
          {routes.map((route) => (
            <li key={route}>
              <Link to={'/' + route}>{route}</Link>
            </li>
          ))}
        </ul>
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
