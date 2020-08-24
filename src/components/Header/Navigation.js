import React from 'react';
import styled from 'styled-components';
import { useHistory, Link, Switch, Route } from 'react-router-dom';

const routes = ['home', 'about', 'skills', 'contacts'];

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & > i:hover {
    transform: scale(1.2);
    color: ${(props) => (props.theme.mode === 'dark' ? '#bfb9fb' : '#a6e1ec')};
  }

  & h2 {
    margin: 0 0 0 1rem;
    text-transform: capitalize;

    &:hover {
      color: ${(props) =>
        props.theme.mode === 'dark' ? '#bfb9fb' : '#a6e1ec'};
    }
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
    color: black;
    background: ${(props) =>
      props.theme.mode === 'dark' ? 'white' : '#f0f0f0;'};

    & > li {
      padding: 0.5rem 1.2rem;
      text-align: center;
      &:hover {
        background: ${(props) =>
          props.theme.mode === 'dark' ? '#f1f1f1' : '#dddddd;'};
      }

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
