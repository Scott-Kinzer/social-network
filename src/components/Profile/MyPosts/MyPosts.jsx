import React from "react";
import './MyPosts.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
    return (
            <div className="messages">
                <MyPost/>
                <MyPost/>
            </div>

    )
}

export default MyPosts;