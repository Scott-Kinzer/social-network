import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    // console.log(props.profPage)
    let refText = React.createRef();


    function addPostUser  ()  {
        props.addPostik();
    }

    function changeProfTextUser() {
        const text = refText.current.value;
        props.changeProfText(text)
    }

    return (
        <div className="content">
            <ProfileInfo pageInform={props.profPage.profileData}/>
            <div className="posts">
                <h3>My posts</h3>
                <textarea onChange={changeProfTextUser} ref = {refText} className="input-text"  value = {props.profPage.text} type="text"/>
                <button onClick={addPostUser} className="send-button">Send</button>
            </div>
            <hr/>

            <MyPosts posts={props.profPage.posts}/>
        </div>
    )
}

export default Profile;