import React from "react";
import './assets/css/header.css'
import win from './assets/images/win.png'
import result from './assets/images/notepad.png'
import ticket from './assets/images/ticket.png'
import wallet from './assets/images/wallet.png'

const Header = () => {
    return <div>
        <div className="navbar-container">
            <div className="nav-logo">
                Lottery Heaven
            </div>
            <div className="nav-menu">
                <ul>
                    <li className="hover-underline-animation"><img src={win} alt="Winner" /> <span>Raffle</span></li>
                    <li className="hover-underline-animation"><img src={result} alt="Result" /> <span>Results</span></li>
                    <li className="hover-underline-animation"><img src={ticket} alt="Ticket" /> <span>Ticket Query</span></li>
                    <li className="hover-underline-animation"><img src={wallet} alt="Ticket" /> <span>Metamask</span></li>
                </ul>
            </div>
        </div>
        <div className="line"></div>
    </div>;
};

export default Header;
