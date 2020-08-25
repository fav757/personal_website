import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import PageContainer from './PageContainer';

const ContentSideStyled = styled.div`
  padding-bottom: 1rem;
  flex: 1;
  height: 100%;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding-bottom: 0;
  }
`;

function ContentSide() {
  return (
    <ContentSideStyled>
      <Header />
      <PageContainer />
    </ContentSideStyled>
  );
}

export default ContentSide;
