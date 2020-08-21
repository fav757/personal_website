import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import HomePage from './HomePage';

const ContentSideStyled = styled.div`
  padding: 2rem;
  flex: 1;
  height: 100%;
`;

function ContentSide() {
  return (
    <ContentSideStyled>
      <Header />
      <HomePage />
    </ContentSideStyled>
  );
}

export default ContentSide;
