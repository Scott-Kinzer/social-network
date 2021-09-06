import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export let renderEntireTree = (state, callbackFunc , secondFunc) => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state}  addPost={callbackFunc} changeText={secondFunc}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

