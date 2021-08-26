import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo/>
            <div className="posts">
                <h3>My posts</h3>
                <textarea className="input-text" type="text"/>
                <button className="send-button">Send</button>
            </div>
            <hr/>

            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;