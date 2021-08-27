import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    return (
        <div className="content">
            <div className="content-wrapper">
                <div className="list-of-people">
                    <h3>Dialogs</h3>
                    <ul className="list-name">
                        {props.dataDialog.map((item, i) => {
                            return  <DialogItem id={item.id} name={item.name} photo={item.img}/>
                        })}
                    </ul>
                </div>
                <div className="my-dialog">
                    {props.dataMes.map((item, i) => {
                        return  <Message message={item.message}/>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Dialogs;