import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';
import { useTranslation } from 'react-i18next';

const AboutPageStyled = styled(basicPageStyle)``;

function AboutPage() {
  const { t } = useTranslation();

  return (
    <AboutPageStyled>
      <h2>{t('aboutPage main header')}</h2>
      <p>{t('aboutPage main')}</p>

      <h2>{t('aboutPage education header')}</h2>
      <p>{t('aboutPage education')}</p>

      <h2>{t('aboutPage experience header')}</h2>
      <p>
        {t('aboutPage experience')}
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
