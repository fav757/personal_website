import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalContext } from './GlobalState';
import { HashRouter } from 'react-router-dom';
import './i18n';

ReactDOM.render(
  <GlobalContext>
    <HashRouter hashType='noslash'>
      <App />
    </HashRouter>
  </GlobalContext>,
  document.getElementById('root')
);
