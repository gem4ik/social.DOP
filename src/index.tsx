import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from "./components/Data/Store";

ReactDOM.render(
    <App data={Store} />,
  document.getElementById('root')
);