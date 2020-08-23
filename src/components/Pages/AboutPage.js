import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';

const AboutPageStyled = styled(basicPageStyle)``;

function AboutPage() {
  return (
    <AboutPageStyled>
      <h1>About me</h1>
      <h2>Education</h2>
      <p>
        I study in NTU KHPI.
      </p>
    </AboutPageStyled>
  );
}

export default AboutPage;
