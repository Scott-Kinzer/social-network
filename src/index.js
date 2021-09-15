import './index.css';
import store from "./redux/state";
// import {addPost, changeText} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';
import React from "react";

 let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={store.getState()}  addPost={store.addPost.bind(store)} changeText={store.changeText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree);




