import React from "react";
import avatar from "../../../../img/human.jpeg";
import './MyPost.css';

const MyPost = () => {
    return (
        <div className="message">
            <img src={avatar} alt=""/>
            <div>Hey, why nobody love me?</div>
        </div>

    )
}

export default MyPost;