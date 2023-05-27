import React from 'react'
import './StockInfo.css'

const StockInfo = ({ StockName, StockTicker, ChangePercentage, style, NameStyle, TickerStyle, PercentageChangeStyle }) => {
    const isPositiveChange = ChangePercentage > 0;
    
    const ArrowLogo = isPositiveChange ? (
      <img src="/images/Green-Arrow.png" alt="Up Arrow" />
    ) : (
      <img src="/images/Red-Arrow.png" alt="Down Arrow" />
    );
  
    const percentageChangeColor = isPositiveChange ? 'rgb(0,185,7)' : 'rgb(185,0,0)';
  
    return (
      <div className="StockInfoBox" style={style}>
        <div className="stock-name" style={NameStyle}>
          {StockName}
        </div>
        <div className="stock-ticker" style={TickerStyle}>
          {StockTicker}
        </div>
        <div className="stock-logo">{ArrowLogo}</div>
        <div className="stock-percentage-change" style={{ ...PercentageChangeStyle, color: percentageChangeColor }}>
          {ChangePercentage}%
        </div>
      </div>
    );
  };
  

export default StockInfo
