import React from "react";
import "./Dialogs.css";
import photo from "../../img/nature.jpg"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li><NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink></li>
    )
}

const Dialogs = () => {
    return (
        <div className="content">
            <div className="content-wrapper">
                <div className="list-of-people">
                    <h3>Dialogs</h3>
                    <ul className="list-name">
                        <DialogItem id="1" name="Bob"/>
                        <DialogItem id="2" name="Kate"/>
                        <DialogItem id="3" name="Andy"/>
                        <DialogItem id="4" name="Hi"/>
                        <DialogItem id="5" name="One"/>

                    </ul>
                </div>
                <div className="my-dialog">
                    <div className="answer">
                        <div className="answer-photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="answer-description">
                            <p>RGKRKGNFNDGKJNKJNKNKJNKJNKNJ</p>
                        </div>
                    </div>


                    <div className="answer">
                        <div className="answer-photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="answer-description">
                            <p>RGKRKGNFNDGKJNKJNKNKJNKJNKNJ</p>
                        </div>
                    </div>

                    <div className="answer">
                        <div className="answer-photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="answer-description">
                            <p>RGKRKGNFNDGKJNKJNKNKJNKJNKNJ</p>
                        </div>
                    </div>

                    <div className="answer">
                        <div className="answer-photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="answer-description">
                            <p>RGKRKGNFNDGKJNKJNKNKJNKJNKNJ</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;