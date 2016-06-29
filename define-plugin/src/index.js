import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';

if (process.env.NODE_ENV === 'dev') {
  console.log('this will be removed on prod build')
}

ReactDOM.render(
  <span>Hello World!</span>,
  document.getElementById('app')
);
