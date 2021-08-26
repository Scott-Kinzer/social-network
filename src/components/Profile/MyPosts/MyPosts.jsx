import React from "react";
import './MyPosts.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    return (
            <div className="messages">
                {props.posts.map(item => {
                    return (
                        <MyPost message={item.message}/>
                    )
                })}
            </div>

    )
}

export default MyPosts;