import React from "react";
import Slider from './Slider'
import './assets/css/body.css'
import LotteryContainer from "./LotteryBody";


const Body = () => {
    return <div className="root">
        <section className="f-sec">
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
