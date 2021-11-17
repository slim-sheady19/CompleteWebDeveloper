import React from 'react';
import ReactDOM from 'react-dom'; //we specify React-DOM here because React can be used in many other types of software dev.  this one specifies for web & browsers
import './index.css';     //  ./ indicates the same directory.  so the same folder as index.js

import 'tachyons';

import Card from './Card';
import {robots} from './robots'; //must destructure robots since robots.js does not export any default class

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* robots is an array, so we must access each element */}
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
