import React from 'react'
import StockScreenerCard from './components/StockScreenerCard'
import './ScreenerSectionHome.css'
import MarketMoodMeter from './components/marketMoodMeter'

const ScreenerSectionHome = () => {
  return (
    <div className='ScreenerSectionHome'>
      <StockScreenerCard
      SectionName={"Indices"}
      
      />
      <StockScreenerCard
      SectionName={"Top Gainers"}
      
      />
      <MarketMoodMeter/>
    </div>
  )
}

export default ScreenerSectionHome
