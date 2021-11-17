import React from 'react';
import ReactDOM from 'react-dom'; //we specify React-DOM here because React can be used in many other types of software dev.  this one specifies for web & browsers
import './index.css';     //  ./ indicates the same directory.  so the same folder as index.js

import 'tachyons';
import App from './App';

ReactDOM.render(
  // https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
