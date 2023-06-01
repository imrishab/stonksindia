import React, { useState } from "react";
import './marketMoodMeter.css'
import { FcLineChart } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";

const MarketMoodMeter = () => {
    const [rotation, setRotation] = useState(90);
    const rotateArrow = () => {
        setRotation(270);
    }
    // const arrowRotation = () => {
    //     if (indexDayChangePercentage >= 0.5) {
    //         setRotation(130)
    //     }
    // }


    return (
        <div className="main-wrapper">

            <h2>Market Mood Index</h2>

            <div className="market-mood-meter-container">
                <img src="\images\marketmoodmeter.png" alt="" className="marketmoodmeter" />




                <div className="arrow-container" style={{ transform: `rotate(${rotation}deg)` }}>
                    <img src="\images\marketmoodmeter-needle.png" alt="" className="marketmoodmeter-needle" />
                </div>

                <button className="arrow-button" onClick={rotateArrow}>click</button>



            </div>
        </div>
    )
}

export default MarketMoodMeter







