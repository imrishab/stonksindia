import React, { useState } from "react";
import './marketMoodMeter.css'
// import { indexDayChangePercentage } from "./indexInfo";


const MarketMoodMeter = () => {
    const [rotation, setRotation] = useState(0);
    const rotateArrow = () => {
        setRotation(rotation + 10);
    }

    return (
        <div className="main-wrapper">
            {/* <div className="center-point">{indexDayChangePercentage }</div> */}
            <div className="center-hide"></div>
            <div className="bottom-hide"></div>
            <div className="arrow-container" style={{transform: `rotate(${rotation}deg)`}}>
                <div className="arrow-wrapper" >
                    <div className="arrow">

                    </div>
                </div>
            </div>
            <div className="scale scale-1"></div>
            <div className="scale scale-2"></div>
            <div className="scale scale-3"></div>
            <div className="scale scale-4"></div>
            <div className="scale scale-5"></div>
            <div className="scale scale-6"></div>
            <div className="scale scale-7"></div>
            <div className="scale scale-8"></div>
            <div className="scale scale-9"></div>
            <div className="scale scale-10"></div>
            <div className="scale scale-11"></div>
            <div className="scale scale-12"></div>
            <div className="scale scale-13"></div>
            <div className="scale scale-14"></div>
            <div className="scale scale-15"></div>
            <div className="scale scale-16"></div>
            <div className="scale scale-17"></div>
            <div className="scale scale-18"></div>
            <div className="scale scale-19"></div>
            <button className="arrow-button" onClick={rotateArrow}>click</button>

        </div>
    )
}

export default MarketMoodMeter