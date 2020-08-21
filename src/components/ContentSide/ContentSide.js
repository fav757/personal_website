import React from 'react';
import styled from 'styled-components';

const ContentSideStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

function ContentSide() {
  return (
    <ContentSideStyled>
      <nav>
        <i className='fas fa-arrow-left'></i>
        <h2>Home</h2>
      </nav>
      <div>
        <i className='fas fa-lightbulb'></i>
        <i className="fas fa-globe"></i>
      </div>
    </ContentSideStyled>
  );
}

export default ContentSide;
