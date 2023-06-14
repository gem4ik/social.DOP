import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Store} from "./components/redux/state";

const rerenderTree = () => {
    ReactDOM.render(
        <App store={Store}/>,
        document.getElementById('root')
    );
}

rerenderTree()
Store.subscribe(rerenderTree)