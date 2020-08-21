import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const ContentSideStyled = styled.div`
  padding: 2rem;
`;

function ContentSide() {
  return (
    <ContentSideStyled>
      <Header />
    </ContentSideStyled>
  );
}

export default ContentSide;
