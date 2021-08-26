import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DialogData = [
    {
        name: "Kate",
        id: 1
    },
    {
        name: "Andy",
        id: 2
    },
    {
        name: "Bob",
        id: 3
    },
    {
        name: "Pop",
        id: 4
    },
]

const MessageData = [
    {message: "Hello how are you?" },
    {message: "Hello how are you?!!" },
    {message: "Hello how are you?!" },
    {message: "Hello how are you?!!!" },
]

const posts = [
    {id: 1, message: "What's up?"},
    {id: 2, message: "What's up?"},
    {id: 3, message: "What's up?"},
    {id: 4, message: "What's up?"}
]

ReactDOM.render(
  <React.StrictMode>
    <App  posts={posts} dataMes={MessageData} dataDialog={DialogData} />
  </React.StrictMode>,
  document.getElementById('root')
);

