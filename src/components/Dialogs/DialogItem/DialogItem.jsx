import React from "react";
import "./DialogItem.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li>
            <img src={require(`../../../img/${props.photo}`).default} alt=""/>
            <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

export default  DialogItem;