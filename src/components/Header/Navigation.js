import React from 'react';
import styled from 'styled-components';
import { useHistory, Link, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  &:hover ul {
    visibility: visible;
    opacity: 1;
  }

  & > i {
    cursor: pointer;
  }

  & > i:hover {
    transform: scale(1.2);
    color: ${(props) => (props.theme.mode === 'dark' ? '#bfb9fb' : '#4fa7ff')};
  }

  & h2 {
    margin: 0 0 0 1rem;

    &:hover {
      color: ${(props) =>
        props.theme.mode === 'dark' ? '#bfb9fb' : '#4fa7ff'};
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

  & ul {
    z-index: 998;
    opacity: 0;
    transition: 0.25s linear;
    visibility: hidden;
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
  const { t } = useTranslation();
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <NavigationStyled>
      <i title={t('header go back')} onClick={handleClick} className='fas fa-arrow-left'></i>
      <div>
        <h2>
          <Switch>
            <Route path='/home'>{t('header home')}</Route>
            <Route path='/about'>{t('header about')}</Route>
            <Route path='/skills'>{t('header skills')}</Route>
            <Route path='/contacts'>{t('header contacts')}</Route>
            <Route exact path='/'>
              {t('header home')}
            </Route>
            <Route>{t('header error404')}</Route>
          </Switch>
        </h2>
        <ul>
          <li>
            <Link to='/home'>{t('header home')}</Link>
          </li>
          <li>
            <Link to='/about'>{t('header about')}</Link>
          </li>
          <li>
            <Link to='/skills'>{t('header skills')}</Link>
          </li>
          <li>
            <Link to='/contacts'>{t('header contacts')}</Link>
          </li>
        </ul>
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
