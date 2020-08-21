import React from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';

const PageContainerStyled = styled.div`
  height: calc(100% - 4rem);
  display: grid;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2d2c3e;
    outline: 1px solid slategrey;
  }
`;

function PageContainer() {
  return (
    <PageContainerStyled>
      <HomePage />
    </PageContainerStyled>
  );
}

export default PageContainer;
