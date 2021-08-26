import React, {Fragment} from "react";
import nature from "../../../img/nature.jpg";
import avatar from "../../../img/human.jpeg";

const ProfileInfo = () => {
    return (
        <Fragment>
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
        </Fragment>

    )
}

export default ProfileInfo;