import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export let renderEntireTree = (state, callbackFunc) => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state}  addPost={callbackFunc}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

