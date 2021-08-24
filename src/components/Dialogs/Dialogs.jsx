import React from "react";
import "./Dialogs.css";
import photo from "../../img/nature.jpg"
const Dialogs = () => {
    return (
        <div className="content">
            <div className="content-wrapper">
                <div className="list-of-people">
                    <h3>Dialogs</h3>
                    <ul className="list-name">
                        <li>Bob</li>
                        <li>Jane</li>
                        <li>Kate</li>
                        <li>Lindgard</li>
                        <li>Sisun</li>
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