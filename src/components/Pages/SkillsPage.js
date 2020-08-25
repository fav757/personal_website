import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';
import SkillRow from '../SkillRow/SkillRow';
import { useTranslation } from 'react-i18next';

const SkillsPageStyled = styled(basicPageStyle)``;

function SkilsPage() {
  const { t } = useTranslation();

  return (
    <SkillsPageStyled>
      <p>{t('skillsPage tip')}</p>
      <h2>{t('skillsPage basics')}</h2>
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
      <h2>{t('skillsPage frameworks')}</h2>
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
      <h2>{t('skillsPage tools')}</h2>
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
      <h2>{t('skillsPage languages')}</h2>
      <SkillRow
        title={t('skillsPage english')}
        skillLevel={75}
        skillsList={['B2']}
      />
      <SkillRow
        title={t('skillsPage russian')}
        skillLevel={100}
        skillsList={[t('skillsPage native')]}
      />
      <SkillRow
        title={t('skillsPage ukrainian')}
        skillLevel={100}
        skillsList={[t('skillsPage native')]}
      />
    </SkillsPageStyled>
  );
}

export default SkilsPage;
