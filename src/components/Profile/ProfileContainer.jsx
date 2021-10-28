import './Profile.css';
import {
    addPostik,
    changeProfText,
    setProfileData
} from "../../redux/profile-reducers";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react"
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        profPage: state.profilePage
    }
}


class ProfileApi extends React.Component {

    componentDidMount() {

        let userID = this.props.match.params.userID
        console.log(userID)
        if (userID) {
            fetch(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
                .then(response => {
                    return response.json()
                }).then(data => {
                this.props.setProfileData(data)
            })
        } else  {
            fetch(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    return response.json()
                }).then(data => {
                this.props.setProfileData(data)
            })
        }
    }

    render () {

        return <Profile {...this.props}  />
    }
}

const ProfileContainer = connect(mapStateToProps, {
    addPostik,
    changeProfText,
    setProfileData
})(withRouter(ProfileApi));

export default ProfileContainer;