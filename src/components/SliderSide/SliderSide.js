import React from 'react';
import styled from 'styled-components';
import slideHome from './slide_home.jpg';
import slideAbout from './slide_about.jpg';
import slideSkills from './slide_skills.jpg';
import slideContacts from './slide_contacts.jpg';
import slide404 from './slide_404.jpg';
import { Switch, Route } from 'react-router-dom';

const SliderSideStyled = styled.div`
  overflow: hidden;
  flex: 1;
  height: 100%;

  & > div {
    height: 100%;
  }

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

function SliderSide() {
  return (
    <SliderSideStyled>
      <div>
        <Switch>
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
      </div>
    </SliderSideStyled>
  );
}

export default SliderSide;
