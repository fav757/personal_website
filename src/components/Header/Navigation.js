import React from 'react';
import styled from 'styled-components';
import { useHistory, Link, Switch, Route } from 'react-router-dom';

const routes = ['home', 'about', 'skills', 'contacts'];

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & h2 {
    margin: 0 0 0 1rem;
    text-transform: capitalize;
  }

  & a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
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
      text-align: center;

      &:not(:last-child) {
        border-bottom: ${(props) =>
          '1px solid ' + (props.theme.mode === 'dark' ? '#37354d' : 'white')};
      }
    }
  }
`;

function Navigation() {
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <NavigationStyled>
      <i onClick={handleClick} className='fas fa-arrow-left'></i>
      <div>
        <h2>
          <Switch>
            {routes.map((route) => (
              <Route key={route} path={'/' + route}>
                {route}
              </Route>
            ))}
            <Route exact path='/'>
              Home
            </Route>
            <Route>Error</Route>
          </Switch>
        </h2>
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
