import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalContext } from './GlobalState';


ReactDOM.render(
  <GlobalContext>
    <App />
  </GlobalContext>,
  document.getElementById('root')
);
