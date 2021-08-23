import React from "react";
import nature from "../../img/nature.jpg";
import avatar from "../../img/human.jpeg";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className="content">
            <div className="image-wrapper">
                <img src={nature} alt=""/>
            </div>
            <div className="inform-account">
                <div className="avatar">
                    <img src={avatar} alt=""/>
                </div>
                <div className="information">
                    <div className="name">
                        Andrew Garfield
                    </div>
                    <div className="age">
                        21 years old
                    </div>
                </div>
            </div>
            <div className="posts">
                <h3>My posts</h3>
                <textarea className="input-text" type="text"/>
                <button className="send-button">Send</button>
            </div>
            <hr/>

            <MyPosts/>
        </div>
    )
}

export default Profile;