import React from 'react'
import './StockInfo.css'

const StockInfo = ({ StockName, StockTicker, ChangePercentage }) => {

    const ArrowLogo = ChangePercentage > 0 ? (
        <img src="/images/Green-Arrow.png" alt="Up Arrow" />
    ) : (
        <img src="/images/Red-Arrow.png" alt="Down Arrow" />
    );

    return (

        <div className="StockInfoBox">
            <div className="stock-name">{StockName}</div>
            <div className="stock-ticker">{StockTicker}</div>
            <div className="stock-logo">{ArrowLogo}</div>
            <div className="stock-percentage-change">{ChangePercentage}%</div>
        </div>

    )
}

export default StockInfo
