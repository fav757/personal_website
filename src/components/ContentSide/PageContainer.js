import React from 'react';
import styled from 'styled-components';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import SkillsPage from '../Pages/SkillsPage';
import ContactsPage from '../Pages/ContactsPage';
import Page404 from '../Pages/Page404';
import { Switch, Route, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const PageContainerStyled = styled.div`
  height: calc(100% - 3rem);
  padding: 0 2rem;
  display: grid;
  align-items: center;
  overflow: auto;
  scrollbar-color: rgba(0, 0, 0, 0.3) #2d2c3e;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2d2c3e;
    outline: 1px solid slategrey;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
    height: auto;
    overflow: initial;
  }
`;

function PageContainer() {
  const location = useLocation();

  return (
    <PageContainerStyled>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames='pageContainerAnimation'
          timeout={1000}
        >
          <Switch location={location}>
            <Route path='/home'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/skills'>
              <SkillsPage />
            </Route>
            <Route path='/contacts'>
              <ContactsPage />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </PageContainerStyled>
  );
}

export default PageContainer;
