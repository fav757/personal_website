import React from 'react';
import styled from 'styled-components';
import slideHome from './slide_home.jpg';
import slideAbout from './slide_about.jpg';
import slideSkills from './slide_skills.jpg';
import slideContacts from './slide_contacts.jpg';
import slide404 from './slide_404.jpg';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Preloader from './SliderPreloader';

const SliderSideStyled = styled.div`
  overflow: hidden;
  flex: 1;
  height: 100%;

  & > div {
    display: flex;
    position: relative;
    height: 100%;
  }

  @media screen and (max-width: 576px) {
    height: 50vh;
  }
`;

function SliderSide() {
  const location = useLocation();

  return (
    <SliderSideStyled>
      <div>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            timeout={2500}
            classNames='sliderAnimation'
          >
            <Switch location={location}>
              <Route path='/home'>
                <Preloader src={slideHome} alt={'home'} />
              </Route>
              <Route path='/about'>
                <Preloader src={slideAbout} alt='about' />
              </Route>
              <Route path='/skills'>
                <Preloader src={slideSkills} alt='skills' />
              </Route>
              <Route path='/contacts'>
                <Preloader src={slideContacts} alt='contacts' />
              </Route>
              <Route exact path='/'>
                <Preloader src={slideHome} alt='home' />
              </Route>
              <Route>
                <Preloader src={slide404} alt='page 404' />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </SliderSideStyled>
  );
}

export default SliderSide;
