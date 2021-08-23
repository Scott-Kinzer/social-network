import React from "react";
import './Header.css'
import facebook from '../../img/facebook.png';
const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={facebook} alt=""/>
        </header>
    )
}

export default Header