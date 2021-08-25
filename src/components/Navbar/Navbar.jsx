import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="nav">
            <div><NavLink activeClassName="active" exact to="/">Profile</NavLink></div>
            <div><NavLink activeClassName="active" to="/dialog">Messages</NavLink></div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>
        </nav>
    )
}

export default Navbar;