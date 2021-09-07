import './index.css';
import state from "./redux/state";
import {addPost, changeText} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';
import React from "react";

 let renderEntireTree = (state, callbackFunc , secondFunc) => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state}  addPost={callbackFunc} changeText={secondFunc}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state, addPost, changeText)





