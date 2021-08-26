import React from "react";
import "./DialogItem.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li><NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink></li>
    )
}

export default  DialogItem;