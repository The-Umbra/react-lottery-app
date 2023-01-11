import React, { useState, useEffect } from 'react';
import data from './assets/data/lottery.json';

function LotteryContainer() {
    const [lotteries, setLotteries] = useState([]);

    useEffect(() => {
        setLotteries(data);
    }, []);

    return (
        <div className='lottery-container' style={{ maxWidth: '1024px' }}>
            {lotteries.map((lottery, index) => (
                <div className="lot" key={index} style={{ width: '33.33%', float: 'left' }}>
                    <img src={lottery.imageUrl} alt={lottery.name} />
                    <div>Price: {lottery.price}</div>
                    <div>Time left: {lottery.timeLeft}</div>
                </div>
            ))}
        </div>
    );
}

export default LotteryContainer;