import React from "react";
import './assets/css/header.css'
import logo from './assets/images/logo.png'

const Header = () => {
    return <div className="navbar">
        <div className="navbar-container">
            <div className="nav-logo">
                <img
                    className="rounded-full w-8 h-8"
                    src={logo}
                    alt="user-profile" />
                Lottery Heaven
            </div>
            <div className="nav-menu">
                <ul>
                    <li>Raffle</li>
                    <li>Results</li>
                    <li>Ticket Query</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Header;
