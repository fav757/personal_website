import React from 'react';
import styled from 'styled-components';
import sign from './sign.png';
import basicPageStyle from './PageBasicStyle';

const HomePageStyled = styled(basicPageStyle)`
  & > img[alt='sign'] {
    filter: ${(props) =>
      props.theme.mode === 'dark' ? 'invert(1)' : 'invert(0)'};
  }
`;

function HomePage() {
  return (
    <HomePageStyled>
      <h1>Alexandr Sapalsky</h1>
      <h2>Junior Front-end developer</h2>
      <p>
        Welcome to my site. Here you can find out who I am and what I can do.
      </p>
      <img src={sign} alt='sign' />
    </HomePageStyled>
  );
}

export default HomePage;
