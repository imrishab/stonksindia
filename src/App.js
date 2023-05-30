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
    </div>
  );
}

export default App;
