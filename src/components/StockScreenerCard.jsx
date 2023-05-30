import React from 'react'
// import StockInfo from "./StockInfo";
import { FcLineChart } from "react-icons/fc";
import IndexInfo from './indexInfo';

import { IoIosArrowForward } from "react-icons/io";
import './StockScreenerCard.css';

const StockScreenerCard = ({ SectionName }) => {

    const stockInfoStyles = {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        margin: '1rem 0 ',

    };
    const stockNameStyles = {
        fontSize: ' 0.8rem',
        width: '110px',
        // minWidth:'110px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

    }
    const stockTickerStyle = {

        width: '80px',
        fontSize: '0.7rem',
        fontWeight: '600',
        color: 'rgb(101, 101, 101)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',

    }

    const stockPercentageChangeStyle = {

        width: '30px',
        fontSize: '0.7rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',


    }

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

                <IndexInfo

                    indexCode="NIFTY"
                />
                <IndexInfo

                    indexCode="BANKNIFTY"
                />
                <IndexInfo

                    indexCode="FINNIFTY"
                />
                <IndexInfo

                    indexCode="NIFTY100"
                />
                <IndexInfo

                    indexCode="NIFTYMIDCAP"
                />
                <IndexInfo

                    indexCode="NIFTYAUTO"
                />
                <IndexInfo

                    indexCode="NIFTYFMCG"
                />
                <IndexInfo

                    indexCode="NIFTYIT"
                />
                <IndexInfo

                    indexCode="NIFTYPHARMA"
                />
                <IndexInfo

                    indexCode="NIFTYMETAL"
                />

            </div>
        </div>
    )
}

export default StockScreenerCard
