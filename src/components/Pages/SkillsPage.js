import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';
import SkillRow from '../SkillRow/SkillRow';

const SkillsPageStyled = styled(basicPageStyle)``;

function SkilsPage() {
  return (
    <SkillsPageStyled>
      <h2>Hard skills</h2>
      <p>Click on the progress bar for details</p>
      <SkillRow
        title='HTML + CSS'
        skillLevel={80}
        skillsList={['Semantics', 'BEM']}
      />
      <SkillRow
        title='JavaScript'
        skillLevel={90}
        skillsList={['Promise', 'Prototype']}
      />
    </SkillsPageStyled>
  );
}

export default SkilsPage;
