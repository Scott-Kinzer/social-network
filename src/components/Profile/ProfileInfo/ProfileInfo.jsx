import React from "react";

const ProfileInfo = (props) => {
    return (
        <>
            <div className="image-wrapper">
                {/*{props.pageInform.photos.small  ? <img src={props.pageInform.photos.small} alt=""/>: <img src={avatar} alt=""/>}*/}
            </div>
            <div className="inform-account">
                <div className="avatar">
                    {/*{props.pageInform.photos.small ? <img src={props.pageInform.photos.small} alt=""/>: <img src={avatar} alt=""/>}*/}

                </div>
                <div className="information">
                    <div className="name">
                        {/*{props.pageInform.aboutMe}*/}
                    </div>
                    <div className="age">
                        {props.pageInform.fullName}

                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileInfo;