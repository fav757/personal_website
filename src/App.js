import React from 'react';
import styled from 'styled-components';
import ContentSide from './components/ContentSide/ContentSide';
import SliderSide from './components/SliderSide/SliderSide';

const AppStyled = styled.div`
  display: flex;
  height: 100%;
`;

function App() {
  return (
    <AppStyled>
      <ContentSide />
      <SliderSide />
    </AppStyled>
  );
}

export default App;
