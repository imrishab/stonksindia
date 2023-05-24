import React from 'react';
import './StockSlideshowInfo.css';

const StockSlideshowInfo = ({ StockName, StockPrice, ChangePercentage }) => {
    
  const ArrowLogo = ChangePercentage > 0 ? (
  <img src="/images/Green-Arrow.png" alt="Up Arrow" />
) : (
  <img src="/images/Red-Arrow.png" alt="Down Arrow" />
);

  return (
    <div className="StockSlideshowInfoBox">
      <div className="stock-name-box">
        <div className="stock-name">{StockName}</div>
      </div>
      <div className="stock-data-box">
        <div className="stock-price">{StockPrice}</div>
        <div className="stock-logo">{ArrowLogo}</div>
        <div className="stock-percentage-change">{ChangePercentage}%</div>
      </div>
    </div>
  );
};

export default StockSlideshowInfo;
