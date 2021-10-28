import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="nav">
            <div><NavLink activeClassName="active" exact to="/profile/">Profile</NavLink></div>
            <div><NavLink activeClassName="active" to="/dialog">Messages</NavLink></div>
            {/*<div><NavLink href="">News</NavLink></div>*/}
            {/*<div><NavLink href="">Music</NavLink></div>*/}
            {/*<div><NavLink href="">Settings</NavLink></div>*/}
            <div><NavLink activeClassName="active" to="/users">Users</NavLink></div>
            <div><NavLink activeClassName="active" to="/weather">Weather</NavLink></div>


        </nav>
    )
}

export default Navbar;