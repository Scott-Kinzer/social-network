import React from "react";
import './MyPosts.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
    return (
            <div className="messages">
                <MyPost message="Hey, why nobody love me?"/>
                <MyPost message="Hey, why nobody love me?!"/>
            </div>

    )
}

export default MyPosts;