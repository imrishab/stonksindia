import React from 'react'
import StockScreenerCard from './components/StockScreenerCard'
import './ScreenerSectionHome.css'

const ScreenerSectionHome = () => {
  return (
    <div className='ScreenerSectionHome'>
      <StockScreenerCard
      SectionName={"Indices"}
      
      />
      <StockScreenerCard
      SectionName={"Top Gainers"}
      
      />
      <StockScreenerCard
      SectionName={"Trending"}
      
      />
    </div>
  )
}

export default ScreenerSectionHome
