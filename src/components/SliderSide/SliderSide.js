import React from 'react';
import styled from 'styled-components';
import slideHome from './slide_home.jpg';
import slideAbout from './slide_about.jpg';
import slideSkills from './slide_skills.jpg';
import slideContacts from './slide_contacts.jpg';
import slide404 from './slide_404.jpg';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const SliderSideStyled = styled.div`
  overflow: hidden;
  flex: 1;
  height: 100%;

  & > div {
    display: flex;
    position: relative;
    height: 100%;
  }

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* React transiton animation */
    &.sliderAnimation-enter {
      transform: translateX(-100%);
    }

    &.sliderAnimation-enter-active {
      transform: translateX(0);
      transition: 2s 0.5s linear;
    }

    &.sliderAnimation-exit-active {
      transform: translateX(100%);
      transition: 2s 0.5s linear;
    }
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
                <img src={slideHome} alt='home' />
              </Route>
              <Route path='/about'>
                <img src={slideAbout} alt='about' />
              </Route>
              <Route path='/skills'>
                <img src={slideSkills} alt='skills' />
              </Route>
              <Route path='/contacts'>
                <img src={slideContacts} alt='contacts' />
              </Route>
              <Route exact path='/'>
                <img src={slideHome} alt='home' />
              </Route>
              <Route>
                <img src={slide404} alt='page 404' />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </SliderSideStyled>
  );
}

export default SliderSide;
