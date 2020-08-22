import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ContentSide from './components/ContentSide/ContentSide';
import SliderSide from './components/SliderSide/SliderSide';
import { GlobalState } from './GlobalState';

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  :root {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-size: 18px;
    color: ${(props) => (props.theme.mode === 'light' ? 'black' : 'white')};
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    background: ${(props) =>
      props.theme.mode === 'dark'
        ? 'linear-gradient(60deg, #312664 0%, #1A9E6F 100%) no-repeat'
        : 'rgb(240, 240, 240)'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
  }

  #root {
    display: flex;
    width: 992px;
    height: 576px;
    background: ${(props) =>
      props.theme.mode === 'dark'
        ? 'linear-gradient(90deg, #373648 0%, #383556 100%)'
        : 'white'} ;
    box-shadow: ${(props) =>
      props.theme.mode === 'dark'
        ? '0px 0px 7px black'
        : '0px 0px 7px lightgray'};
  }
`;

function App() {
  const { state } = useContext(GlobalState);

  return (
    <ThemeProvider theme={{ mode: state.theme }}>
      <GlobalStyles />
      <ContentSide />
      <SliderSide />
    </ThemeProvider>
  );
}

export default App;
