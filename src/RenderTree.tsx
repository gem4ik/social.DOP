import {addCurrentPostText, addPost, StoreType} from "./components/Data/Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree =(Store: StoreType)=> {
    ReactDOM.render(
        <App
            addCurrentPostText={addCurrentPostText}
            props={Store}
            addPost={addPost}
        />,
        document.getElementById('root')
    );
}