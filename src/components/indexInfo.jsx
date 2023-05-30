
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './indexInfo.css';

const IndexInfo = ({ indexCode }) => {
    const [indexData, setIndexData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.stockmarketapi.in/api/v1/indexprice', {
              params: {
                token: process.env.REACT_APP_API_KEY,
                indexcode: indexCode
              }
            });
            const data = response.data.data.find(item => item.NSECode === indexCode);
            console.log('Fetched data:', data);
            setIndexData(data);
          } catch (error) {
            console.error('Error fetching stock data:', error);
          }
        };
      
        fetchData();
      }, [indexCode]);
      

    if (!indexData) {
        return <div>Loading stock data...</div>;
    }

    return (
        <div className='indexInfoBox'>
            <div className="index-name-box">
                <div className="index-name">{indexData.NSECode}</div>
            </div>
            <div className="index-data-box">
                <div className="index-price">{indexData.ltp}</div>
                <div className="index-logo">
                    {indexData.dayChangePerc > 0 ? (
                        <img src="/images/Green-Arrow.png" alt="Up Arrow" />
                    ) : (
                        <img src="/images/Red-Arrow.png" alt="Down Arrow" />
                    )}
                </div>
                <div className="index-percentage-change">{indexData.dayChangePerc}%</div>
            </div>
        </div>
    );
};

export default IndexInfo;





