import React from "react";
import Slider from './Slider'
import './assets/css/body.css'
import LotteryContainer from "./LotteryBody";

import Revolver from "./assets/images/revolver.png"
import Revolver1 from "./assets/images/revolver-1.png"

const Body = () => {
    return <div className="root">
        <section className="f-sec">
            <div className="f-head"><img src={Revolver} alt="" /> <h1>WANTED</h1> <img src={Revolver1} alt="" /></div>
            <Slider />
        </section>
        <div className="brand-line"></div>
        <section className="S-sec">
            <h1>Active Raffle</h1>
            <LotteryContainer />
        </section>
    </div>;
};

export default Body;
