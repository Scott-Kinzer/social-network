import React, {createRef} from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let refText = React.createRef();
    return (
        <div className="content">
            <ProfileInfo/>
            <div className="posts">
                <h3>My posts</h3>
                <textarea ref = {refText} className="input-text" type="text"/>
                <button onClick={() => {props.addPost(refText.current.value)}} className="send-button">Send</button>
            </div>
            <hr/>

            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;