import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';

const AboutPageStyled = styled(basicPageStyle)``;

function AboutPage() {
  const birthday = new Date('09/12/1997');
  const milisecsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const age = Math.floor((new Date() - birthday) / milisecsInYear);

  return (
    <AboutPageStyled>
      <h2>Main</h2>
      <p>
        I am a {age} year beginner web developer from Kharkiv who is interested
        in web technologies and right now I want to start my Front-end career,
        work on real projects, improving my skills in practice.
      </p>

      <h2>Education</h2>
      <p>
        I study at Kharkiv polytechnical institute at the Faculty of Engineering
        and Physics, specialty "Computer Science". In 2019 I received a
        bachelor's degree. At this moment I am continuing my education in the
        sixth year to get a master's degree.
      </p>

      <h2>Experience</h2>
      <p>
        I did my own study of Front-end basics using resources like MDN and
        learn.javascript.ru. Also was trained in Epam courses in the "Front-end
        / JavaScript" direction. Made several little projects like notes
        aplication or spends manager. My code is available on{' '}
        <a
          href='https://github.com/fav757/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        .
      </p>
    </AboutPageStyled>
  );
}

export default AboutPage;
