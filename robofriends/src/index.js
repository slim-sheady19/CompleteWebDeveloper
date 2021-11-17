import React from 'react';
import ReactDOM from 'react-dom'; //we specify React-DOM here because React can be used in many other types of software dev.  this one specifies for web & browsers
import './index.css';     //  ./ indicates the same directory.  so the same folder as index.js
import App from './App';  // .js file is assumed as there is no other .
import reportWebVitals from './reportWebVitals';  //advanced - don't worry.  testing?

import Hello from './Hello';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    {/* below we create a prop (property) called greeting which is a string*/}
    <Hello greeting={'Hello, React Ninja'}/> 
    <App />                 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
