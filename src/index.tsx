import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from "./components/Data/Store";

export const renderTree =()=> {
    ReactDOM.render(
        <App Store={Store}        />,
        document.getElementById('root')
    );
}
renderTree()
Store.subscribe(renderTree)