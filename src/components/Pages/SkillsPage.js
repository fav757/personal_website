import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';

const SkillsPageStyled = styled(basicPageStyle)``;

function SkilsPage() {
  return (
    <SkillsPageStyled>
      <h1>My skills</h1>
      <h2>Hard skills</h2>
      <p>
        I can do some JavaScript.
      </p>
    </SkillsPageStyled>
  );
}

export default SkilsPage;