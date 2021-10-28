import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let refTextMes = React.createRef();


    let UserChangeMessage = () => {
        const text = refTextMes.current.value;
        console.log(text)

        props.ChangeMessage(text)
    }

    let UseronSendMessageClick = () => {

        props.onSendMessageClick();

    }
    console.log(props)

    return (

        <div className="content">
            <div className="content-wrapper">
                <div className="list-of-people">
                    <h3>Dialogs</h3>
                    <ul className="list-name">
                        {props.data.messagePage.DialogData.map(item => {
                            return  <DialogItem id={item.id} name={item.name} photo={item.img}/>
                        })}
                    </ul>
                </div>
                <div className="my-dialog">
                    {props.data.messagePage.MessageData.map(item => {

                        return  <Message message={item.message}/>
                    })}

                    <div><textarea value={props.data.messagePage.newMessageText}  ref = {refTextMes}
                                   onChange={UserChangeMessage}
                                   placeholder="Enter your message"></textarea></div>
                    <div><button    onClick={UseronSendMessageClick}></button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;