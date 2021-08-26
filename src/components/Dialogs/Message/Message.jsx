import photo from "../../../img/nature.jpg";
import React from "react";

const Message = (props) => {
    return (
        <div className="answer">
            <div className="answer-photo">
                <img src={photo} alt=""/>
            </div>
            <div className="answer-description">
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message;