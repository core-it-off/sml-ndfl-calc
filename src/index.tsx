import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import NDFLCalc from './app/NDFLCalc';

document.title = "NDFL Calculator";

ReactDOM.render(
  <NDFLCalc />,
  document.getElementById('root')
);
