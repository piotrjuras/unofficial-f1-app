import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

localStorage.getItem("theme_setting") ? document.documentElement.className = "dark" : document.documentElement.className = "light";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

