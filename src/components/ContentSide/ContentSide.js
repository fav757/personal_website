import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Controlls from './Controlls';

const ContentSideStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

function ContentSide() {
  return (
    <ContentSideStyled>
      <Navigation />
      <Controlls />
    </ContentSideStyled>
  );
}

export default ContentSide;
