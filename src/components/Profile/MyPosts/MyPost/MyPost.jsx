import React from "react";
import avatar from "../../../../img/human.jpeg";
import './MyPost.css';

const MyPost = (props) => {
    return (
        <div className="message">
            <img src={avatar} alt=""/>
            <div>{props.message}</div>
        </div>

    )
}

export default MyPost;