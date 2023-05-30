import './App.css';
import Navbar from './NavBar';
import ScreenerSectionHome from './ScreenerSectionHome';
import StockSlideshow from './StockSlideshow';
import IndexInfo from './components/indexInfo';




function App() {
  return (
    <div className='container'>
      <Navbar />
      <StockSlideshow />
      <ScreenerSectionHome />
      <IndexInfo
        indexCode="NIFTY"
      />
      <IndexInfo
        indexCode="BANKNIFTY"
      />
      <IndexInfo
        indexCode="FINNIFTY"
      />

    </div>
  );
}

export default App;
