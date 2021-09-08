import './index.css';
import state, {subscribe} from "./redux/state";
import {addPost, changeText} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';
import React from "react";

 let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state}  addPost={addPost} changeText={changeText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

subscribe(renderEntireTree);




