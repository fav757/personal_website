import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

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
      <div>
        <i className='fas fa-lightbulb'></i>
        <i className='fas fa-globe'></i>
      </div>
    </ContentSideStyled>
  );
}

export default ContentSide;
