import React, { useEffect, useRef } from 'react';
import StockSlideshowInfo from './components/StockSlideshowInfo';
import './StockSlideshow.css';

const StockSlideshow = () => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    const slideshowContainer = slideshowRef.current;
    let scrollLeft = 0;

    const scrollContainer = () => {
      scrollLeft += 1;
      slideshowContainer.scrollLeft = scrollLeft;

      if (scrollLeft >= slideshowContainer.scrollWidth - slideshowContainer.clientWidth) {
        // Reset scrollLeft to 0 when reaching the end
        scrollLeft = 0;
        slideshowContainer.scrollLeft = scrollLeft;
      }

      requestAnimationFrame(scrollContainer);
    };

    const animationFrame = requestAnimationFrame(scrollContainer);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="StockSlideshow" ref={slideshowRef}>
      {[...Array(3)].map((_, index) => (
        <React.Fragment key={index}>
          <StockSlideshowInfo
            nseCode="RELIANCE"
          />
          <StockSlideshowInfo
            nseCode="ASIANPAINT"
          />
          <StockSlideshowInfo
            nseCode="AXISBANK"
          />
          <StockSlideshowInfo
           nseCode="BAJFINANCE"
          />
          <StockSlideshowInfo
            nseCode="BATAINDIA"
          />
          <StockSlideshowInfo
            nseCode="HINDUNILVR"
          />
          <StockSlideshowInfo
            nseCode="HDFC"
          />
          <StockSlideshowInfo
           nseCode="ADANIPORTS"
          />
          <StockSlideshowInfo
           nseCode="TCS"
          />
          <StockSlideshowInfo
            nseCode="PIDILITIND"
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default StockSlideshow;