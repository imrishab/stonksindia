import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StockSlideshowInfo.css';

const StockSlideshowInfo = ({ nseCode }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.stockmarketapi.in/api/v1/getprices', {
          params: {
            token: process.env.REACT_APP_API_KEY,
            nsecode: nseCode
          }
        });
        const data = response.data.data[nseCode];
        console.log('Fetched data:', data);
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [nseCode]);

  if (!stockData) {
    return <div>Loading stock data...</div>;
  }


  const ArrowLogo = stockData.dayChangePerc > 0 ? (
  <img src="/images/Green-Arrow.png" alt="Up Arrow" />
) : (
  <img src="/images/Red-Arrow.png" alt="Down Arrow" />
);

  return (
    <div className="StockSlideshowInfoBox">
      <div className="stock-name-box">
        <div className="stock-name">{stockData.NSECode}</div>
      </div>
      <div className="stock-data-box">
        <div className="stock-price">{stockData.ltp}</div>
        <div className="stock-logo">{ArrowLogo}</div>
        <div className="stock-percentage-change">{stockData.dayChangePerc}%</div>
      </div>
    </div>
  );
};

export default StockSlideshowInfo;











