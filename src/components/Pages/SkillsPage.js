import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';
import SkillRow from '../SkillRow/SkillRow';

const SkillsPageStyled = styled(basicPageStyle)``;

function SkilsPage() {
  return (
    <SkillsPageStyled>
      <p>Click on the progress bar for details</p>
      <h2>Basics</h2>
      <SkillRow
        title='HTML + CSS'
        skillLevel={75}
        skillsList={['Semantic', 'Flex', 'Grid', 'BEM', 'Sass']}
      />
      <SkillRow
        title='JavaScript'
        skillLevel={80}
        skillsList={[
          'Prototype',
          'Promise',
          'Async',
          'Hoisting',
          'Context',
          'Scope',
          'DOM',
          'AJAX',
        ]}
      />
      <h2>Frameworks and libraries</h2>
      <SkillRow
        title='React'
        skillLevel={75}
        skillsList={[
          'State',
          'Hooks',
          'Life-cycle',
          'Redux',
          'React Router',
          'React Transition group',
          'CSS modules',
          'Styled components',
        ]}
      />
      <h2>Tools</h2>
      <SkillRow
        title='NodeJs'
        skillLevel={55}
        skillsList={['Basics', 'npm']}
      />
      <SkillRow
        title='Git'
        skillLevel={65}
        skillsList={['Basics', 'GitHub', 'Branches']}
      />
      <SkillRow
        title='Photoshop'
        skillLevel={70}
        skillsList={['Photo correction', 'Design']}
      />
      <h2>Languages</h2>
      <SkillRow
        title='English'
        skillLevel={75}
        skillsList={['B2']}
      />
      <SkillRow
        title='Russian'
        skillLevel={100}
        skillsList={['Native speaker']}
      />
      <SkillRow
        title='Ukrainian'
        skillLevel={100}
        skillsList={['Native speaker']}
      />
    </SkillsPageStyled>
  );
}

export default SkilsPage;
