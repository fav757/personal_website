import React from 'react';
import styled from 'styled-components';
import sign from './sign.png';
import basicPageStyle from './PageBasicStyle';
import { useTranslation } from 'react-i18next';

const HomePageStyled = styled(basicPageStyle)`
  text-align: center;
  
  & > img[alt='sign'] {
    filter: ${(props) =>
      props.theme.mode === 'dark' ? 'invert(1)' : 'invert(0)'};
  }
`;

function HomePage() {
  const { t } = useTranslation();

  return (
    <HomePageStyled>
      <h1>{t('homePage header')}</h1>
      <h2>{t('homePage subheader')}</h2>
      <img src={sign} alt='sign' />
    </HomePageStyled>
  );
}

export default HomePage;
