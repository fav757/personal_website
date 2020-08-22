import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalContext } from './GlobalState';

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
    background: linear-gradient(60deg, #312664 0%, #1A9E6F 100%) no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root {
    width: 992px;
    height: 576px;
    background: linear-gradient(90deg, #373648 0%, #383556 100%);
    box-shadow: 0px 0px 7px black;
  }
`;

ReactDOM.render(
  <GlobalContext>
    <ThemeProvider theme={{ mode: 'dark' }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </GlobalContext>,
  document.getElementById('root')
);
