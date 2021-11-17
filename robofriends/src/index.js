import React from 'react';
import ReactDOM from 'react-dom'; //we specify React-DOM here because React can be used in many other types of software dev.  this one specifies for web & browsers
import './index.css';     //  ./ indicates the same directory.  so the same folder as index.js

import 'tachyons';
import Cardlist from './Cardlist';
import {robots} from './robots'; //must destructure robots since robots.js does not export any default class

ReactDOM.render(
  // https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    {/* construct an object of class Cardlist called robots with argument robots, which is an array called robots from robots.js */}
    <Cardlist robots={robots}/>
  </React.StrictMode>,
  document.getElementById('root')
);
