import React from 'react'
import StockInfo from "./StockInfo";
import { FcLineChart } from "react-icons/fc";

import { IoIosArrowForward} from "react-icons/io";
import './StockScreenerCard.css';

const StockScreenerCard = ({SectionName}) => {
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
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
                <StockInfo
                    StockName="Reliance Industries"
                    StockTicker="ITC"
                    ChangePercentage={-0.28}
                />
            </div>
        </div>
    )
}

export default StockScreenerCard
