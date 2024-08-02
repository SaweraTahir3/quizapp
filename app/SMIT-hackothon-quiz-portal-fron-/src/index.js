
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  // <BrowserRouter>
  <Router>
    <App />
   </Router>
  // </BrowserRouter>,
  ,
  document.getElementById('root')
);

