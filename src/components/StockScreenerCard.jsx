import React from 'react'
// import StockInfo from "./StockInfo";
import { FcLineChart } from "react-icons/fc";
import IndexInfo from './indexInfo';

import { IoIosArrowForward } from "react-icons/io";
import './StockScreenerCard.css';

const StockScreenerCard = ({ SectionName }) => {



    return (
        <div className="Card">
            <div className='CardHeader'>
                <div className="left">
                    <FcLineChart></FcLineChart>
                    <h1>{SectionName}</h1>
                </div>
                <div className="right">
                    <h1>More</h1>
                    <IoIosArrowForward></IoIosArrowForward>
                </div>

            </div>
            <div className='CardBody'>

                <IndexInfo indexCode="NIFTY"/>
                <IndexInfo indexCode="BANKNIFTY"/>
                <IndexInfo indexCode="FINNIFTY"/>
                <IndexInfo indexCode="NIFTY100"/>
                <IndexInfo indexCode="NIFTYMIDCAP"/>
                <IndexInfo indexCode="NIFTYAUTO"/>
                <IndexInfo indexCode="NIFTYFMCG"/>
                <IndexInfo indexCode="NIFTYIT"/>
                <IndexInfo indexCode="NIFTYPHARMA"/>
                <IndexInfo indexCode="NIFTYMETAL"/>
                

            </div>
        </div>
    )
}

export default StockScreenerCard
