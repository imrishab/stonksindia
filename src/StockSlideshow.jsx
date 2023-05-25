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
            StockName="Nifty 50"
            StockPrice="18,143"
            ChangePercentage={1.5}
          />
          <StockSlideshowInfo
            StockName="Reliance Industries"
            StockPrice="2,448"
            ChangePercentage={-0.28}
          />
          <StockSlideshowInfo
            StockName="Axis Bank"
            StockPrice="823"
            ChangePercentage={-1.45}
          />
          <StockSlideshowInfo
            StockName="Bajaj Finserv finance"
            StockPrice="1,465"
            ChangePercentage={0.77}
          />
          <StockSlideshowInfo
            StockName="Asian Paints"
            StockPrice="1,934"
            ChangePercentage={2.76}
          />
          <StockSlideshowInfo
            StockName="jet Airways"
            StockPrice="1,934"
            ChangePercentage={2.76}
          />
          <StockSlideshowInfo
            StockName="Tata Elxsi"
            StockPrice="1,934"
            ChangePercentage={2.76}
          />
          <StockSlideshowInfo
            StockName="Dmart"
            StockPrice="1,934"
            ChangePercentage={2.76}
          />
          <StockSlideshowInfo
            StockName="Yes Bank"
            StockPrice="1,934"
            ChangePercentage={0.76}
          />
          <StockSlideshowInfo
            StockName="HDFC AMC"
            StockPrice="1,934"
            ChangePercentage={-2.76}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default StockSlideshow;
